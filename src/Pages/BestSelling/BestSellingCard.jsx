import { Link } from "react-router-dom";


const BestSellingCard = ({car}) => {


  const {productName,picture,price,rating} = car
    return (
        <div className=" mx-auto shadow-md rounded-lg " data-aos="fade-up" >
            
                
        <div className="card w-80 bg-[#A0CeD4]   text-[#333333]" data-aos="fade-up">
              <div className="flex flex-col justify-center items-center h-20 shadow-sm">
              <h2 className="card-title ">{productName}</h2>
                <p>Ratings : {rating}</p>
              </div>
            <figure className=" h-[300px]">
                <img src={picture} alt="Shoes" className="" />
            </figure>
            <div className="card-body   bg-white   hover:bg-sky-100 duration-300 ">
              
                <div className="card-actions  flex flex-col justify-start items-center">
                <p>Price :{price}</p>
                    <div className="flex justify-between items-center gap-4">
                    <Link ><button className="px-6 py-1 bg-[#A0CeD4] rounded-full font-semibold ">Buy</button></Link>
                    <Link ><button className="px-6 py-1 bg-[#A0CeD4] rounded-full font-semibold ">Add To Card</button></Link>
                    </div>
                </div>
            </div>
        </div>

       
        </div>
    );
};

export default BestSellingCard;