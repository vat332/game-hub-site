import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/", // ✅ Używamy backendu jako proxy!
});

/**
 * Pobiera dane z IGDB przez proxy backend
 */
const fetchFromIGDB = async (query: string) => {
  try {
    const response = await apiClient.post("/games", { query });
    return response.data;
  } catch (error) {
    console.error("❌ Błąd pobierania danych z IGDB:", error);
    throw new Error("❌ Nie udało się pobrać danych z IGDB");
  }
};

export default fetchFromIGDB;
