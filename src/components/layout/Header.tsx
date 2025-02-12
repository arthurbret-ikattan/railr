"use client";

import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <header
        onClick={() => (window.location.href = "/dashboard")}
        className="flex justify-between items-center p-4 bg-localblue/50 fixed rounded-lg m-4 z-50 backdrop-blur-[7px] gap-[15px] shadow-lg cursor-pointer"
      >
        <Image
          src="/logo_traintracker.jpg"
          alt="Logo"
          width={40}
          height={40}
          className="rounded shadow-md border border-white/30"
        />
        {/* <h1 className="text-xl font-bold">TrainTracker</h1> */}
        <svg
          width="105"
          height="24"
          viewBox="0 0 105 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.66 0C27.396 0 30.468 2.976 30.468 7.552C30.468 11.136 28.58 13.632 25.476 14.496L31.108 23.264H25.508L20.196 14.88H5.208V23.264H0.216003V0H22.66ZM5.208 10.688H22.5C24.516 10.688 25.636 9.28 25.636 7.552C25.636 5.824 24.516 4.416 22.5 4.416H5.208V10.688Z"
            fill="black"
          />
          <path
            d="M41.818 0H47.29L55.578 23.264H50.97L48.986 17.12H40.122L38.138 23.264H33.53L41.818 0ZM41.146 13.6H47.962L44.698 3.392H44.442L41.146 13.6Z"
            fill="black"
          />
          <path d="M58.1252 23.264V0H61.0372V23.264H58.1252Z" fill="black" />
          <path
            d="M63.7205 23.264V0H65.8965V21.312H77.2565V23.264H63.7205Z"
            fill="black"
          />
          <path
            d="M96.5 0C100.692 0 103.54 2.784 103.54 6.944C103.54 10.208 101.684 12.64 98.836 13.472L104.308 23.264H102.612L97.268 13.824H81.5065V23.264H80.0025V0H96.5ZM81.5065 12.448H96.468C99.86 12.448 102.068 10.208 102.068 6.912C102.068 3.648 99.828 1.408 96.468 1.408H81.5065V12.448Z"
            fill="black"
          />
        </svg>

        <div className="flex items-center gap-4"></div>
      </header>
      <div className="h-[90px]"></div>
    </div>
  );
};

export default Header;
