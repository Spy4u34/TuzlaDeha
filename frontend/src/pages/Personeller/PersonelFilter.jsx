// src/pages/Personeller/PersonelFilter.jsx

import "./PersonelFilter.css";

function PersonelFilter({

  status,
  role,

  onStatusChange,
  onRoleChange,

}) {

  return (

    <div className="personel-filter">

      <select
        value={status}
        onChange={(e) =>
          onStatusChange(e.target.value)
        }
      >

        <option value="all">
          Tüm Durumlar
        </option>

        <option value="active">
          Aktif
        </option>

        <option value="passive">
          Pasif
        </option>

      </select>

      <select
        value={role}
        onChange={(e) =>
          onRoleChange(e.target.value)
        }
      >

        <option value="all">
          Tüm Görevler
        </option>

        <option value="Kaynakçı">
          Kaynakçı
        </option>

        <option value="Boyacı">
          Boyacı
        </option>

        <option value="Montaj">
          Montaj
        </option>

        <option value="Usta">
          Usta
        </option>

        <option value="Usta Başı">
          Usta Başı
        </option>

        <option value="Operatör">
          Operatör
        </option>

      </select>

    </div>

  );

}

export default PersonelFilter;