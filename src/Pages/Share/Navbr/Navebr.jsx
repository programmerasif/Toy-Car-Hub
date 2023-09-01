import { useContext} from 'react';
import logo from '../../../assets/unicon.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { NavLink } from "react-router-dom";
import { FaXmark,FaBars} from "react-icons/fa6";
import Swal from 'sweetalert2';
import { FaUser } from "react-icons/fa";
import { useState } from 'react';
const Navebr = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const handelLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Log out Succesful',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch((err) => {
        console.log(err);
      });
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <>
       
       
    <nav className="bg-white top-0 py-6 text-black shadow-lg p-4 flex md:flex-row flex-row-reverse md:justify-between items-center w-screen md:w-screen lg:w-full fixed z-20">
  <div className=" text-xl h-full  font-semibold md:mb-0">
  
  <div className=' flex gap-3 items-end justify-center w-full'>
                Toy-cars Hub <img src={logo} alt="" height='30' width='30' className=' ' />
              </div>

  </div>
  <button
    onClick={toggleMenu}
    className="md:hidden me-auto text-black text-2xl focus:outline-none"
  >
    {isOpen ? <FaXmark /> : <FaBars />}
  </button>
  <ul
    className={`justify-center items-center absolute top-4 gap-5 md:top-0 right-1 font-semibold bg-white text-gray-500 md:text-black shadow-lg md:shadow-none rounded-md z-10  p-10 md:p-0 md:bg-transparent transition-transform duration-300 md:flex  md:relative ${
      isOpen ? 'transform translate-x-0 md:translate-x-0' : 'transform translate-x-52 md:translate-x-0'
    }`}
  >
    <li><NavLink to='/' className={({ isActive,  }) =>isActive ? "text-yellow-500 border-b-4 border-yellow-500 pb-1 border-r-4 pe-1" : "" }>Home</NavLink> </li>
              <li><NavLink to='/alltoy' className={({ isActive,  }) =>isActive ? "text-yellow-500 border-b-4 border-yellow-500 pb-1 border-r-4 pe-1" : "" }>All Toys</NavLink> </li>
              
                {
                  user && <li> {user && <NavLink to='/myToys' className={({ isActive,  }) =>isActive ? "text-black" : "" }>My Toys</NavLink>} </li>
                }
              
            
                {
                  user && <li> <NavLink to='/addedToy' className={({ isActive,  }) =>isActive ? "text-yellow-500 border-b-4 border-yellow-500 pb-1 border-r-4 pe-1" : "" }>Added Toys</NavLink> </li> 
                }
              
              {
                !user?.uid ? <> <NavLink to='/login' className={({ isActive,  }) =>isActive ? "text-yellow-500 border-b-4 border-yellow-500 pb-1 border-r-4 pe-1" : "" }><li><span>LOG IN</span></li></NavLink>
                  <NavLink to='/register' className={({ isActive,  }) =>isActive ? "text-yellow-500 border-b-4 border-yellow-500 pb-1 border-r-4 pe-1" : "" }><li><span>REGISTER</span></li></NavLink></> : <> <NavLink ><li onClick={handelLogOut}><span>Log out</span></li></NavLink></>
              }
             
             {user ? <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8 ring-2">
                
              <img src={user?.photoURL} alt=""/>
                
              </div>
            </div> : <FaUser />}
    <button
    onClick={toggleMenu}
    className="md:hidden me-auto absolute top-0 p-3 rounded-md left-0 text-black focus:outline-none"
  >
    {isOpen ? <FaXmark /> : <FaBars />}
  </button>
  </ul>
</nav>

    </>
  );
};

export default Navebr;