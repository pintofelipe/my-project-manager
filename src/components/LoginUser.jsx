import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { Link } from "react-router-dom";

const LoginUser = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate(); // Usa el hook useNavigate

  const handleLogin = () => {
    if (!loginData.email || !loginData.password) {
      setError("Por favor, complete todos los campos");
      return;
    }

    setUser({ email: loginData.email });
    setError("");
    navigate("/task-project")
    
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-3xl font-bold">Iniciar Sesión</h2>

      <div className="flex flex-col w-1/3 mt-10">
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          className="border border-gray-300 p-3 rounded-lg mb-5"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          className="border border-gray-300 p-3 rounded-lg mb-5"
        />
        {error && <div className="text-red-500 font-semibold">{error}</div>}
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-5 py-3 rounded-lg"
        >
          Iniciar Sesión
        </button>
      </div>

      <p className="mt-5">
        ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default LoginUser;
