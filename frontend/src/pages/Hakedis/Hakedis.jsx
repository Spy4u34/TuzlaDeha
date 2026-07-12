// src/pages/Hakedis/Hakedis.jsx

import {
  useEffect,
  useState,
} from "react";

import "./Hakedis.css";
import { useNavigate } from "react-router-dom";
import { getHakedisler } from "../../services/hakedisService";

function Hakedis() {

  const navigate = useNavigate();

  const [hakedisler, setHakedisler] = useState([]);
  const [aktifHakedis, setAktifHakedis] = useState(null);
  const toplamGelir = hakedisler.reduce(
  (t, h) => t + Number(h.toplam_gelir),
  0
);

const toplamGider = hakedisler.reduce(
  (t, h) => t + Number(h.toplam_gider),
  0
);

const toplamKar = hakedisler.reduce(
  (t, h) => t + Number(h.net_kar),
  0
);

const karOrani =
  toplamGelir > 0
    ? ((toplamKar / toplamGelir) * 100).toFixed(2)
    : "0.00";

  const loadHakedisler = async () => {

    const data = await getHakedisler();

    setHakedisler(data);

  };

  useEffect(() => {

    loadHakedisler();

  }, []);

  useEffect(() => {

    if (
      hakedisler.length > 0 &&
      !aktifHakedis
    ) {

      setAktifHakedis(hakedisler[0]);

    }

  }, [hakedisler, aktifHakedis]);

  const personeller = aktifHakedis
    ? JSON.parse(aktifHakedis.personeller)
    : [];

  const enCokKazandiranlar = [...personeller]
    .sort((a, b) => b.netKar - a.netKar)
    .slice(0, 5);

  const enDusukKarlilik = [...personeller]
    .sort((a, b) => a.netKar - b.netKar)
    .slice(0, 5);

  return (

    <div className="hakedis">

      <div className="page-header">

        <div>

          <h1>Hakediş & Karlılık</h1>

          <p>
            HSN TUZLA DEHA Personel Karlılık Analizi
          </p>

        </div>

        <div className="page-switch">

          <button
            onClick={() =>
              navigate("/hakedis-hazirlama")
            }
          >
            🧮 Hakediş Hazırlama
          </button>

          <button className="active-page">
            💰 Hakediş & Karlılık
          </button>

        </div>

      </div>

      <div className="summary-grid">

        <div className="summary-card">

          <span>💰 İçtaş Geliri</span>

          <strong>

            {toplamGelir.toLocaleString("tr-TR")} ₺

          </strong>

        </div>

        <div className="summary-card">

          <span>📉 Toplam Gider</span>

          <strong>

            {toplamGider.toLocaleString("tr-TR")} ₺

          </strong>

        </div>

        <div className="summary-card profit-card">

          <span>🚀 Net Kar</span>

          <strong>

            {toplamKar.toLocaleString("tr-TR")} ₺

          </strong>

        </div>

        <div className="summary-card">

          <span>📊 Kar Marjı</span>

          <strong>

            %{karOrani}

          </strong>

        </div>

      </div>

      <div className="content-grid">
                <div
          className="table-card"
          style={{ flex: 1 }}
        >

          <div className="table-title">

            <h2>
              Personel Karlılık Listesi
            </h2>

          </div>

          <table>

            <thead>

              <tr>

                <th>Personel</th>
                <th id="gun-baslik">Gün</th>
                <th>Yevmiye</th>
                <th>Toplam Gelir (İçtaş)</th>
                <th>Yevmiye Gideri</th>
                <th>Günlük Giderleri</th>
                <th>Toplam Gider</th>
                <th>Net Kar</th>

              </tr>

            </thead>

            <tbody>

              {personeller.map((person, index) => (

                <tr key={index}>

                  <td>{person.personel}</td>

                  <td>{person.gun}</td>

                  <td>{person.yevmiye}</td>

                  <td>
                    {Number(person.toplamGelir).toLocaleString("tr-TR")} ₺
                  </td>

                  <td>
                    {Number(person.yevmiyeGideri).toLocaleString("tr-TR")} ₺
                  </td>

                  <td>
                    {Number(person.gunlukGider).toLocaleString("tr-TR")} ₺
                  </td>

                  <td>
                    {Number(person.toplamGider).toLocaleString("tr-TR")} ₺
                  </td>

                  <td
                    className={
                      person.netKar >= 0
                        ? "profit"
                        : "danger"
                    }
                  >

                    {person.netKar >= 0 ? "+" : ""}

                    {Number(person.netKar).toLocaleString("tr-TR")} ₺

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="right-panel">

          <div className="side-card">

            <h3>
              🏆 En Çok Kazandıranlar
            </h3>

            {enCokKazandiranlar.map((person, index) => (

              <div
                key={index}
                className="rank"
              >

                <span>
                  {index + 1}. {person.personel}
                </span>

                <strong>
                  {Number(person.netKar).toLocaleString("tr-TR")} ₺
                </strong>

              </div>

            ))}

          </div>

          <div className="side-card">

            <h3>
              ⚠ En Düşük Karlılık
            </h3>

            {enDusukKarlilik.map((person, index) => (

              <div
                key={index}
                className="rank"
              >

                <span>
                  {person.personel}
                </span>

                <strong>
                  {Number(person.netKar).toLocaleString("tr-TR")} ₺
                </strong>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}

export default Hakedis;