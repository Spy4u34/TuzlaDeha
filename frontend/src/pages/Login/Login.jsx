// src/pages/Login/Login.jsx

import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const login = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-left">

        <div className="overlay"></div>

        <div className="brand">

          <h1>HSN TUZLA DEHA</h1>

          <p>Personel Yönetim Platformu</p>

        </div>

      </div>

      <div className="login-right">

        <div className="login-card">

          <h2>Hoş Geldiniz</h2>

          <span className="sub">
            Devam etmek için giriş yapın
          </span>

          <div className="input-group">

            <label>Kullanıcı Adı</label>

            <input
              type="text"
              placeholder="Kullanıcı Adı"
            />

          </div>

          <div className="input-group">

            <label>Şifre</label>

            <input
              type="password"
              placeholder="Şifre"
            />

          </div>

          <button
            className="login-btn"
            onClick={login}
          >
            Giriş Yap
          </button>

          <div className="version">

            HSN TUZLA DEHA

            <span>v1.0</span>

          </div>

        </div>

      </div>

    </div>
  );

}

export default Login;