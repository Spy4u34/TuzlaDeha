import db from "./database.js";

db.serialize(() => {

  db.run(`

    CREATE TABLE IF NOT EXISTS projeler(

      id INTEGER PRIMARY KEY AUTOINCREMENT,

      proje_adi TEXT NOT NULL,

      firma TEXT,

      is_turu TEXT NOT NULL,

      baslangic_tarihi TEXT,

      bitis_tarihi TEXT,

      durum TEXT DEFAULT 'Aktif',

      aciklama TEXT,

      created_at DATETIME DEFAULT CURRENT_TIMESTAMP

    )

  `);

});

export default db;