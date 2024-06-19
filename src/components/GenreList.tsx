import React, { useEffect, useState } from "react";
import globalAPI from "../services/globalAPI";

function GenreList({ genreId, genreName }: any) {
  interface genreList {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: any;
  }

  const [genreList, setGenreList] = useState<genreList[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = async () => {
    try {
      const res = await globalAPI.getGenreList;
      console.log(res.data.results);
      setGenreList(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pr-5">
      <p className="text-[30px] font-bold dark:text-white">Genre</p>
      {genreList.map((item, index) => (
        <div
          key={item.id}
          onClick={() => {
            setActiveIndex(index);
            genreId(item.id);
            genreName(item.name);
          }}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 group dark:hover:bg-gray-600 p-2 rounded-lg
            ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null}`}
        >
          <img
            src={item.image_background}
            className="w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-50"
          />
          <p className="dark:text-white ml-1 text-[18px] group-hover:font-bold transition-all ease-out duration-50">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
