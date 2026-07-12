const personnelData = [
  {
    id: 1,
    ad: "Mehmet Kaya",
    tc: "11111111111",
    telefon: "0532 111 11 11",
    gorev: "Usta",
    ucret: 3000,
    aktif: true,
  },
  {
    id: 2,
    ad: "Ahmet Yılmaz",
    tc: "22222222222",
    telefon: "0532 222 22 22",
    gorev: "Usta",
    ucret: 2800,
    aktif: true,
  },
  {
    id: 3,
    ad: "Ali Demir",
    tc: "33333333333",
    telefon: "0532 333 33 33",
    gorev: "Yardımcı",
    ucret: 2500,
    aktif: true,
  },
  {
    id: 4,
    ad: "Hasan Arslan",
    tc: "44444444444",
    telefon: "0532 444 44 44",
    gorev: "Kaynakçı",
    ucret: 3200,
    aktif: true,
  },
  {
    id: 5,
    ad: "Burak Çelik",
    tc: "55555555555",
    telefon: "0532 555 55 55",
    gorev: "Usta",
    ucret: 3000,
    aktif: true,
  },
  {
    id: 6,
    ad: "Emre Şahin",
    tc: "66666666666",
    telefon: "0532 666 66 66",
    gorev: "Yardımcı",
    ucret: 2600,
    aktif: true,
  },
  {
    id: 7,
    ad: "Serkan Aydın",
    tc: "77777777777",
    telefon: "0532 777 77 77",
    gorev: "Boru Montaj",
    ucret: 2700,
    aktif: true,
  },
  {
    id: 8,
    ad: "Okan Yıldız",
    tc: "88888888888",
    telefon: "0532 888 88 88",
    gorev: "Firma Yetkilisi",
    ucret: 2900,
    aktif: true,
  },
];

export const getPersonnel = () => {
  return personnelData;
};

export const addPersonnel = (person) => {
  personnelData.push(person);
};

export const updatePersonnel = (id, data) => {
  const index = personnelData.findIndex(
    (p) => p.id === id
  );

  if (index !== -1) {
    personnelData[index] = {
      ...personnelData[index],
      ...data,
    };
  }
};

export const deletePersonnel = (id) => {
  const index = personnelData.findIndex(
    (p) => p.id === id
  );

  if (index !== -1) {
    personnelData.splice(index, 1);
  }
};

export default personnelData;