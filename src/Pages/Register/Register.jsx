import  { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useTitlt from '../../Hook/useHook';
import img from '../../assets/Login2.jpg'
import Swal from 'sweetalert2';
import Title from '../Share/Title/Title';

const Register = () => {
    useTitlt('Register Page')
    const navigate = useNavigate()
    const [err ,setErr]  = useState('')
    const {creatUsers,google} = useContext(AuthContext);
    const handelRegister = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
       
        console.log({name,email,password,photoUrl});
        console.log('clicked');

        creatUsers(email,password)
        .then((person) => {
            // Signed in 
            const user = person.user;
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Successfully Register',
                showConfirmButton: false,
                timer: 1500
              })
              setErr('')
            navigate('/')
          })
          .catch((error) => {
            const err = error.message;
            console.log(err);
            setErr('some is worng ')

          });
    }
    const handelGoogle = () =>{
        google()
        .then((result) => {
            const user = result.user;
            console.log(user);
          }).catch((error) => {
            console.log(error);
            // ...
          });
    }
    return (
    <div className='mt-28'>
      <Title text='Please Register'/>
    <div className='flex flex-col lg:flex-row mx-auto justify-center items-center rounded-lg w-full  lg:w-[80%] px-4 lg:px-0'>
            
            <div className='w-[50%]'>
           <img src={img} alt="login" className="w-[1200px]"/>

     </div>
        <div className="rounded-md w-full lg:w-[50%] mb-8 py-14 px-7 bg-gray-100 "> 
                            
     <form onSubmit={handelRegister}>

    <div className="form-control">
         <label className="label">
             <span className="label-text">Name</span>
        </label>
    <input type="text" placeholder="Name" required name='name' className="input input-bordered" />
     </div>
    <div className="form-control">
        <label className="label">
              <span className="label-text ">Email</span>
         </label>
        <input type="text" placeholder="email" required name='email' className="input input-bordered" />
    </div>
    <div className="form-control">
          <label className="label">
             <span className="label-text ">Photo URL</span>
         </label>
         <input type="text" placeholder="Photo URL" required name='photoUrl' className="input input-bordered" />
    </div>
    <div className="form-control">
         <label className="label">
             <span className="label-text ">Password</span>
          </label>
          <input type="text" placeholder="password" required name='password' className="input input-bordered" />
    </div>
    <p className='text-red-600'>{err}</p>
    <div className="form-control mt-6">
         <input type="submit" className="px-6 py-3 text-xl text-gray-700 rounded bg-gray-200 font-semibold w-full mt-5" value='Register'/>
    </div>
     <div className="form-control mt-2">
          <Link to='/login'><p className=''>Already Have An account? <span className='link link-hover text-[#0753eb]'>LOG IN</span> </p></Link>
             </div>
     </form>
    <div className="form-control mt-3" onClick={handelGoogle}>
                                
       <button className="px-6 py-3 text-xl text-gray-700 rounded bg-gray-200 font-semibold w-full mt-5 flex justify-center items-center gap-2"><span className="text-3xl"><FcGoogle /></span> <span>Google</span></button>
         </div>
                            
     </div>
 </div>
    </div>
    );
};

export default Register;