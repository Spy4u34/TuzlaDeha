import axios from "axios";

const API = "http://localhost:5000/personeller";

export const getPersonnel = async () => {

  const response = await axios.get(API);

  return response.data;

};

export const addPersonnel = async (person) => {

  const response = await axios.post(API, person);

  return response.data;

};

export const updatePersonnel = async (id, person) => {

  const response = await axios.put(

    `${API}/${id}`,

    person

  );

  return response.data;

};

export const deletePersonnel = async (id) => {

  const response = await axios.delete(

    `${API}/${id}`

  );

  return response.data;

};