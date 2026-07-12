// src/pages/Personeller/Personeller.jsx

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getPersonnel,
  addPersonnel,
  updatePersonnel,
  deletePersonnel,
} from "../../services/personnelService";

import "./Personeller.css";
import { getProjects } from "../../services/projectService";
import SearchInput from "../../components/Input/SearchInput";
import DataTable from "../../components/Table/DataTable";
import PrimaryButton from "../../components/Button/PrimaryButton";
import PersonelFilter from "./PersonelFilter";

function Personeller() {

  const [personeller, setPersoneller] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
const [projects, setProjects] = useState([]);
  const [statusFilter, setStatusFilter] =
  useState("all");

const [roleFilter, setRoleFilter] =
  useState("all");

  const [form, setForm] = useState({
  ad: "",
  tc: "",
  telefon: "",
  gorev: "",
  proje_id: "",
  ucret: "",
  aktif: true,
});

const filteredList = useMemo(() => {

  return personeller.filter((person) => {

    const searchMatch =
      person.ad
        .toLowerCase()
        .includes(search.toLowerCase());

    const statusMatch =
      statusFilter === "all"
        ? true
        : statusFilter === "active"
        ? person.aktif
        : !person.aktif;

    const roleMatch =
      roleFilter === "all"
        ? true
        : person.gorev === roleFilter;

    return (
      searchMatch &&
      statusMatch &&
      roleMatch
    );

  });

}, [
  personeller,
  search,
  statusFilter,
  roleFilter,
]);

  const activeCount = personeller.filter(
    (x) => x.aktif
  ).length;

  const passiveCount =
    personeller.length - activeCount;

  const averageSalary =
    personeller.length === 0
      ? 0
      : Math.round(

          personeller.reduce(

            (t, p) =>
              t + Number(p.ucret || 0),

            0

          ) / personeller.length

        );

  const loadPersonnel = async () => {

    const data = await getPersonnel();

    setPersoneller(data);

  };

 useEffect(() => {

  loadPersonnel();

  loadProjects();

}, []);

  const resetForm = () => {

    setEditingId(null);

   setForm({
  ad: "",
  tc: "",
  telefon: "",
  gorev: "",
  proje_id: "",
  ucret: "",
  aktif: true,
});

  };

  const openNewModal = () => {

    resetForm();

    setModalOpen(true);

  };

  const openEditModal = (person) => {

    setEditingId(person.id);

    setForm({
  ad: person.ad,
  tc: person.tc,
  telefon: person.telefon,
  gorev: person.gorev,
  proje_id: String(person.proje_id || ""),
  ucret: person.ucret,
  aktif: person.aktif,
});

    setModalOpen(true);

  };

  const savePerson = async () => {

    if (!form.ad.trim()) {

      alert("Personel adı boş olamaz.");

      return;

    }

    if (editingId) {

      await updatePersonnel(
        editingId,
        form
      );

    } else {

      await addPersonnel(form);

    }

    await loadPersonnel();

await loadProjects();

setModalOpen(false);

resetForm();

  };

  const deletePerson = async (id) => {

    if (
      !window.confirm(
        "Personel silinsin mi?"
      )
    )
      return;

   await deletePersonnel(id);

await loadPersonnel();

await loadProjects();

  };

  const loadProjects = async () => {

  const data = await getProjects();

  setProjects(data);

};

 return (

  <div className="personeller">

    <div className="page-header">

      <div>

        <h1>Personeller</h1>

        <p>
          Personel bilgi ve ücret yönetim ekranı
        </p>

      </div>

      <PrimaryButton onClick={openNewModal}>
        + Yeni Personel
      </PrimaryButton>

    </div>

    <div className="stats-grid">

      <div className="stat-card">

        <span>Toplam Personel</span>

        <strong>{personeller.length}</strong>

      </div>

      <div className="stat-card">

        <span>Aktif Personel</span>

        <strong>{activeCount}</strong>

      </div>

      <div className="stat-card">

        <span>Pasif Personel</span>

        <strong>{passiveCount}</strong>

      </div>

      <div className="stat-card">

        <span>Ortalama Yevmiye</span>

        <strong>

          {averageSalary.toLocaleString("tr-TR")} ₺

        </strong>

      </div>

    </div>

    <div className="toolbar">

      <div style={{ width: "350px" }}>

        <SearchInput
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

<PersonelFilter

    status={statusFilter}
    role={roleFilter}

    onStatusChange={
        setStatusFilter
    }

    onRoleChange={
        setRoleFilter
    }

/>
    </div>

    <DataTable

      columns={[

"#",

"Ad Soyad",

"Proje",

"Görev",

"Telefon",

"Yevmiye",

"Durum",

"İşlem",

]}

    >

      {filteredList.map((person) => (

        <tr key={person.id}>

          <td>{person.id}</td>

          <td>{person.ad}</td>

         <td>{person.proje_adi || "-"}</td>

<td>{person.gorev}</td>

          <td>{person.telefon}</td>

          <td>

            {Number(person.ucret).toLocaleString("tr-TR")} ₺

          </td>

          <td>

            <span
              className={
                person.aktif
                  ? "active"
                  : "passive"
              }
            >

              {person.aktif
                ? "Aktif"
                : "Pasif"}

            </span>

          </td>

          <td
            style={{
              display: "flex",
              gap: "8px",
            }}
          >

            <PrimaryButton
              onClick={() =>
                openEditModal(person)
              }
            >

              Düzenle

            </PrimaryButton>

            <button
              className="delete-btn"
              onClick={() =>
                deletePerson(person.id)
              }
            >

              Sil

            </button>

          </td>

        </tr>

      ))}

    </DataTable>

    {modalOpen && (
      <div className="person-modal">

  <div className="person-modal-card">

    <h2>
      {editingId
        ? "Personel Düzenle"
        : "Yeni Personel"}
    </h2>

    <input
      placeholder="Ad Soyad"
      value={form.ad}
      onChange={(e) =>
        setForm({
          ...form,
          ad: e.target.value,
        })
      }
    />

    <input
      placeholder="TC Kimlik"
      value={form.tc}
      onChange={(e) =>
        setForm({
          ...form,
          tc: e.target.value,
        })
      }
    />

    <input
      placeholder="Telefon"
      value={form.telefon}
      onChange={(e) =>
        setForm({
          ...form,
          telefon: e.target.value,
        })
      }
    />

    <select
  value={form.gorev}
  onChange={(e) =>
    setForm({
      ...form,
      gorev: e.target.value,
    })
  }
>

  <option value="">
    Görev Seçiniz
  </option>

  <option value="Usta">
    Usta
  </option>

  <option value="Yardımcı">
    Yardımcı
  </option>

  <option value="Kaynakçı">
    Kaynakçı
  </option>

  <option value="Boru Montaj">
    Boru Montaj
  </option>

  <option value="Elektrikçi">
    Elektrikçi
  </option>

  <option value="Boyacı">
    Boyacı
  </option>

  <option value="İskeleci">
    İskeleci
  </option>

  <option value="Vinç Operatörü">
    Vinç Operatörü
  </option>

  <option value="Forklift Operatörü">
    Forklift Operatörü
  </option>

  <option value="Formen">
    Formen
  </option>

  <option value="Mühendis">
    Mühendis
  </option>

  <option value="Saha Şefi">
    Saha Şefi
  </option>

  <option value="Firma Yetkilisi">
    Firma Yetkilisi
  </option>

</select>

<select
  value={form.proje_id}
  onChange={(e) =>
    setForm({
      ...form,
      proje_id: e.target.value,
    })
  }
>

  <option value="">
    Proje Seçiniz
  </option>

  {projects.map((project) => (

    <option
      key={project.id}
      value={project.id}
    >
      {project.proje_adi}
    </option>

  ))}

</select>

    <input
      type="number"
      placeholder="Günlük Ücret"
      value={form.ucret}
      onChange={(e) =>
        setForm({
          ...form,
          ucret: e.target.value,
        })
      }
    />

    <label className="checkbox">

      <input
        type="checkbox"
        checked={form.aktif}
        onChange={(e) =>
          setForm({
            ...form,
            aktif: e.target.checked,
          })
        }
      />

      Aktif Personel

    </label>

    <div className="modal-buttons">

      <button
        className="save-btn"
        onClick={savePerson}
      >
        Kaydet
      </button>

      <button
        className="cancel-btn"
        onClick={() => {
          setModalOpen(false);
          resetForm();
        }}
      >
        Vazgeç
      </button>

    </div>

  </div>

</div>

)}

</div>

);

}

export default Personeller;