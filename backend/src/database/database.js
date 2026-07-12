import sqlite3 from "sqlite3";
import fs from "fs";

const db = new sqlite3.Database("./database.sqlite", (err) => {

  if (err) {

    console.log(err.message);

  } else {

    console.log("SQLite Bağlandı ✅");

    const schema = fs.readFileSync(
      "./src/database/schema.sql",
      "utf8"
    );

    db.exec(schema, (err) => {

      if (err) {

        console.log(err.message);

      } else {

        console.log("Tablolar Hazır ✅");

      }

    });

  }

});

export default db;