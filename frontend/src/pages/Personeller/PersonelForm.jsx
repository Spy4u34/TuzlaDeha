// src/pages/Personeller/PersonelForm.jsx

import "./PersonelForm.css";

function PersonelForm() {
  return (
    <div className="personel-form">

      <div className="row">

        <div className="form-group">
          <label>Ad Soyad</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>TC Kimlik</label>
          <input type="text" />
        </div>

      </div>

      <div className="row">

        <div className="form-group">
          <label>Telefon</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Görev</label>
          <input type="text" />
        </div>

      </div>

      <div className="row">

        <div className="form-group">
          <label>Günlük Yevmiye</label>
          <input type="number" />
        </div>

        <div className="form-group">
          <label>Durum</label>

          <select>

            <option>Aktif</option>

            <option>Pasif</option>

          </select>

        </div>

      </div>

      <button className="save-personel">

        Personeli Kaydet

      </button>

    </div>
  );
}

export default PersonelForm;