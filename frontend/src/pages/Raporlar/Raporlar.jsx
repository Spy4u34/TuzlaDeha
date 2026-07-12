// src/pages/Raporlar/Raporlar.jsx

import "./Raporlar.css";

function Raporlar() {

  return (

    <div className="raporlar">

      <div className="page-header">

        <div>

          <h1>Raporlar</h1>

          <p>
            Sistemden oluşturabileceğiniz raporları buradan yönetebilirsiniz.
          </p>

        </div>

      </div>

      <div className="report-grid">

        <div className="report-card">

          <h2>📄 Personel Listesi</h2>

          <p>
            Tüm personel listesini Excel veya PDF formatında dışa aktarın.
          </p>

          <div className="report-buttons">

            <button className="excel-btn">
              Excel Oluştur
            </button>

            <button className="pdf-btn">
              PDF Oluştur
            </button>

          </div>

        </div>

        <div className="report-card">

          <h2>💰 Hakediş Raporu</h2>

          <p>
            Oluşturulan hakedişleri rapor halinde dışa aktarın.
          </p>

          <div className="report-buttons">

            <button className="excel-btn">
              Excel Oluştur
            </button>

            <button className="pdf-btn">
              PDF Oluştur
            </button>

          </div>

        </div>

        <div className="report-card">

          <h2>🏢 İçtaş Formatı</h2>

          <p>
            İçtaş'ın talep ettiği standart Excel raporunu oluşturun.
          </p>

          <div className="report-buttons">

            <button className="excel-btn">
              Excel Oluştur
            </button>

            <button className="pdf-btn">
              PDF Önizleme
            </button>

          </div>

        </div>

      </div>

      <div className="info-card">

        <h3>Bilgilendirme</h3>

        <ul>

          <li>✔ Excel ve PDF raporları şirket onayından sonra aktif edilecektir.</li>

          <li>✔ Oluşturulan raporlar şirket formatına uygun hazırlanacaktır.</li>

          <li>✔ Raporlar gerçek veriler kullanılarak oluşturulacaktır.</li>

        </ul>

      </div>

    </div>

  );

}

export default Raporlar;