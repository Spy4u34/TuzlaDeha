// src/layouts/MainLayout.jsx

import Sidebar from "./Sidebar";
import Header from "./Header";

import "./MainLayout.css";

function MainLayout({ children }) {
  return (
    <div className="layout">

      <Sidebar />

      <div className="content">

        <Header />

        <main>

          {children}

        </main>

      </div>

    </div>
  );
}

export default MainLayout;