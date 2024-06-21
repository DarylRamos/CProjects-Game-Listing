import React, { useEffect, useState } from "react";
import GenreListSidebar from "../components/GenreListSidebar";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import globalAPI from "../services/globalAPI";
import GamesByGenresId from "../components/GamesByGenresId";

function Home() {
  const [gamesList, setGamesList] = useState<any[]>([]);
  const [gameListByGenre, setGameListByGenre] = useState<any[]>([]);
  const [genreName, setGenreName] = useState<any[]>();

  useEffect(() => {
    getGamesList();
    getGameListByGenreId(4);
  }, []);

  const getGamesList = async () => {
    try {
      const res = await globalAPI.getGamesList;
      setGamesList(res.data.results);
      console.log(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const getGameListByGenreId = async (id: any) => {
    try {
      const res = await globalAPI.getGameListByGenreId(id);
      console.log("Game List by Genre: ", res.data.results);
      console.log("GENERATED ID: ", id);
      setGameListByGenre(res.data.results);
      console.log("GENRE NAME: ", genreName);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <div>
        <GenreListSidebar
          genreId={(genreId: any) => getGameListByGenreId(genreId)}
          genreName={(genreName: any) => setGenreName(genreName)}
        />
      </div>
      <div>
        {gamesList.length > 0 && (
          <div className="ml-8">
            <Banner gameBanner={gamesList[0]} />
            <TrendingGames gameList={gamesList} />
            <GamesByGenresId
              gameGenreList={gameListByGenre}
              genreName={genreName}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
