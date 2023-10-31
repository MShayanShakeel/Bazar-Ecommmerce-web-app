import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logo, Cart, User_Profile } from "../assets/Index";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  console.log(userInfo);
  return (
    <div className="w-full px-4 h-80 md:h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto grid md:flex item-center justify-between">
        <Link to="/">
          <div>
            <img className="h-19.5 my-3.5 w-28" src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className="grid md:flex items-center gap-2 md:gap-8">
          <ul className="flex items-center gap-8 m-top-5">
            <Link>
              {" "}
              <li
                className="text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              >
                Home
              </li>
            </Link>
            <Link>
              <li
                className="text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              >
                Pages
              </li>
            </Link>
            <Link>
              <li
                className="text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              >
                Shop
              </li>
            </Link>
            <Link>
              <li
                className="text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              >
                Social
              </li>
            </Link>
            <Link>
              <li
                className="text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              >
                Blogs
              </li>
            </Link>
          </ul>
          <div className="flex justify-center items-center">
            <Link to="/card">
              <div className="relative">
                <img className="w-12 h-12" src={Cart} alt="Cartimg" />
                <span
                  className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center
            font-semibold"
                >
                  {productData.length}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <img
                className="w-8 h-8 rounded-full"
                src={userInfo ? userInfo.image : User_Profile}
                alt="User_Profile"
              />
            </Link>
            {userInfo && (
              <p
                className="text-base font-titleFont font-semibold
             underline underline-offset-2"
              >
                {userInfo.name}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
