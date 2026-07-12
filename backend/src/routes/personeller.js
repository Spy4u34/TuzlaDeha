import express from "express";
import db from "../database/database.js";

const router = express.Router();

/* TÜM PERSONELLER */

router.get("/", (req, res) => {

  db.all(

    `SELECT
      personeller.*,
      projeler.proje_adi
     FROM personeller
     LEFT JOIN projeler
     ON personeller.proje_id = projeler.id
     ORDER BY personeller.ad ASC`,

    [],

    (err, rows) => {

      if (err) {

        return res.status(500).json(err);

      }

      res.json(rows);

    }

  );

});

/* ÖRNEK VERİ */

router.get("/seed", (req, res) => {

  db.serialize(() => {

    db.run("DELETE FROM personeller");

    const stmt = db.prepare(`
      INSERT INTO personeller
      (ad, tc, telefon, gorev, proje_id, ucret, aktif)
VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

   const data = [

["Mehmet Kaya","11111111111","05321111111","Usta",1,2900,1],
["Ahmet Yılmaz","22222222222","05322222222","Usta",1,2850,1],
["Ali Demir","33333333333","05323333333","Yardımcı",1,1900,1],
["Hasan Arslan","44444444444","05324444444","Kaynakçı",1,2600,1],
["Burak Çelik","55555555555","05325555555","Usta",1,2750,1],
["Emre Şahin","66666666666","05326666666","Yardımcı",1,1850,1],
["Serkan Aydın","77777777777","05327777777","Boru Montaj",1,2450,1],
["Okan Yıldız","88888888888","05328888888","Firma Yetkilisi",1,3000,1],
["Murat Koç","99999999991","05329999991","İskeleci",1,2200,1],
["İbrahim Özdemir","99999999992","05329999992","Elektrikçi",1,2400,1],
["Yusuf Kılıç","99999999993","05329999993","Boyacı",1,2100,1],
["Mustafa Kurt","99999999994","05329999994","Yardımcı",1,1800,1],
["Ramazan Çetin","99999999995","05329999995","Kaynakçı",1,2550,1],
["Fatih Güneş","99999999996","05329999996","Boru Montaj",2,2350,1],
["Onur Aksoy","99999999997","05329999997","Usta",2,2800,1],
["Eren Polat","99999999998","05329999998","Yardımcı",2,1950,1],
["Sinan Doğan","99999999999","05329999999","Elektrikçi",2,2300,1],
["Cengiz Tekin","99999999910","05329999910","İskeleci",2,2150,1],
["Volkan Korkmaz","99999999920","05329999920","Kaynakçı",2,2500,1],
["Tolga Acar","99999999930","05329999930","Boyacı",2,2050,1],
["Hüseyin Erol","99999999940","05329999940","Yardımcı",2,1900,1],
["Kaan Duman","99999999950","05329999950","Boru Montaj",2,2400,1],
["Erhan Özkan","99999999960","05329999960","Usta",2,2950,1],
["İsmail Karaca","99999999970","05329999970","Kaynakçı",3,2650,1],
["Gökhan Uslu","99999999980","05329999980","Elektrikçi",3,2350,1],
["Adem Turan","99999999981","05329999981","Yardımcı",3,1850,1],
["Recep Çakır","99999999982","05329999982","Boyacı",3,2000,1],
["Kemal Aslan","99999999983","05329999983","İskeleci",3,2250,1],
["Ferhat Taş","99999999984","05329999984","Formen",3,3000,1],
["Süleyman Avcı","99999999985","05329999985","Saha Şefi",3,3000,1],

];

    data.forEach((person) => {

      stmt.run(person);

    });

    stmt.finalize();

    res.json({

      success: true,

      message: "Personeller eklendi."

    });

  });

});

/* EKLE */

router.post("/", (req, res) => {

  const {

    ad,

    tc,

    telefon,

    gorev,

    proje_id,

    ucret,

    aktif,

  } = req.body;

  db.run(

    `INSERT INTO personeller
    (ad, tc, telefon, gorev, proje_id, ucret, aktif)
    VALUES (?, ?, ?, ?, ?, ?, ?)`,

    [

      ad,

      tc,

      telefon,

      gorev,

      proje_id,

      ucret,

      aktif ? 1 : 0,

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

/* GÜNCELLE */

router.put("/:id", (req, res) => {

  const { id } = req.params;

  const {

    ad,

    tc,

    telefon,

    gorev,

    proje_id,

    ucret,

    aktif,

  } = req.body;

  db.run(

    `UPDATE personeller
     SET
       ad = ?,
       tc = ?,
       telefon = ?,
       gorev = ?,
       proje_id = ?,
       ucret = ?,
       aktif = ?
     WHERE id = ?`,

    [

      ad,

      tc,

      telefon,

      gorev,

      proje_id,

      ucret,

      aktif ? 1 : 0,

      id,

    ],

    function (err) {

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

    "DELETE FROM personeller WHERE id = ?",

    [id],

    function (err) {

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