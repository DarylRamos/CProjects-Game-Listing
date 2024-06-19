import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useTheme();

  const handleSetTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    console.log("Theme", theme);
  }, []);

  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
        <HiMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent outline-none w-full"
        />
      </div>
      <div>
        {theme == "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              handleSetTheme("dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              handleSetTheme("light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
