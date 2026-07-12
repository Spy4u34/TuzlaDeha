import express from "express";
import db from "../database/database.js";

const router = express.Router();

router.get("/", (req, res) => {

    router.get("/:id", (req, res) => {

  db.get(

    "SELECT * FROM hakedisler WHERE id=?",

    [req.params.id],

    (err, row) => {

      if (err) {

        return res.status(500).json(err);

      }

      res.json(row);

    }

  );

});

  db.all(

    "SELECT * FROM hakedisler ORDER BY created_at DESC",

    [],

    
    (err, rows) => {

      if (err) {

        return res.status(500).json(err);

      }

      res.json(rows);

    }

  );

});

router.post("/", (req, res) => {

  const {

    proje,

    is_turu,

    ay,

    gunluk_gider,

    toplam_personel,

    toplam_gun,

    toplam_yevmiye,

    toplam_gelir,

    toplam_gider,

    net_kar,

    personeller,

  } = req.body;

  db.run(

    `INSERT INTO hakedisler
    (
      proje,
      is_turu,
      ay,
      gunluk_gider,
      toplam_personel,
      toplam_gun,
      toplam_yevmiye,
      toplam_gelir,
      toplam_gider,
      net_kar,
      personeller
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,

    [

      proje,

      is_turu,

      ay,

      gunluk_gider,

      toplam_personel,

      toplam_gun,

      toplam_yevmiye,

      toplam_gelir,

      toplam_gider,

      net_kar,

      JSON.stringify(personeller),

    ],

    function (err) {

      if (err) {

        return res.status(500).json(err);

      }

      res.json({

        success: true,

        id: this.lastID,

      });

    }

  );

});

export default router;