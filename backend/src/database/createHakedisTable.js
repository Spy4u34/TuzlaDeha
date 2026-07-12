import db from "./database.js";

db.serialize(() => {

  db.run(`
    CREATE TABLE IF NOT EXISTS hakedisler (

      id INTEGER PRIMARY KEY AUTOINCREMENT,

      proje TEXT,

      is_turu TEXT,

      ay TEXT,

      gunluk_gider REAL,

      toplam_personel INTEGER,

      toplam_gun REAL,

      toplam_yevmiye REAL,

      toplam_gelir REAL,

      toplam_gider REAL,

      net_kar REAL,

      personeller TEXT,

      created_at DATETIME DEFAULT CURRENT_TIMESTAMP

    )
  `);

});

export default db;