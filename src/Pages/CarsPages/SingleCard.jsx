import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useStars } from "stars-rating-react-hooks"

const SingleCard = ({cars}) => {
    const {user} = useContext(AuthContext)
    const handelMessage = () =>{
        if (!user?.email) {
            Swal.fire({
                position: 'top-center',
                icon: 'info',
                title: 'You have to login first',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
    const {make,img,price,rating,_id} = cars
    const config = {
        totalStars: 5,
        initialSelectedValue: rating,
        renderFull: "★",
        renderEmpty: "☆"
      };
    
      const {
        stars,
        getStarProps,
        getStarWrapperProps,
        
        
      } = useStars(config);
    
    return (
      
      
        <div className="card md:w-96 lg:w-80 sm:w-80 bg-[#f6f8fa] border-2 border-gray-50 rounded-lg hover:shadow-md translate-x-6" data-aos="fade-up">
              <div className="flex flex-col justify-center items-center h-20 border-b-2 border-gray-200">
              <h2 className="text-xl font-bold pt-5 ">{make}</h2>
                <p className="flex justify-center items-center gap-2">Ratings :  <span
        {...getStarWrapperProps({
          style: {
            cursor: "pointer"
          }
        })}
      >
        {stars?.map((star, i) => (
          <span
            key={i}
            {...getStarProps(i, {
              style: {
                fontSize: "40px",
                color: "gold"
              },
              onClick: (event, ratedValue) => {
                alert(`You just rated ${ratedValue} Stars!!`);
              }
            })}
          >
            {star}
          </span>
        ))}
      </span></p>
              </div>
            <figure className=" h-[300px]">
                <img src={img} alt="Shoes" className="" />
            </figure>
            <div className="card-body justify-start items-start rounded-b-lg text-start text-yellow-500 bg-white   hover:bg-sky-100 duration-500 ">
              
                <div className="card-actions flex flex-col justify-start items-start">
                <p className="font-semibold text-start">Price :{price}$</p>
                    <Link to={`/viewDetilsforHom/${_id}`}><button className=" font-semibold flex justify-center items-center gap-5 bg-yellow-500 text-white px-5 py-1 rounded-xl" onClick={handelMessage}><span>View Detils</span> <FaArrowUpRightFromSquare /> </button></Link>
                    
                </div>
            </div>
        </div>

        
    );
};

export default SingleCard;