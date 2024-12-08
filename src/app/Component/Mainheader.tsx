import React from "react";
import Cartprofile from "./Cartprofile";
import Link from "next/link";
/* eslint-disable @typescript-eslint/no-unused-vars */
import Home from "../page";
import Signup from "../Signup/page";
import { SearchOutlined } from "@mui/icons-material";
/* eslint-enable @typescript-eslint/no-unused-vars */
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

const Mainheader = () => {
  return (
    <div>
      <div className="font-[poppins] text-white leading-[48px] justify-evenly flex max-w-[1440px] h-12 bg-black">
        <div className="flex space-x-4">
          <div>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
          <div className="font-extrabold hover:underline decoration- underline-offset-[8px] decoration-[50px]:">ShopNow</div>
        </div>
        <div>English 
          <KeyboardArrowDownSharpIcon/>
        </div>
      </div>
      <div className=" flex leading-[90px] gap-10 justify-around max-w-[1440px] h-[90px] border-solid border-[0.5px] border-gray-300">
        <h1 className="text-[24px] font-[Inter] font-bold">Exclusive</h1>
        <div className="flex space-x-6">
          <Link className="hover:underline decoration-black underline-offset-[8px] decoration-[50px]: font-[poppins] text-[16px] font" href={"/"}>Home</Link>
          <Link className="hover:underline decoration-black underline-offset-[8px] decoration-[50px]: font-[poppins] text-[16px] font" href={"Contact"}>Contact</Link>
          <Link className="hover:underline decoration-black underline-offset-[8px] decoration-[50px]: font-[poppins] text-[16px] font" href={"About"}>About</Link>
          <Link className="hover:underline decoration-black underline-offset-[8px] decoration-[50px]: font-[poppins] text-[16px] font" href={"Signup"}>Sign up</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="active:outline-none: rounded-[7px]  h-8 border-[0.5px] bg-gray-200  leading-3">
            <input
              className="active:outline-none:  h-7 w-auto bg-transparent p-1"
              type="text"
              placeholder="What are you looking for"
            />
            <SearchOutlinedIcon className="size-5 text-gray-400"></SearchOutlinedIcon>
          </div>
          <Cartprofile />
        </div>
      </div>
    </div>
  );
};

export default Mainheader;
