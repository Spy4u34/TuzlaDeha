import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {

  return (

    <aside className="sidebar">

      <div className="logo">

        HSN TUZLA DEHA

      </div>

      <nav>

        <NavLink to="/dashboard">
          🏠 Ana Sayfa
        </NavLink>

        <NavLink to="/projeler">
          📁 Projeler
        </NavLink>

        <NavLink to="/personeller">
          👷 Personeller
        </NavLink>

        <NavLink to="/hakedis-hazirlama">
          📝 Hakediş Hazırlama
        </NavLink>

        <NavLink to="/hakedis">
          💰 Hakediş & Karlılık
        </NavLink>

        <NavLink to="/veri-aktar">
          📥 Veri Aktar
        </NavLink>

        <NavLink to="/raporlar">
          📊 Raporlar
        </NavLink>

        <NavLink to="/ayarlar">
          ⚙️ Ayarlar
        </NavLink>

      </nav>

    </aside>

  );

}

export default Sidebar;