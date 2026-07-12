// src/pages/VeriAktar/VeriAktar.jsx

import "./VeriAktar.css";

function VeriAktar() {

  return (

    <div className="veri">

      <div className="page-header">

        <div>

          <h1>Veri Aktar</h1>

          <p>
            Excel dosyalarını sisteme yükleyerek personel ve hakediş verilerini içe aktarabilirsiniz.
          </p>

        </div>

      </div>

      <div className="upload-grid">

        <div className="upload-card">

          <h2>📄 İçtaş Excel Dosyası</h2>

          <p className="upload-info">
            İçtaş tarafından gönderilen personel çalışma listesini seçiniz.
          </p>

          <input type="file" />

          <button>
            Dosya Yükle
          </button>

        </div>

        <div className="upload-card">

          <h2>🏢 Firma Excel Dosyası</h2>

          <p className="upload-info">
            Firma personel ve puantaj listesini seçiniz.
          </p>

          <input type="file" />

          <button>
            Dosya Yükle
          </button>

        </div>

      </div>

      <div className="compare-box">

        <button>

          📊 Dosyaları Karşılaştır

        </button>

      </div>

      <div className="info-card">

        <h3>Bilgilendirme</h3>

        <ul>

          <li>✔ Excel (.xlsx) formatı desteklenmektedir.</li>

          <li>✔ Dosyalar yüklendikten sonra otomatik kontrol yapılacaktır.</li>

          <li>✔ Eksik veya hatalı satırlar raporlanacaktır.</li>

          <li>✔ Karşılaştırma sonucu hakediş hazırlama ekranına aktarılacaktır.</li>

        </ul>

      </div>

    </div>

  );

}

export default VeriAktar;