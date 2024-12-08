import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Link from "next/link";
import Image from "next/image";


const Mainfooter = () => {
  return (
    <div className="text-white font-[poppins] gap-9 justify-items-center justify-around items-center  flex max-w-[1440px] h-[440px] p-4 bg-black">
      <div className="space-y-4">
        <h1 className="font-extrabold">Exclusive</h1>
        <h2>Subscribe</h2>
        <h3>Get 10% off your first order</h3>
        <div className="flex border-[2px]  h-[auto] w-[auto] border-white">
          <input placeholder="Enter your email" className="bg-transparent" type="text"></input>
          <SendOutlinedIcon />
        </div>
      </div>
      <div className="space-y-3">
        <h1 className="font-extrabold">Support</h1>
        <h3>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h3>
        <h3>exclusive@gmail.com</h3>
        <h3>+88015-88888-9999</h3>
      </div>
      <div className="space-y-3">
        <h1>Account</h1>
        <Link className="flex flex-col" href={"Account"}>
          My Account
        </Link>
        <Link className="flex flex-col" href={"Login"}>
          Login/Register
        </Link>
        <Link className="flex flex-col" href={"Cart"}>
          Cart
        </Link>
        <Link className="flex flex-col" href={"Wishlist"}>
          Wishlist
        </Link>
        <Link className="flex flex-col" href={""}>
          Shop
        </Link>
      </div>
      <div className="space-y-8">
        <h1>Quick Link</h1>
        <div className="space-y-4">
          <Link className="flex flex-col" href="">
            Privacy Policy
          </Link>
          <Link className="flex flex-col" href="">
            Terms of Use
          </Link>
          <Link className="flex flex-col" href="">
            FAQ
          </Link>
          <Link className="flex flex-col" href="Contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="space-y-6">
        <h1>Download App</h1>
        <h3>Save $3 with App New User Only</h3>
        <div className="flex  h-[90px] justify-around items-center">
          <div>
            <Image
              alt=""
              width="120"
              height="10"
              className=""
              src="/Assets/QRcode.jpg"
            ></Image>
          </div>
          <div className="space-y-[-70px] mt-0">
            <div className="mt-0">
              <Image
                alt=""
                width={140}
                height={70}
                src="/Assets/Appstore.png"
              ></Image>
            </div>
            <div>
              <Image
                alt=""
                width={140}
                height={110}
                src="/Assets/Googleplay.png"
              ></Image>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Mainfooter;
