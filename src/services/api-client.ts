import axios, { CanceledError } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/", // ✅ Backend jako proxy
});

/**
 * Pobiera dane z IGDB przez proxy backend
 */
const fetchFromIGDB = async (query: string, signal?: AbortSignal) => {
  try {
    const response = await apiClient.post(
      "/games",
      { query },
      { signal } // ✅ Dodajemy `signal`, aby obsłużyć anulowanie
    );
    return response.data;
  } catch (error: any) {
    if (axios.isCancel(error)) {
      console.warn("❗ Zapytanie anulowane:", error.message);
      throw new CanceledError();
    }
    console.error("❌ Błąd pobierania danych z IGDB:", error);
    throw new Error("❌ Nie udało się pobrać danych z IGDB");
  }
};

export default fetchFromIGDB;
