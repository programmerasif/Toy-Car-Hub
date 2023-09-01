import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import MyToyCards from "./MyToyCards";
import Swal from "sweetalert2";
import Title from "../Share/Title/Title";



const MyToys = () => {
const {user} = useContext(AuthContext)
const [myToy,setMytoy] = useState([])
    useEffect(() =>{
        fetch(`https://server-forassiignment11.vercel.app/allCars?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMytoy(data))
    },[user?.email])

    const handelDelete = (id) =>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              fetch(`https://server-forassiignment11.vercel.app/allCars/${id}`,{
            method:'DELETE'
    
        })
        .then(res => res.json())
        .then(data => {
            
            console.log(data)
            const remaining =  myToy.filter(toy  => toy._id !== id)
            setMytoy(remaining)
        
        })
            }
          })

        
       }
    return (
        <>

<div className="overflow-x-auto w-full lg:w-[80%] mx-auto mt-24 ">
  <Title text="My added Toys"/>
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
      <th>Picture </th>
      <th>Sellar Name</th>
      <th>Toy Name</th>
      <th>Sub-category </th>
      <th>Price</th>
      <th>Available Quantity</th>
      <th>Quantity</th>
      <th>Update button</th>
       <th>Delete button</th>
      </tr>
    </thead>
    <tbody className="w-full">
    {
                myToy.map(cars => <MyToyCards cars={cars} handelDelete={handelDelete} key={cars._id}/>)
    }
    </tbody>
  </table>
</div>
 
        </>
    );
};

export default MyToys;