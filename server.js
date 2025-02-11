import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors()); // ✅ Pozwala na żądania z frontendu
app.use(express.json()); // ✅ Obsługuje JSON w requestach

const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;

let accessToken = "";
let tokenExpiration = 0; // 📅 Timestamp wygaśnięcia tokena

// 🔹 Pobierz nowy token Twitch API, jeśli obecny wygasł
const getAccessToken = async () => {
  const currentTime = Math.floor(Date.now() / 1000);
  if (accessToken && currentTime < tokenExpiration) {
    return accessToken;
  }

  try {
    const response = await axios.post(
      "https://id.twitch.tv/oauth2/token",
      new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "client_credentials",
      })
    );

    accessToken = response.data.access_token;
    tokenExpiration = currentTime + response.data.expires_in;
    return accessToken;
  } catch (error) {
    console.error("❌ Błąd pobierania tokena:", error);
    throw new Error("❌ Nie udało się pobrać tokena Twitch API");
  }
};

// 🔹 Proxy API dla IGDB
app.post("/games", async (req, res) => {
  try {
    const token = await getAccessToken();
    const response = await axios.post(
      "https://api.igdb.com/v4/games",
      req.body.query, // ✅ Przesyłamy zapytanie w body requesta

      {
        headers: {
          "Client-ID": CLIENT_ID,
          Authorization: `Bearer ${token}`,
          "Content-Type": "text/plain",
        },
      }
    );

    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error("❌ Błąd pobierania gier:", error);
    res.status(500).json({ error: "❌ Nie udało się pobrać danych z IGDB" });
  }
});

// 🔹 Uruchomienie serwera
app.listen(PORT, () => {
  console.log(`✅ Proxy backend działa na http://localhost:${PORT}`);
});
