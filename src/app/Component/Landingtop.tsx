import Image from "next/image";
import React from "react";
import Link from "next/link";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
const Landingtop = () => {
  return (
    <div className="flex m-4 gap-5 justify-center">
      <div className="w-[217px] h-[344px] space-y-3">
        <div className="">
          <Link href={""}>
            Women&apos;s Fashion
            <ArrowForwardIosRoundedIcon className="ml-16 size-4" />{" "}
          </Link>
        </div>
        <div>
          <Link href={""}>
            Men&apos;s Fashion
            <ArrowForwardIosRoundedIcon className="ml-[86px] size-4" />{" "}
          </Link>
        </div>
        <div>
          {" "}
          <Link href={""}> Electronics</Link>
        </div>
        <div>
          {" "}
          <Link href={""}>Home and Lifestyle </Link>
        </div>
        <div>
          {" "}
          <Link href={""}> Medicne</Link>
        </div>
        <div>
          {" "}
          <Link href={""}> Sports and Outdoor</Link>
        </div>
        <div>
          {" "}
          <Link href={""}>Baby&apos;s and Toys </Link>
        </div>
        <div>
          {" "}
          <Link href={""}>Groceries and Pets </Link>
        </div>
        <div>
          {" "}
          <Link href={""}> Health and Beauty</Link>
        </div>
      </div>
      <div className="h-[344px] mt-[-16px] w-[0.61px] bg-gray-400"></div>
      <div className="flex justify-around items-center text-white w-[892px] h-[360px] bg-black">
        <div className=" p-5 ">
          <div className="flex h-12 leading-[48px] gap-6">
            <Image
              alt=""
              width={40}
              height={49}
              src={"/Assets/applelogo.png"}
            ></Image>
            <h3>iPhone 14 Series</h3>
          </div>
          <h1 className="font-bold flex-wrap text-wrap text-[40px]">Up to 10% off Voucher</h1>
          <Link className="underline underline-offset-4 underline-2 decoration-white" href={''}>Shop Now</Link>
          <ArrowForwardRoundedIcon/>
        </div>
        <Image
          alt=""
          src={"/Assets/landPic.jpg"}
          width={496}
          height={300}
          className=""
        ></Image>
      </div>
    </div>
  );
};

export default Landingtop;
