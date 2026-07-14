// src/pages/Dashboard/Dashboard.jsx

import { useEffect, useState } from "react";

import "./Dashboard.css";

import StatCard from "../../components/Card/StatCard";
import RecentTransactions from "./RecentTransactions";

function Dashboard() {

  const [dashboard, setDashboard] = useState({

    toplamPersonel: 0,

    aktifPersonel: 0,

    pasifPersonel: 0,

    aktifProjeler: 0,

  });

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard = async () => {

    try {

      const response = await fetch(
  "http://tuzladeha.onrender.com/dashboard"
);

      const data = await response.json();

      setDashboard(data);

    } catch (err) {

      console.error(err);

    }

  };

  return (

    <div className="dashboard">

      <div className="page-header">

        <div>

          <h1>HSN TUZLA DEHA</h1>

          <p>Personel & Hakediş Yönetim Paneli</p>

        </div>

      </div>

      <div className="dashboard-cards">

        <StatCard
          title="Toplam Personel"
          value={dashboard.toplamPersonel}
          color="#2563eb"
        />

        <StatCard
          title="Aktif Personel"
          value={dashboard.aktifPersonel}
          color="#16a34a"
        />

        <StatCard
          title="Pasif Personel"
          value={dashboard.pasifPersonel}
          color="#ea580c"
        />

        <StatCard
          title="Aktif Projeler"
          value={dashboard.aktifProjeler}
          color="#9333ea"
        />

      </div>

      <RecentTransactions />

    </div>

  );

}

export default Dashboard;