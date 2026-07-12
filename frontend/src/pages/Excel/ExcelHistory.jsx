// src/pages/Excel/ExcelHistory.jsx

import "./ExcelHistory.css";

function ExcelHistory() {
  return (
    <div className="excel-history">

      <div className="history-header">

        <h3>Yüklenen Excel Dosyaları</h3>

      </div>

      <table>

        <thead>

          <tr>

            <th>Dosya</th>
            <th>Tarih</th>
            <th>Kayıt</th>
            <th>Durum</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>ictas_giris_01.xlsx</td>
            <td>12.07.2026</td>
            <td>58 Personel</td>
            <td>
              <span className="success">
                Başarılı
              </span>
            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default ExcelHistory;