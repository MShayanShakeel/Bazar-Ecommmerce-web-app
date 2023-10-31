import React from "react";
import { LLogo, Payment } from "../assets/Index";
import {
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsFillPersonFill,
  BsPatchCheckFill,
  BsFillHandThumbsUpFill,
  BsFillHandbagFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 p-4 items-center justify-center md:grid-cols-4">
        {/* Logoicon*/}
        <div className="flex flex-col gap-6">
          <img className="w-32" src={LLogo} alt="LLogo" />
          <p className="text-white tracking-wide text-sm font-bold">
            React BD.com
          </p>
          <img className="w-40" src={Payment} alt="Payment" />
          <div className="flex text-lg text-gray-400 gap-4">
            <BsGithub className="hover:text-white cursor-pointer duration-300" />
            <BsFacebook className="hover:text-white cursor-pointer duration-300" />
            <BsInstagram className="hover:text-white cursor-pointer duration-300" />
            <BsYoutube className="hover:text-white cursor-pointer duration-300" />
            <BsTwitter className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/*Locate us */}
        <div>
          <h1 className="font-semibold text-2xl text-white mb-4">Locate us</h1>
          <div className="flex flex-col text-base gap-2">
            <p>Address : Shah_faisal</p>
            <p>Mobile : 000 111 222</p>
            <p>Phone : 111 444 777</p>
            <p>Email : Ecommerce@gmal.com</p>
          </div>
        </div>
        {/*Profile  */}
        <div>
          
          <h2 className="font-semibold text-2xl text-white mb-5">Profile</h2>
          <div className="flex flex-col text-base gap-2">
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span className="text-lg">
              <BsFillPersonFill />
            </span>
            My account
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span className="text-lg">
              <BsPatchCheckFill />
            </span>
            Check Out
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span className="text-lg">
              <BsFillHandThumbsUpFill />
            </span>
            Order Report
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span className="text-lg">
              <BsFillHandbagFill />{" "}
            </span>
            Help & Support
          </p>
          </div>
        </div>

        {/* Subscribe*/}
        <div className="flex flex-col justify-center">
          <input className="border px-4 bg-transparent py-2 text-sm" placeholder="e-mail" type="text" />
          <button className="text-sm border-px-4 text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe Us</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
