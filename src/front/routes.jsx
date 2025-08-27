// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// home y layout
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/generic-views/Single.jsx";
import { Demo } from "./pages/generic-views/Demo.jsx";

// Generic Views
import { WhoWeAre } from "./pages/generic-views/WhoWeAre.jsx";
import { ContactUs } from "./pages/generic-views/ContactUs.jsx";
import { Faq } from "./pages/generic-views/Faq.jsx";
import { PrivacyPolicy } from "./pages/generic-views/PrivacyPolicy.jsx";
import { TermsConditions } from "./pages/generic-views/TermsConditions.jsx";
import { CancellationPolicy } from "./pages/generic-views/CancellationPolicy.jsx";
import { NotFound } from "./pages/generic-views/NotFound.jsx";
import { Categories } from "./pages/generic-views/Categories.jsx"

//inicio de sesion - registro y gestion de usuarios
import { SignUp } from "./pages/SignUp.jsx";
import { Login } from "./pages/Login.jsx";
import { PasswordRecovery } from "./pages/PasswordRecovery.jsx";
import { ForgotPassword } from "./pages/ForgotPassword.jsx";

//manejo de producto y carrito
import { ProductDetail } from "./pages/ProductDetail.jsx";
import { PurchaseConfirmation } from "./pages/PurchaseConfirmation.jsx";
import { Cart } from "./pages/Cart";

import AllBooks from "./components/AllBooks.jsx"

//vistas admin
import { Customers } from "./pages/admin-pages/Customers.jsx";
import { Dashboard } from "./pages/admin-pages/Dashboard.jsx";
import { Orders } from "./pages/admin-pages/Orders.jsx";
import { Stock } from "./pages/admin-pages/Stock.jsx";
import { Users } from "./pages/admin-pages/Users.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    // Root Route: All navigation will start from here.
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
      <Route path="/" element={<Home />} />
      <Route path="/single/:theId" element={<Single />} />{" "}
      {/* Dynamic route for single items */}
      <Route path="/demo" element={<Demo />} />
      {/* Generic Views */}
      <Route path="/who-we-are" element={<WhoWeAre />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/purchase-confirmation" element={<PurchaseConfirmation />} />
      <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/categories" element={<Categories />} />
         <Route path="/books" element={<AllBooks />} />
      {/* inicio de sesion y manejo de usuario */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-recovery" element={<PasswordRecovery />} />
      {/* carrito y vista de producto */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/confirmation" element={<PurchaseConfirmation />} />
      {/* vistas admin */}
      <Route path="/admin" />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);