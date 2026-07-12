// src/pages/HakedisHazirlama/HakedisHazirlama.jsx

import {
  useEffect,
  useState,
} from "react";

import "./HakedisHazirlama.css";
import { useNavigate } from "react-router-dom";
import {
  getPersoneller,
  saveHakedis,
} from "../../services/hakedisService";

function HakedisHazirlama() {

  const [project, setProject] = useState("LNG GEMİSİ");
  const [jobType, setJobType] = useState("Yeni İnşaa");
  const [month, setMonth] = useState("Haziran 2026");

  const navigate = useNavigate();

  const [personnelList, setPersonnelList] = useState([]);

  const [showDetail, setShowDetail] =
    useState(false);

  const [dailyCosts, setDailyCosts] =
    useState({

      sgk: 720,

      yemek: 720,

      osgb: 60,

      malzeme: 60,

    });

  const totalDailyCost =

    Number(dailyCosts.sgk) +

    Number(dailyCosts.yemek) +

    Number(dailyCosts.osgb) +

    Number(dailyCosts.malzeme);

  const calculateEmployee = (employee) => {

    const ictasUcreti =

      jobType === "Tamir"

        ? 4600

        : 4500;

    const toplamGelir =

      (Number(employee.yevmiye) || 0) *

      ictasUcreti;

    const yevmiyeGideri =

      (Number(employee.gun) || 0) *

      (Number(employee.ucret) || 0);

    const gunlukGider =

      (Number(employee.gun) || 0) *

      totalDailyCost;

    const toplamGider =

      yevmiyeGideri +

      gunlukGider;

    const netKar =

      toplamGelir -

      toplamGider;

    return {

      toplamGelir,

      yevmiyeGideri,

      gunlukGider,

      toplamGider,

      netKar,

    };

  };

  const [employees, setEmployees] =
    useState([

      {

        id: 1,

        personel: "",

        gorev: "",

        gun: "",

        yevmiye: "",

        ucret: "",

      },

    ]);

  const addEmployee = () => {

    setEmployees([

      ...employees,

      {

        id: Date.now(),

        personel: "",

        gorev: "",

        gun: "",

        yevmiye: "",

        ucret: "",

      },

    ]);

  };

  const removeEmployee = (id) => {

    setEmployees(

      employees.filter(

        (item) => item.id !== id

      )

    );

  };

  const loadPersonnel = async () => {

    const data =

      await getPersoneller();

    setPersonnelList(

      data.filter(

        (person) => person.aktif

      )

    );

  };

  useEffect(() => {

    loadPersonnel();

  }, []);
    const updateEmployee = (id, field, value) => {

    setEmployees(

      employees.map((item) => {

        if (item.id !== id)

          return item;

        const updated = {

          ...item,

          [field]: value,

        };

        if (field === "personel") {

          const selectedPerson =

            personnelList.find(

              (p) => p.ad === value

            );

          updated.ucret = Number(

            selectedPerson?.ucret || 0

          );

          updated.gorev =

            selectedPerson?.gorev ?? "";

        }

        return updated;

      })

    );

  };

  const totalProfit = employees.reduce(

    (total, employee) =>

      total +

      calculateEmployee(employee).netKar,

    0

  );

  const totalIncome = employees.reduce(

    (total, employee) =>

      total +

      calculateEmployee(employee).toplamGelir,

    0

  );

  const totalExpense = employees.reduce(

    (total, employee) =>

      total +

      calculateEmployee(employee).toplamGider,

    0

  );

  const handleCalculate = async () => {

    const personeller =

      employees.map((employee) => ({

        ...employee,

        ...calculateEmployee(employee),

      }));

    await saveHakedis({

      proje: project,

      is_turu: jobType,

      ay: month,

      gunluk_gider: totalDailyCost,

      toplam_personel:

        employees.length,

      toplam_gun:

        employees.reduce(

          (t, p) =>

            t +

            (Number(p.gun) || 0),

          0

        ),

      toplam_yevmiye:

        employees.reduce(

          (t, p) =>

            t +

            (Number(p.yevmiye) || 0),

          0

        ),

      toplam_gelir:

        totalIncome,

      toplam_gider:

        totalExpense,

      net_kar:

        totalProfit,

      personeller,

    });

    alert(

      "Hakediş başarıyla kaydedildi."

    );

  };

  return (

    <div className="hakedis-hazirlama">

      <div className="page-header">

        <div>

          <h1>

            Hakediş Hazırlama

          </h1>

          <p>

            İçtaş verilerine göre
            hakediş oluşturma ekranı

          </p>

        </div>

        <div className="page-switch">

          <button className="active-page">

            🧮 Hakediş Hazırlama

          </button>

          <button

            onClick={() =>

              navigate("/hakedis")

            }

          >

            💰 Hakediş & Karlılık

          </button>

        </div>

      </div>

      <div className="top-grid">
                <div className="card">

          <h3>Hakediş Bilgileri</h3>

          <div className="form-group">

            <label>Proje</label>

            <select
              value={project}
              onChange={(e) =>
                setProject(e.target.value)
              }
            >

              <option>LNG GEMİSİ</option>
              <option>NB34</option>

            </select>

          </div>

          <div className="form-group">

            <label>İş Türü</label>

            <select
              value={jobType}
              onChange={(e) =>
                setJobType(e.target.value)
              }
            >

              <option>Yeni İnşaa</option>
              <option>Tamir</option>

            </select>

          </div>

          <div className="form-group">

            <label>Ay</label>

            <select
              value={month}
              onChange={(e) =>
                setMonth(e.target.value)
              }
            >

              <option>Haziran 2026</option>
              <option>Temmuz 2026</option>

            </select>

          </div>

          <div className="income-box">

            <span>

              İçtaş Günlük Ücreti

            </span>

            <strong>

              {jobType === "Tamir"

                ? "4.600 ₺"

                : "4.500 ₺"}

            </strong>

          </div>

        </div>

       <div className="card">

  <h3>Günlük Giderler</h3>

  <div className="total-cost">

    <span>

      Günlük Gider

    </span>

    <strong>

      {totalDailyCost.toLocaleString("tr-TR")} ₺

    </strong>

  </div>

  <button

    className="detail-btn"

    onClick={() => setShowDetail(true)}

  >

    📋 Gider Detayı

  </button>

</div>

</div>

<div className="card table-card">

  <div className="table-header">

    <h3>Personeller</h3>

          <button
            className="add-btn"
            onClick={addEmployee}
          >

            + Personel Ekle

          </button>

        </div>

        <table>

          <thead>

            <tr>

              <th style={{ width: "35%" }}>
                Personel
              </th>

              <th>Gün</th>

              <th>Yevmiye</th>

              <th>Günlük Ücret</th>

              <th></th>

            </tr>

          </thead>

          <tbody>

            {employees.map((item) => (

              <tr key={item.id}>

                <td>

                  <select

                    value={item.personel}

                    onChange={(e) =>

                      updateEmployee(

                        item.id,

                        "personel",

                        e.target.value

                      )

                    }

                  >

                    <option value="">

                      Personel Seç

                    </option>

                    <option disabled>

                      ──────────────

                    </option>

                    {[...personnelList]

                      .sort((a, b) =>

                        a.ad.localeCompare(

                          b.ad,

                          "tr"

                        )

                      )

                      .map((person) => (

                        <option

                          key={person.id}

                          value={person.ad}

                        >

                          {person.ad} • {person.gorev}

                        </option>

                      ))}

                  </select>

                </td>

                <td>

                  <input

                    type="number"

                    placeholder="0"

                    value={item.gun}

                    onChange={(e) =>

                      updateEmployee(

                        item.id,

                        "gun",

                        e.target.value

                      )

                    }

                  />

                </td>

                <td>

                  <input

                    type="number"

                    step="0.5"

                    placeholder="0"

                    value={item.yevmiye}

                    onChange={(e) =>

                      updateEmployee(

                        item.id,

                        "yevmiye",

                        e.target.value

                      )

                    }

                  />

                </td>

                <td className="salary-cell">

                  <span className="salary-text">

                    {item.ucret

                      ? `${Number(item.ucret).toLocaleString("tr-TR")} ₺`

                      : "-"}

                  </span>

                </td>

                <td>

                  <button

                    className="delete-btn"

                    onClick={() =>

                      removeEmployee(item.id)

                    }

                  >

                    🗑

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

  
            <div className="bottom-grid">

        <div className="summary-card">

          <h3>Özet</h3>

          <div className="summary-row">

            <span>Toplam Personel</span>

            <strong>

              {employees.length}

            </strong>

          </div>

          <div className="summary-row">

            <span>Toplam Gün</span>

            <strong>

              {employees.reduce(

                (total, item) =>

                  total +

                  (Number(item.gun) || 0),

                0

              )}

            </strong>

          </div>

          <div className="summary-row">

            <span>Toplam Yevmiye</span>

            <strong>

              {employees.reduce(

                (total, item) =>

                  total +

                  (Number(item.yevmiye) || 0),

                0

              )}

            </strong>

          </div>

          <div className="summary-row">

            <span>Toplam Gelir</span>

            <strong>

              {totalIncome.toLocaleString("tr-TR")} ₺

            </strong>

          </div>

          <div className="summary-row">

            <span>Toplam Gider</span>

            <strong>

              {totalExpense.toLocaleString("tr-TR")} ₺

            </strong>

          </div>

          <div className="summary-row">

            <span>Net Kar</span>

            <strong
              style={{
                color:
                  totalProfit >= 0
                    ? "#16a34a"
                    : "#dc2626",
              }}
            >

              {totalProfit.toLocaleString("tr-TR")} ₺

            </strong>

          </div>

        </div>

          

       <div className="action-card">

  <h2>Hakediş Hazır</h2>

  <p>
    Tüm bilgiler tamamlandıktan sonra
    hakedişi oluşturabilirsiniz.
  </p>

  <button
    className="calculate-btn"
    onClick={handleCalculate}
  >
    🧮 HAKEDİŞİ OLUŞTUR
  </button>

</div>

</div>

{showDetail && (

  <div className="detail-modal">

    <div className="detail-card">

      <h2>

        📋 Günlük Gider Detayı

      </h2>

      <div className="form-group">

        <label>SGK</label>

        <input
          type="number"
          value={dailyCosts.sgk}
          onChange={(e) =>
            setDailyCosts({
              ...dailyCosts,
              sgk: e.target.value,
            })
          }
        />

      </div>

      <div className="form-group">

        <label>Yemek</label>

        <input
          type="number"
          value={dailyCosts.yemek}
          onChange={(e) =>
            setDailyCosts({
              ...dailyCosts,
              yemek: e.target.value,
            })
          }
        />

      </div>

      <div className="form-group">

        <label>OSGB</label>

        <input
          type="number"
          value={dailyCosts.osgb}
          onChange={(e) =>
            setDailyCosts({
              ...dailyCosts,
              osgb: e.target.value,
            })
          }
        />

      </div>

      <div className="form-group">

        <label>Malzeme</label>

        <input
          type="number"
          value={dailyCosts.malzeme}
          onChange={(e) =>
            setDailyCosts({
              ...dailyCosts,
              malzeme: e.target.value,
            })
          }
        />

      </div>

      <hr />

      <div className="detail-row">

        <span>

          Toplam Günlük Gider

        </span>

        <strong>

          {totalDailyCost.toLocaleString("tr-TR")} ₺

        </strong>

      </div>

      <button

        className="close-detail"

        onClick={() =>
          setShowDetail(false)
        }

      >

        Kaydet ve Kapat

      </button>

    </div>

  </div>

)}

</div>

);

}

export default HakedisHazirlama;