// src/pages/Personeller/PersonelModal.jsx

import "./PersonelModal.css";

function PersonelModal() {
  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Yeni Personel</h2>

        <div className="grid">

          <div className="form-group">
            <label>Ad Soyad</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>TC Kimlik</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Telefon</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Görev</label>
            <input type="text" />
          </div>

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

        <div className="modal-buttons">

          <button className="cancel">

            İptal

          </button>

          <button className="save">

            Kaydet

          </button>

        </div>

      </div>

    </div>
  );
}

export default PersonelModal;