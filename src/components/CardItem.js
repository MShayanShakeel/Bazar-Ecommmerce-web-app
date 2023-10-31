import React from 'react'
import { MdOutlineClose} from'react-icons/md'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem ,resetcart, incrimentQut ,decrimentQut } from '../redux/BazarSlice';
import { ToastContainer , toast } from "react-toastify";
import { Link } from 'react-router-dom';
const CardItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state)=> state.bazar.productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping cart</h2>
      </div>
      <div>
        { productData.map((iitem)=> (                 
            <div  key={iitem._id}  
            className="flex items-center justify-between gap-6 mt-6">

              <div className="flex items-center gap-2">
                <MdOutlineClose onClick={()=>dispatch(deleteItem(iitem._id))& toast.error(`${iitem.title}is removed`)}
                 className="text-xl text-gray-600
               hover:text-red-600 cursor-pointer duration-300"/>
               <img className="w-32 h-32 object-cover" 
               src={iitem.image} alt="prodictImg" />
        </div>
              <h2 className="w-52">{iitem.title}</h2>
              <p className="w-10">${iitem.price}</p>
              <div className="flex items-center justify-between w-52 gap-4 text-gray-500 border p-3">
              <p className="text-sm"> Quantity </p>
              <div className="flex items-center gap-4 text-sm font-semibold">
               <button
                 onClick={()=>
                  dispatch(
                    decrimentQut({
                    _id: iitem._id,
                    title: iitem.title,
                    image: iitem.image,
                    price: iitem.price,
                    quantity: 1,
                    description: iitem.description,
                  }))}
                  className="border h-6 text-lg font-normal felx justify-center items-center 
                    px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                {iitem.quantity}
                <button
                onClick={()=>
                  dispatch(
                    incrimentQut({
                    _id: iitem._id,
                    title: iitem.title,
                    image: iitem.image,
                    price: iitem.price,
                    quantity: 1,
                    description: iitem.description,
                  }))}
                  className="border h-6 text-lg font-normal flex justify-center items-center 
                    px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <p className="w-14">${iitem.quantity * iitem.price}</p>
            </div>
           ))
        }
      </div>
      <button onClick={()=> dispatch(resetcart()) & toast.error("your cart is Empty") } className="bg-red-500 text-white  mt-8 ml-7 py-1 px-8 hover:bg-red-800 
      duration-300">Reset Cart</button>
      <Link to="/">
      <button className="mt-8 ml-7 flex text-center hover:text-black gap-1
       text-gray-400 duration-300">
      
        <span><HiOutlineArrowLeft/></span>
        Goto Shopping
      </button>
      </Link>
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
  )
};
export default CardItem;
