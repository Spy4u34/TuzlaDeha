import axios from "axios";

const API = "https://tuzladeha.onrender.com/projeler";

export const getProjects = async () => {

  const response = await axios.get(API);

  return response.data;

};

export const addProject = async (project) => {

  const response = await axios.post(

    API,

    project

  );

  return response.data;

};

export const updateProject = async (

  id,

  project

) => {

  const response = await axios.put(

    `${API}/${id}`,

    project

  );

  return response.data;

};

export const deleteProject = async (

  id

) => {

  const response = await axios.delete(

    `${API}/${id}`

  );

  return response.data;

};

export const seedProjects = async () => {

  const response = await axios.get(

    `${API}/seed`

  );

  return response.data;

};