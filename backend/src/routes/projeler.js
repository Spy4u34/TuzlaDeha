import express from "express";
import db from "../database/database.js";

const router = express.Router();

/* TÜM PROJELER */

router.get("/", (req, res) => {

  db.all(

    "SELECT * FROM projeler ORDER BY id DESC",

    [],

    (err, rows) => {

      if (err) {

        console.log(err);

        return res.status(500).json(err);

      }

      res.json(rows);

    }

  );

});

/* ÖRNEK VERİ */

router.get("/seed", (req, res) => {

  db.serialize(() => {

    db.run("DELETE FROM projeler");

    const stmt = db.prepare(`

      INSERT INTO projeler
      (
        proje_adi,
        firma,
        is_turu,
        baslangic_tarihi,
        bitis_tarihi,
        durum,
        aciklama
      )
      VALUES (?,?,?,?,?,?,?)

    `);

    stmt.run(

      "LNG GEMİSİ",

      "HSN TUZLA DEHA",

      "Yeni İnşaa",

      "2026-07-01",

      "",

      "Aktif",

      "LNG Yapım"

    );

    stmt.run(

      "NB-34",

      "HSN TUZLA DEHA",

      "Tamir",

      "2026-06-18",

      "",

      "Aktif",

      "Bakım"

    );

    stmt.finalize();

    res.json({

      success: true,

      message: "Projeler oluşturuldu."

    });

  });

});

/* EKLE */

router.post("/", (req, res) => {

  const {

    proje_adi,

    firma,

    is_turu,

    baslangic_tarihi,

    bitis_tarihi,

    durum,

    aciklama,

  } = req.body;

  db.run(

    `INSERT INTO projeler
    (
      proje_adi,
      firma,
      is_turu,
      baslangic_tarihi,
      bitis_tarihi,
      durum,
      aciklama
    )
    VALUES (?,?,?,?,?,?,?)`,

    [

      proje_adi,

      firma,

      is_turu,

      baslangic_tarihi,

      bitis_tarihi,

      durum,

      aciklama,

    ],

    function (err) {

      console.log(err);

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

/* GÜNCELLE */

router.put("/:id", (req, res) => {

  const { id } = req.params;

  const {

    proje_adi,

    firma,

    is_turu,

    baslangic_tarihi,

    bitis_tarihi,

    durum,

    aciklama,

  } = req.body;

  db.run(

    `UPDATE projeler
     SET
       proje_adi=?,
       firma=?,
       is_turu=?,
       baslangic_tarihi=?,
       bitis_tarihi=?,
       durum=?,
       aciklama=?
     WHERE id=?`,

    [

      proje_adi,

      firma,

      is_turu,

      baslangic_tarihi,

      bitis_tarihi,

      durum,

      aciklama,

      id,

    ],

    function (err) {

      console.log(err);

      if (err) {

        return res.status(500).json(err);

      }

      res.json({

        success: true,

      });

    }

  );

});

/* TAMAMLA */

router.put("/complete/:id", (req, res) => {

  const { id } = req.params;

  const today = new Date().toISOString().slice(0, 10);

  db.run(

    `UPDATE projeler
     SET
       durum='Tamamlandı',
       bitis_tarihi=?
     WHERE id=?`,

    [

      today,

      id,

    ],

    function (err) {

      console.log(err);

      if (err) {

        return res.status(500).json(err);

      }

      res.json({

        success: true,

      });

    }

  );

});

/* SİL */

router.delete("/:id", (req, res) => {

  const { id } = req.params;

  db.run(

    "DELETE FROM projeler WHERE id=?",

    [id],

    function (err) {

      console.log(err);

      if (err) {

        return res.status(500).json(err);

      }

      res.json({

        success: true,

      });

    }

  );

});

export default router;