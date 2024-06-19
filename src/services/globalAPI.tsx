import axios from "axios";

const key = "84d2e83f203349b2a1843f7f8c371c44";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getGamesList = axiosCreate.get("/games?key=" + key);
const getGameListByGenreId = (id: any) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);

export default { getGenreList, getGamesList, getGameListByGenreId };
