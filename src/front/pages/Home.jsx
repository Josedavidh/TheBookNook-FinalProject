
import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useSearchAndFilter } from "../hooks/useSearchAndFilter";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import RecentViews from "../components/RecentViews.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedAuthorId, setSelectedAuthorId] = useState(null);
  const [searchText, setSearchText] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const sB = searchParams.get('search') ?? "";
    setSearchText(sB);
  }, [searchParams]);

  const bkUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function LoadCategoriesAndAuthors() {
      try {
        const categoriesResponse = await fetch(`${bkUrl}/categories`);
        const authorsResponse = await fetch(`${bkUrl}/authors`);

        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData);
        }

        if (authorsResponse.ok) {
          const authorsData = await authorsResponse.json();
          setAuthors(authorsData);
        }
      } catch (loadError) {
        console.error("Error loading categories or authors:", loadError);
      }
    }
    LoadCategoriesAndAuthors();
  }, [bkUrl]);

  useEffect(() => {
    async function loadFilteredProducts() {
      try {
        const queryParameters = new URLSearchParams();
        if (selectedCategoryId !== null)
          queryParameters.append("category_id", selectedCategoryId);
        if (selectedAuthorId !== null)
          queryParameters.append("author_id", selectedAuthorId);

        if (searchText !== '') {
          queryParameters.append('search', searchText);
        }

        const requestUrl = `${bkUrl}/products${queryParameters.toString() ? "?" + queryParameters.toString() : ""
          }`;

        const productsResponse = await fetch(requestUrl);
        const productsData = await productsResponse.json();

        if (productsResponse.ok) {
          setProducts(productsData);
        } else {
          setProducts([]);
        }
      } catch (loadError) {
        console.error("Error al cargar productos filtrados:", loadError);
        setProducts([]);
      }
    }

    loadFilteredProducts();
  }, [bkUrl, selectedCategoryId, selectedAuthorId, searchText]);

  const isFiltering = Boolean(searchText || selectedCategoryId !== null || selectedAuthorId !== null);
  const displayedProducts = isFiltering ? products : products.filter(p => p.is_featured).slice(0, 8);

  return (
    <div className="home-container text-center">
      <div>
          <img src="Library_banner.jpg" alt="Library Banner" />
        </div>
      <div className="container text-center mt-5">
        


        <h2>Featured Books</h2>

        <div className="row">

          {displayedProducts.map((p) => (
            <div key={p.id} className="col=12 col-sm-6 col-md-3 mb-5">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
        <RecentViews bkUrl={bkUrl} />
      </div>
    </div>
  );
};