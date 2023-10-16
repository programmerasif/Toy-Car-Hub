import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const BestSellingCard = ({car}) => {


  const {productName,picture,price,rating} = car


    return (
        <div className=" mx-auto shadow-md rounded-lg relative overflow-hidden " data-aos="fade-up" >
            
                
        <div className="card w-80  bg-[#f6f8fa]   text-[#333333] " data-aos="fade-up">
              <div className="flex flex-col justify-center items-center h-20 shadow-sm">
              <h2 className="text-xl font-bold pt-5">{productName}</h2>
                <p className="justify-center items-center">Ratings : <span
       
      >
      </span></p>
              </div>
            <figure className=" h-[300px]">
                <img src={picture} alt="Shoes" className="" />
            </figure>
            <div className="py-5 hover:bg-sky-100 duration-300 ">
              
                <div className="card-actions  flex flex-col justify-start items-center">
                <p><span className="font-semibold">Price :  </span><span className="text-yellow-500">{price}$</span></p>
                    <div className="flex justify-between items-center gap-4">
                    <Link ><button className="px-6 py-1 bg-ske rounded-full font-semibold text-yellow-500">Buy</button></Link>
                    <Link ><button className="px-6 py-1 bg-yellow-500 text-white rounded-full font-semibold flex justify-center items-center gap-2"><span>Add To Card</span> <FaCartPlus /></button></Link>
                    </div>
                </div>
            </div>
        </div>

       
        </div>
    );
};

export default BestSellingCard;