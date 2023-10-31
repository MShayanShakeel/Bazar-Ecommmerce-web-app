import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardItem from "../components/CardItem";
import { Payment, cartbg } from "../assets/Index";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Card = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalamount, settotalamount] = useState("");
  const [payNow, setpayNow] = useState(false);
  //TOTAL PRICE LOGIC SIMPLE IS ALL ITEM PRICE ADD TO TOTAL PRICE
  useEffect(() => {
    let price = 0;
    productData.map((iitem) => {
      price += iitem.price * iitem.quantity;
      return price;
    });
    settotalamount(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setpayNow(true);
    } else {
      toast.error("Please Sign in to CheckOut");
    }
  };
  //FIRE BASE CRIDENCIAL LOCAL POST DEFINE 8000
  const Payment = async (tokan) => {
    await axios.port("http://localhost:8000/pay", {
      amount: totalamount * 100,
      tokan: tokan,
    });
  };

  return (
    <div>
      <img className="w-full h-60 object-cover" src={cartbg} alt="cardbg" />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CardItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 pb-6 border-b-[1px] border-b-gray-400">
            <h2 className="text-2xl  font-medium">cart total</h2>
            <p className="flex items-center gap-4 text-base">
              subtotal{" "}
              <span className="font-titleFont font-bold text-lg">
                $ {totalamount}
              </span>
            </p>
            <p className="flex items-center gap-4 text-base">
              shopping{" "}
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </p>
          </div>
          <p className="font-titleFont justify-between font-semibold flex mt-6">
            Total <span className="text-xl font-bold">$ {totalamount}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full mt-6 py-3
           hover:bg-gray-800 duration-300"
          >
            Proceed To CheckOut
          </button>
          {
            //DEFINE PUBLIC KEY  BY PAYMENT METHOD STICKY
            payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51NAdGTJyyPeVoh9q4PIVyLLSZmuAp9INLBswjqGwbyzAAmsHz
                yPdyvG799WzYYwotSvfQKJYpuZAT1si3OFu3zji00aVG51q8O"
                  name="Bazar Online Shopping"
                  amount={totalamount * 100}
                  label="Pay to bazar"
                  description={`your payment amunt is $${totalamount}`}
                  tokan={Payment}
                  email={userInfo.email}
                />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
