import React, { useEffect } from "react";

function GamesByGenresId({ gameGenreList, genreName }: any) {
  useEffect(() => {
    console.log(gameGenreList);
  }, []);

  return (
    <div>
      <p className="font-bold text-[30px] dark:text-white my-5">
        {genreName ? genreName : "Popular Games"}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {gameGenreList.map((item: any) => (
          <div
            className="bg-[#76a8f75e] rounded-lg pb-2 h-full hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
            key={item.id}
          >
            <img
              className="w-full h-[250px] rounded-t-xl object-cover"
              src={item.background_image}
              alt={item.name}
            />
            <p className="dark:text-white text-[18px] font-bold px-2 my-1">
              {item.name} &nbsp;
              <span className="p-1 rounded-sm ml-2 text-[12px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}%
              </span>
            </p>
            <p className="dark:text-white text-[15px] px-2 my-1">
              {item.rating}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenresId;
