// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/Login/ForgotPassword";
import NotFound from "./pages/NotFound/NotFound";

import Dashboard from "./pages/Dashboard/Dashboard";
import Personeller from "./pages/Personeller/Personeller";
import Projeler from "./pages/Projeler/Projeler";
import VeriAktar from "./pages/VeriAktar/VeriAktar";
import HakedisHazirlama from "./pages/HakedisHazirlama/HakedisHazirlama";
import Hakedis from "./pages/Hakedis/Hakedis";
import Raporlar from "./pages/Raporlar/Raporlar";
import Ayarlar from "./pages/Ayarlar/Ayarlar";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>

      {/* Login */}

      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Panel */}

      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      <Route
        path="/personeller"
        element={
          <MainLayout>
            <Personeller />
          </MainLayout>
        }
      />

      <Route
        path="/projeler"
        element={
          <MainLayout>
            <Projeler />
          </MainLayout>
        }
      />

      <Route
        path="/veri-aktar"
        element={
          <MainLayout>
            <VeriAktar />
          </MainLayout>
        }
      />

      <Route
        path="/hakedis-hazirlama"
        element={
          <MainLayout>
            <HakedisHazirlama />
          </MainLayout>
        }
      />

      <Route
        path="/hakedis"
        element={
          <MainLayout>
            <Hakedis />
          </MainLayout>
        }
      />

      <Route
        path="/raporlar"
        element={
          <MainLayout>
            <Raporlar />
          </MainLayout>
        }
      />

      <Route
        path="/ayarlar"
        element={
          <MainLayout>
            <Ayarlar />
          </MainLayout>
        }
      />

      {/* 404 */}

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;