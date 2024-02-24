"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

function Navbar(props) {
  const [Open, setOpen] = useState(false);

  let showElement = `${
    Open
      ? "custom-sm:flex sm:flex md:flex items-center gap-1 custom-sm:pb-5 sm:pb-5 md:pb-0 "
      : "custom-sm:hidden sm:hidden md:flex items-center gap-1 sm:pb-5 md:pb-0 "
  }`;

  const handleClick = () => {
    setOpen(!Open);
    // console.log(Open);
  };

  return (
    <div className="md:flex sm:block sm:pl-5 md:pl-0 bg-gray-800 text-white gap-10 p-5 sm:justify-between md:justify-normal">
      <div className="flex justify-between sm:py-5 md:py-0 md:ml-10 custom-sm:pb-5">
        <div className="flex items-center gap-1 ">
          <FaHome size={"20px"} />
          <Link href={"/"}>
            <p className=" cursor-pointer">Home</p>
          </Link>
        </div>
        <div className=" md:hidden sm:flex items-center" onClick={handleClick}>
          <GiHamburgerMenu className="cursor-pointer" />
        </div>
      </div>
      <div className={showElement}>
        <GrGallery />
        <Link href={"/gallery"}>
          <p className=" cursor-pointer">Gallery</p>
        </Link>
      </div>
      <div className={showElement}>
        <IoIosContact size={"20px"} />
        <Link href={"/contact"}>
          <p className=" cursor-pointer">Contact</p>
        </Link>
      </div>
      <div className={showElement}>
        <FcAbout size={"20px"} />
        <Link href={"/about"}>
          <p className=" cursor-pointer">About</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
