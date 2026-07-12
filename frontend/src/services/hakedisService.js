import axios from "axios";

const PERSONEL_API = "http://localhost:5000/personeller";
const HAKEDIS_API = "http://localhost:5000/hakedisler";

export const getPersoneller = async () => {

  const response = await axios.get(PERSONEL_API);

  return response.data;

};

export const saveHakedis = async (data) => {

  const response = await axios.post(

    HAKEDIS_API,

    data

  );

  return response.data;

};

export const getHakedisler = async () => {

  const response = await axios.get(

    HAKEDIS_API

  );

  return response.data;

};
export const getHakedis = async (id) => {

  const response = await axios.get(

    `${HAKEDIS_API}/${id}`

  );

  return response.data;

};
