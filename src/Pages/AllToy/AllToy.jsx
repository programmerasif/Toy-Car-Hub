import { useEffect, useState } from "react";
import AlldataCard from "./AlldataCard";
import Title from "../Share/Title/Title";


const AllToy = () => {
  const [cars, setCars] = useState([])
  const [searchCars, setsearchCars] = useState([])
  const shortData = cars.slice(0, 20)
  const length = cars.length
 
  const [isOn,On] = useState(false)
  const [search,isSearch] = useState(false)
  useEffect(() => {
    fetch(`https://server-forassiignment11.vercel.app/allCar`)
      .then(res => res.json())
      .then(data => setCars(data))
  }, [])
  
const handelSearch = (e) =>{
e.preventDefault()
const form = e.target;
const text = form.text.value
fetch(`https://server-forassiignment11.vercel.app/toySearcing/${text}`)
      .then(res => res.json())
      .then(data => setsearchCars(data))

      isSearch(true)
}
  return (
    <div className="mt-24">
       <Title text='All-Toys List'/>
      <div className="flex justify-center items-center gap-3 w-full mb-6">
        <form onSubmit={handelSearch} className="flex justify-center items-center gap-3">
        <div>
        <label className="relative block w-full">
  <span className="sr-only">Search</span>
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <input className="lg:w-[700px] placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 w-full sm:text-sm" placeholder="Search for Toy..." type="text" name="text"/>
        </label>
        </div>
        <input type="submit" value='Search' className="text-white px-3 py-2 rounded-md bg-yellow-500"/>
        </form>
      </div>


      <div className="overflow-x-auto w-full lg:w-[80%] mx-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th className="text-start">Image</th>
        <th className="text-start">Sellar-Name</th>
        <th className="text-start">Toy-name</th>
        <th className="text-start">Catagory</th>
        <th className="text-start">Quantity</th>
        <th className="text-start">Price</th>
        <th className="text-start">Action</th>
      </tr>
    </thead>
    <tbody className="w-full">
      {
        search == true ? searchCars.map(car => <AlldataCard cars={car} key={car._id} />) : isOn ==true? cars.map(car => <AlldataCard cars={car} key={car._id} />):shortData.map(car => <AlldataCard cars={car} key={car._id} />)
      }
    </tbody>
  </table>
</div>
 </div>
  );
};

export default AllToy;