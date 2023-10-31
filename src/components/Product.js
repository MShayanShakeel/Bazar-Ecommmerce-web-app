import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTocart } from "../redux/BazarSlice";
import { ToastContainer , toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const [detail, setdetail] = useState({});
  let [baseQty, setbaseQty] = useState(1);
  const Location = useLocation();
  useEffect(() => {
    setdetail(Location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={detail.image}
            alt="productImg"
          />
          <div className="absolute top-4 right-0">
            {detail.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
                Sale
              </p>
            )}
          </div>
        </div>

        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div className="div">
            <h2 className="text-4x1 font-semibold">{detail.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="text-2x1 font-medium text-gray-900">
                ${detail.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex gap-2">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <div className="text-xs text-gray-500">(1 customer review)</div>
          </div>
          <p className="text-base text-gray-500 -mt-3">{detail.description}</p>
          <div className="flex gap-4">
            <div className="flex items-center justify-between w-52 gap-4 text-gray-500 border p-3">
              <p className="text-sm"> Quantity </p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setbaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }
                  className="border h-6 text-lg font-normal felx justify-center items-center 
                    px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>

                <span>{baseQty} </span>
                <button
                  onClick={() => setbaseQty(baseQty + 1)}
                  className="border h-6 text-lg font-normal flex justify-center items-center 
                    px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button 
            onClick={()=>
              dispatch(
              addTocart({
                _id: detail._id,
                title: detail.title,
                image: detail.image,
                price: detail.price,
                quantity: baseQty,
                description: detail.description,
              })
            ) & toast.success(`${detail.title} is added`)
          }
            className="py-3 px-5 bg-black text-white active:bg-gray-800">
              Add to cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Details :
            <span className="font-medium capitalize">{detail.category}</span>
          </p>
        </div>
      </div>
      <ToastContainer 
      position="top-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div>
  );
};

export default Product;
