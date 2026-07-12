// src/pages/Ayarlar/Ayarlar.jsx

import "./Ayarlar.css";

function Ayarlar() {

  return (

    <div className="ayarlar">

      <div className="page-header">

        <div>

          <h1>Ayarlar</h1>

          <p>
            Sistem ve firma bilgilerini buradan yönetebilirsiniz.
          </p>

        </div>

      </div>

      <div className="settings-grid">

        <div className="settings-box">

          <h2>🏢 Firma Bilgileri</h2>

          <div className="setting-item">

            <span>Firma Adı</span>

            <input
              type="text"
              value="HSN TUZLA DEHA"
              readOnly
            />

          </div>

          <div className="setting-item">

            <span>Versiyon</span>

            <input
              type="text"
              value="v1.0"
              readOnly
            />

          </div>

        </div>

        <div className="settings-box">

          <h2>💻 Sistem Bilgileri</h2>

          <div className="setting-item">

            <span>Veritabanı</span>

            <input
              type="text"
              value="SQLite"
              readOnly
            />

          </div>

          <div className="setting-item">

            <span>Backend</span>

            <input
              type="text"
              value="Node.js + Express"
              readOnly
            />

          </div>

        </div>

      </div>

      <div className="settings-info">

        <h3>Bilgilendirme</h3>

        <ul>

          <li>✔ Firma ayarları yönetici yetkisi ile değiştirilebilir.</li>

          <li>✔ Sistem ayarları güvenli şekilde saklanacaktır.</li>

          <li>✔ Yeni sürümlerde ek ayarlar bu ekrana eklenecektir.</li>

        </ul>

      </div>

    </div>

  );

}

export default Ayarlar;