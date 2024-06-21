import { useEffect, useState } from "react";
import globalAPI from "../services/globalAPI";
import { LuArrowRightFromLine, LuArrowLeftFromLine } from "react-icons/lu";
import { useMediaQuery } from "@mui/material";

function GenreListSidebar({ genreId, genreName }: any) {
  interface genreList {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: any;
  }

  const [genreList, setGenreList] = useState<genreList[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const isMediumDevice = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (isMediumDevice) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [isMediumDevice]);

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
    <div className="flex flex-col px-5 border-r">
      <div className="pb-2 flex justify-between items-center dark:text-white">
        <p
          className={`text-[25px] font-semibold border-none overflow-hidden transition-all ${
            expanded ? "w-64" : "w-0"
          }`}
        >
          Genre
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[20px] p-4 rounded-xl hover:bg-gray-100 hover:dark:bg-gray-800"
        >
          {expanded ? <LuArrowLeftFromLine /> : <LuArrowRightFromLine />}
        </button>
      </div>

      {genreList.map((item, index) => (
        <div
          key={item.id}
          onClick={() => {
            setActiveIndex(index);
            genreId(item.id);
            genreName(item.name);
          }}
          className={`relative flex gap-2 items-center mb-1 cursor-pointer hover:bg-gray-100 group dark:hover:bg-gray-800 p-2 rounded-lg
            ${activeIndex == index ? "bg-gray-200 dark:bg-gray-700" : null}`}
        >
          <img
            src={item.image_background}
            className="size-10 object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-50"
          />
          <p
            className={`dark:text-white ml-1 text-[18px] group-hover:font-bold transition-all overflow-hidden ${
              expanded ? "w-64" : "w-0"
            }`}
          >
            {item.name}
          </p>

          {!expanded && (
            <div
              className={`absolute z-10 left-full rounded-md px-5 py-2 ml-7
            bg-gray-200 dark:bg-gray-700 dark:text-white text-lg whitespace-pre font-semibold 
            invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
            >
              {item.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default GenreListSidebar;
