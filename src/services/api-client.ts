import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a10d1ed1fb11418d94e70e7a397bf69e",
  },
});
