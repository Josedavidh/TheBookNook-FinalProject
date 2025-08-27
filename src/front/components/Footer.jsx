import { Link } from "react-router-dom";

export const Footer = () => (
  <div className="container-fluid">
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-4 border-top bg-dark text-white px-5">
      <div className="col ">
        <Link
          to="/"
          className="d-flex align-items-center mb-4 link-light text-decoration-none"
          aria-label="Inicio"
        >
          <svg className="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </Link>
        <p className="text-light">© 2025 The Book Nook</p>
      </div>

      <div className="col"></div>

      <div className="col ">
        <h5>Categories</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/categories" className="nav-link p-0 text-light">
              Explore Categories
            </Link>
          </li>
        </ul>
      </div>

      <div className="col ">
        <h5>About Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/who-we-are" className="nav-link p-0 text-light">
              Who We Are
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/contact-us" className="nav-link p-0 text-light">
              Contact Us
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="/faq"
              className="nav-link p-0 text-light"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>

      <div className="col ">
        <h5>Our Policy</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link
              to="/privacy-policy"
              className="nav-link p-0 text-light"
            >
              Privacy Policy
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="/cancellation-policy"
              className="nav-link p-0 text-light"
            >
              Cancellation Policy
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              to="/terms-conditions"
              className="nav-link p-0 text-light"
            >
              Terms and Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);