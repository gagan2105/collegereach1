import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const sendChatMessage = async (message: string) => {
  try {
    const response = await axios.post(`${API_URL}/api/chat`, { message });
    return response.data;
  } catch (error) {
    console.error("Error sending chat message:", error);
    throw error;
  }
};
