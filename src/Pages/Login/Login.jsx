import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import useTitlt from "../../Hook/useHook";
import img from '../../assets/Login.jpg'
import Title from "../Share/Title/Title";

const Login = () => {

    const { login, google} = useContext(AuthContext)
    const [err ,setErr] = useState(' ')
        const navigate = useNavigate()
        const from = useLocation()
        useTitlt('Login Page')
        
    const handelLogin = (e) =>{
        e.preventDefault()
        const form = e.target
        
        const email = form.email.value;
        const password = form.password.value;
        
       
       

        login(email,password)
        .then((person) => {
            // Signed in 
            
            const user = person.user;
            if (user) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Successfully login',
                    showConfirmButton: false,
                    timer: 1500
                  })
                 
            }
            navigate('/')
          })
          .catch((error) => {
            const err = error.message;
            console.log(err);
            setErr('Email or Password worng')
          });
    }

    const handelGoogle = () =>{
        google()
        .then(() => {
            
            setErr(' ')
            navigate(from.state?.from || '/')
          }).catch((error) => {
            console.log(error);
            // ...
          });
    }
    return (
        <div className="mt-28">
        <Title text='Log-in Please'/>
 <div className=" flex flex-col lg:flex-row  justify-center items-end rounded-lg w-full  lg:w-[80%] px-4 lg:px-0">

        <div >
           <img src={img} alt="login" className="w-full"/>

     </div>

     <div className="rounded-md w-full lg:w-[50%] py-14 px-5 mb-6 bg-gray-100 " >
                            
          <form onSubmit={handelLogin} className=" ">


          <label className="label">
             <span className="label-text ">Email</span>
         </label>
         <input type="text" placeholder="email" required name='email' className="input input-bordered w-full rounded-md " />

            <label className="label">
                    <span className="label-text ">Password</span>
         </label>
             <input type="text" placeholder="password" required name='password' className="input input-bordered w-full rounded-md" />
             <input type="submit" value='Log-in' className="px-6 py-3 text-xl text-gray-700 rounded bg-gray-200 font-semibold w-full mt-5" />
             <div className="mt-2">
          <Link to='/register'><p className=''>Dont Have An account? <span className="link link-hover text-[#0753eb]">Register</span> </p></Link>
      </div>               
                                
     </form>
        <div className="mt-2" onClick={handelGoogle}>
                                
                <button className="px-6 py-3 text-xl text-gray-700 rounded bg-gray-200 font-semibold w-full mt-5 flex justify-center items-center gap-2"><span className="text-3xl"><FcGoogle /></span> <span>Google</span></button>
             </div>
          <p className="text-red-600">{err}</p>
    
                           
 </div>
                   
             
            </div>
        </div>
    );
};

export default Login;