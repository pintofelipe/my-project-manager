import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";

const LoginUser = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Usa el hook useNavigate

  const handleLogin = () => {
    if (!loginData.email || !loginData.password) {
      setError("Por favor, complete todos los campos");
      return;
    }


    setError("");
    navigate("/task-project")
    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Gestor de Proyectos Ágiles
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Inicia sesión con tu correo y contraseña.
        </p>
        
        <div className="flex flex-col space-y-5">
          <div className="relative">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <span className="absolute top-3 right-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H8m8-4H8m4 8H8m4-16h.01M4 6h.01M4 10h.01M4 14h.01M4 18h.01"
                />
              </svg>
            </span>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Contraseña"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <span className="absolute top-3 right-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v-3m0 0v-3m0 6h.01M17.657 16.657L16 15.414m1.657 1.243L19 13.586M8.343 7.343L7 8.586M12 21a9 9 0 100-18 9 9 0 000 18z"
                />
              </svg>
            </span>
          </div>

          {error && <div className="text-red-500 font-semibold">{error}</div>}

          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-200"
          >
            Iniciar Sesión
          </button>
        </div>

        <p className="mt-6 text-center text-gray-500">
          ¿No tienes cuenta?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700 transition"
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginUser;
