// src/pages/Excel/ExcelTable.jsx

import "./ExcelTable.css";

function ExcelTable() {
  return (
    <div className="excel-table">

      <table>

        <thead>

          <tr>

            <th>Personel</th>

            <th>Giriş</th>

            <th>Çıkış</th>

            <th>Çalışma</th>

            <th>Durum</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Ahmet Yılmaz</td>

            <td>08:01</td>

            <td>18:05</td>

            <td>10 Saat</td>

            <td>

              <span className="ok">

                Aktarıldı

              </span>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default ExcelTable;