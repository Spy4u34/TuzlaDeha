import express from "express";
import cors from "cors";
import db from "./database/database.js";

import personellerRoutes from "./routes/personeller.js";
import hakedisRouter from "./routes/hakedisler.js";
import projelerRouter from "./routes/projeler.js";

import "./database/createHakedisTable.js";
import "./database/createProjectTable.js";
import "./database/createProjectSeed.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/personeller", personellerRoutes);
app.use("/hakedisler", hakedisRouter);
app.use("/projeler", projelerRouter);

app.get("/", (req, res) => {
  res.send("HSN Tuzla Deha Backend Çalışıyor 🚀");
});

app.get("/dashboard", (req, res) => {

  db.get(

    `SELECT
      COUNT(*) as toplamPersonel,
      SUM(CASE WHEN aktif=1 THEN 1 ELSE 0 END) as aktifPersonel,
      SUM(CASE WHEN aktif=0 THEN 1 ELSE 0 END) as pasifPersonel,
      AVG(ucret) as ortalamaYevmiye
    FROM personeller`,

    [],

    (err, row) => {

      if (err) {

        return res.status(500).json(err);

      }

      db.get(

        `SELECT COUNT(*) as aktifProjeler
         FROM projeler
         WHERE durum='Aktif'`,

        [],

        (err2, project) => {

          if (err2) {

            return res.status(500).json(err2);

          }

          res.json({

            toplamPersonel: row.toplamPersonel || 0,

            aktifPersonel: row.aktifPersonel || 0,

            pasifPersonel: row.pasifPersonel || 0,

            ortalamaYevmiye: Math.round(row.ortalamaYevmiye || 0),

            aktifProjeler: project.aktifProjeler || 0,

          });

        }

      );

    }

  );

});

const PORT = 5000;

app.listen(PORT, () => {

  console.log(`Server çalışıyor: http://localhost:${PORT}`);

});