import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const getTurnsByUserId = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/turns/user/${userId}`);
  return response.data;
};

export const cancelTurn = async (turnId) => {
  const response = await axios.put(`${API_BASE_URL}/turns/cancel/${turnId}`);
  return response.data;
};

export const addTurn = async (turnPayload) => {
  const response = await axios.post(
    `${API_BASE_URL}/turns/schedule`,
    turnPayload
  );
  return response.data;
};
