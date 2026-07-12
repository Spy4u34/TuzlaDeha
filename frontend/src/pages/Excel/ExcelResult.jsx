// src/pages/Excel/ExcelResult.jsx

import "./ExcelResult.css";

function ExcelResult() {
  return (
    <div className="excel-result">

      <div className="result-header">

        <h3>Aktarım Özeti</h3>

      </div>

      <div className="result-grid">

        <div className="item">

          <span>Toplam Personel</span>

          <strong>58</strong>

        </div>

        <div className="item">

          <span>Eksik Giriş</span>

          <strong>2</strong>

        </div>

        <div className="item">

          <span>Eksik Çıkış</span>

          <strong>1</strong>

        </div>

        <div className="item">

          <span>Başarılı Aktarım</span>

          <strong>55</strong>

        </div>

      </div>

    </div>
  );
}

export default ExcelResult;