CREATE TABLE IF NOT EXISTS personeller (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    ad TEXT NOT NULL,

    tc TEXT,

    telefon TEXT,

    gorev TEXT,

    proje_id INTEGER,

    ucret REAL,

    aktif INTEGER DEFAULT 1

);