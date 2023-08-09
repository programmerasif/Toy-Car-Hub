import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

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
    console.log(cars);
    const {make,img,price,rating,_id} = cars
    return (
        
        <div className="card w-80 bg-[#A0CeD4]  rounded-lg shadow-md" data-aos="fade-up">
              <div className="flex flex-col justify-center items-center h-20 shadow-sm">
              <h2 className="card-title ">{make}</h2>
                <p>Ratings : {rating}</p>
              </div>
            <figure className=" h-[300px]">
                <img src={img} alt="Shoes" className="" />
            </figure>
            <div className="card-body justify-start items-start rounded-b-lg text-start bg-white  shadow-sm hover:bg-red-300 ">
              
                <div className="card-actions flex flex-col justify-start items-center">
                <p>Price :{price}</p>
                    <Link to={`/viewDetilsforHom/${_id}`}><button className="" onClick={handelMessage}>View Detils</button></Link>
                </div>
            </div>
        </div>

        
    );
};

export default SingleCard;