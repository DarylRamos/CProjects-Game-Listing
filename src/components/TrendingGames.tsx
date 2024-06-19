import React, { useEffect } from "react";

function TrendingGames({ gameList }: any) {
  useEffect(() => {
    console.log(gameList);
  }, []);

  return (
    <div className="mt-5 hidden md:block">
      <p className="font-bold text-[30px] dark:text-white">Trending Games</p>
      <div className="hidden md:grid md:grid-cols-3 mt-5 lg:grid-cols-4 gap-4">
        {gameList.map(
          (item: any, index: number) =>
            index < 4 && (
              <div
                className="bg-[#76a8f75e] rounded-lg group hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
                key={item.id}
              >
                <img
                  className="h-[270px] rounded-t-lg object-cover"
                  src={item.background_image}
                  alt={item.name}
                />
                <p className="dark:text-white text-[18px] font-bold p-3">
                  {item.name}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
