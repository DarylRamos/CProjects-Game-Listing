function Banner({ gameBanner }: any) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-10 bg-gradient-to-t from-slate-900 to-transparent w-full rounded-xl">
        <p className="sm:text-[30px] lg:text-[45px] text-white font-semibold py-1">
          {gameBanner.name}
        </p>
        <button className="bg-blue-700 text-[15px] text-white font-semibold px-5 p-2 rounded-lg">
          Get Now
        </button>
      </div>
      <img
        className="md:h-[500px] w-full object-cover rounded-xl"
        src={gameBanner.background_image}
        alt={gameBanner.name}
      />
    </div>
  );
}

export default Banner;
