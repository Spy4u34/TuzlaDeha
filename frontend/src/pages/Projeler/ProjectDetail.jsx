import "./ProjectDetail.css";

function ProjectDetail({

  open,

  onClose,

  onSave,

  form,

  setForm,

  editing,

}) {

  if (!open) return null;

  return (

    <div className="project-modal">

      <div className="project-modal-card">

        <h2>

          {editing

            ? "Projeyi Düzenle"

            : "Yeni Proje"}

        </h2>

        <div className="form-group">

          <label>Proje Adı</label>

          <input

            placeholder="Proje Adı"

            value={form.proje_adi}

            onChange={(e) =>

              setForm({

                ...form,

                proje_adi: e.target.value,

              })

            }

          />

        </div>

        <div className="form-group">

          <label>Firma</label>

          <input

            placeholder="Firma"

            value={form.firma}

            onChange={(e) =>

              setForm({

                ...form,

                firma: e.target.value,

              })

            }

          />

        </div>

        <div className="form-group">

          <label>İş Türü</label>

          <select

            value={form.is_turu}

            onChange={(e) =>

              setForm({

                ...form,

                is_turu: e.target.value,

              })

            }

          >

            <option value="Yeni İnşaa">

              Yeni İnşaa

            </option>

            <option value="Tamir">

              Tamir

            </option>

          </select>

        </div>

        <div className="form-group">

          <label>Başlangıç Tarihi</label>

          <input

            type="date"

            value={form.baslangic_tarihi}

            onChange={(e) =>

              setForm({

                ...form,

                baslangic_tarihi: e.target.value,

              })

            }

          />

        </div>

        <div className="form-group">

          <label>Açıklama</label>

          <textarea

            rows="4"

            placeholder="Proje hakkında kısa açıklama..."

            value={form.aciklama}

            onChange={(e) =>

              setForm({

                ...form,

                aciklama: e.target.value,

              })

            }

          />

        </div>

        <div className="modal-buttons">

          <button

            className="save-btn"

            onClick={onSave}

          >

            Kaydet

          </button>

          <button

            className="cancel-btn"

            onClick={onClose}

          >

            Vazgeç

          </button>

        </div>

      </div>

    </div>

  );

}

export default ProjectDetail;