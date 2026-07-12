import { useEffect, useState } from "react";
import "./Projeler.css";
import ProjectDetail from "./ProjectDetail";

import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../../services/projectService";

function Projeler() {

  const emptyForm = {
    proje_adi: "",
    firma: "",
    is_turu: "Yeni İnşaa",
    baslangic_tarihi: "",
    bitis_tarihi: "",
    durum: "Aktif",
    aciklama: "",
  };

  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const loadProjects = async () => {

    const data = await getProjects();

    setProjects(data);

  };

  useEffect(() => {

    loadProjects();

  }, []);

  const openNew = () => {

    setEditingId(null);

    setForm(emptyForm);

    setModalOpen(true);

  };

  const openEdit = (project) => {

    setEditingId(project.id);

    setForm(project);

    setModalOpen(true);

  };

  const saveProject = async () => {

    if (!form.proje_adi.trim()) {

      alert("Proje adı boş olamaz.");

      return;

    }

    if (editingId) {

      await updateProject(

        editingId,

        form

      );

    } else {

      await addProject(form);

    }

    setModalOpen(false);

    loadProjects();

  };

  const removeProject = async (id) => {

    if (!window.confirm("Proje silinsin mi?")) return;

    await deleteProject(id);

    loadProjects();

  };

  const changeStatus = async (project) => {

    const today = new Date()

      .toISOString()

      .slice(0, 10);

    await updateProject(

      project.id,

      {

        ...project,

        durum:

          project.durum === "Aktif"

            ? "Tamamlandı"

            : "Aktif",

        bitis_tarihi:

          project.durum === "Aktif"

            ? today

            : "",

      }

    );

    loadProjects();

  };

  return (

    <div className="projeler">

      <div className="page-header">

        <div>

          <h1>Projeler</h1>

          <p>

            Aktif ve tamamlanan projeler

          </p>

        </div>

        <button

          className="new-project"

          onClick={openNew}

        >

          + Yeni Proje

        </button>

      </div>

      <div className="project-grid">

        {projects.map((project) => (

          <div

            className="project-card"

            key={project.id}

          >

            <h2>

              {project.proje_adi}

            </h2>

      <div className="project-info">

  <div className="info-row">

    <span className="label">
      Firma
    </span>

    <span>
      {project.firma}
    </span>

  </div>

  <div className="info-row">

    <span className="label">
      İş Türü
    </span>

    <span>
      {project.is_turu}
    </span>

  </div>

  <div className="info-row">

    <span className="label">
      Başlangıç
    </span>

    <span>
      {project.baslangic_tarihi || "-"}
    </span>

  </div>

  {

    project.durum === "Tamamlandı" &&
    project.bitis_tarihi && (

      <div className="info-row">

        <span className="label">
          Bitiş
        </span>

        <span>
          {project.bitis_tarihi}
        </span>

      </div>

    )

  }

  <div className="info-row">

    <span className="label">
      Durum
    </span>

    <span
      className={
        project.durum === "Aktif"
          ? "status-active"
          : "status-passive"
      }
    >
      {project.durum}
    </span>

  </div>

</div>

            <div className="project-card-buttons">

              <button

                className="edit-btn"

                onClick={() =>

                  openEdit(project)

                }

              >

                Düzenle

              </button>

              <button

                className="status-btn"

                onClick={() =>

                  changeStatus(project)

                }

              >

                {

                  project.durum === "Aktif"

                    ? "Projeyi Bitir"

                    : "Yeniden Başlat"

                }

              </button>

              <button

                className="delete-btn"

                onClick={() =>

                  removeProject(project.id)

                }

              >

                Sil

              </button>

            </div>

          </div>

        ))}

      </div>

      <ProjectDetail

        open={modalOpen}

        editing={editingId}

        form={form}

        setForm={setForm}

        onClose={() =>

          setModalOpen(false)

        }

        onSave={saveProject}

      />

    </div>

  );

}

export default Projeler;