import db from "./database.js";

db.get(

  "SELECT COUNT(*) as total FROM projeler",

  [],

  (err, row) => {

    if (err) return;

    if (row.total > 0) return;

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

      "LNG Projesi"

    );

    stmt.run(

      "NB-34",

      "HSN TUZLA DEHA",

      "Tamir",

      "2026-06-01",

      "",

      "Aktif",

      "Gemi Bakım"

    );

    stmt.finalize();

  }

);

export default db;