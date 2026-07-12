// src/pages/Login/ForgotPassword.jsx

import "./ForgotPassword.css";

function ForgotPassword() {

  return (

    <div className="forgot-page">

      <div className="forgot-card">

        <h2>Şifre Sıfırla</h2>

        <p>

          Kullanıcı adınızı girin.

        </p>

        <input
          type="text"
          placeholder="Kullanıcı Adı"
        />

        <button>

          Şifre Sıfırlama Talebi Oluştur

        </button>

      </div>

    </div>

  );

}

export default ForgotPassword;