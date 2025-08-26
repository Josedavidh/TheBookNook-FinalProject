import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate, Navigate } from "react-router-dom";

const initialStateUser = {
  email: "",
  password: "",
};

export const Login = () => {
  const [user, setUser] = useState(initialStateUser);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCredential({
      ...credential,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/login`,

        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credential),
        }
      );
      const data = await resp.json();
      console.log("Token desde backend:", data.token);
      if (resp.ok) {
        dispatch({
          type: "UPDATE_TOKEN",
          payload: data.token,
        });
        navigate("/");
        console.log("ok");
        console.log(data);
      } else {
        console.log("no ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <form
            onSubmit={handleSubmit}
            className="border p-4 shadow rounded bg-white"
          >
            <h2 className="text-center mb-4">Login</h2>
            <div className="form-group mb-3">
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                placeholder="Tu correo"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                // value={user.email}
                value={credential.email}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                placeholder="Tu contraseña"
                className="form-control"
                id="password"
                name="password"
                onChange={handleChange}
                // value={user.password}
                value={credential.password}
                required
                disabled={loading}
              />
              <div className="mt-2">
                <Link to="/forgot-password">
                  ¿Forgot password?
                </Link>
              </div>
            </div>
            {message && (
              <div
                className={`alert ${
                  message.includes("exitoso") ? "alert-success" : "alert-danger"
                }`}
                role="alert"
              >
                {message}
              </div>
            )}
            <button
              type="submit"
              className="btn btn-success w-100"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <div className="text-center mt-3">
              <small>
                ¿Don't have an account? <Link to="/signup">Sign Up</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
