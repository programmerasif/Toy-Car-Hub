import { Link } from "react-router-dom";


const BestSellingCard = ({car}) => {


  const {productName,picture,price,rating} = car
    return (
        <div className=" mx-auto shadow-md rounded-lg " data-aos="fade-up" >
            {/* <div className="card card-compact w-80 bg-[#f6f8fa]">
                    <figure><img src={picture} alt="car" className="w-48 h-64" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{productName}</h2>
                        <p>Price : {price}</p>
                        <p>Rating : {rating}</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#394867]">Buy Now</button>
                        </div>
                    </div>
                </div> */}
                
        <div className="card w-80 bg-[#A0CeD4]   text-[#333333]" data-aos="fade-up">
              <div className="flex flex-col justify-center items-center h-20 shadow-sm">
              <h2 className="card-title ">{productName}</h2>
                <p>Ratings : {rating}</p>
              </div>
            <figure className=" h-[300px]">
                <img src={picture} alt="Shoes" className="" />
            </figure>
            <div className="card-body   bg-white   hover:bg-gray-50 ">
              
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