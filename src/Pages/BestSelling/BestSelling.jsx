
import { useEffect, useState } from "react";

import BestSellingCard from "./BestSellingCard";
import Title from "../Share/Title/Title";
const BestSelling = () => {
    const [toprated,setToprsit] = useState([])
    useEffect(() =>{
        fetch('https://server-forassiignment11.vercel.app/topRated')
        .then(res => res.json())
        .then(data => setToprsit(data))
    },[])


   
    return (
        <div className="lg:w-[80%] w-full mx-auto"> 

            <Title text='Best Selling Toys'/>
            <div  className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-5 py-8  mx-auto">
            {
                toprated.map(car => <BestSellingCard car={car} key={car._id}/> )
            }
            </div>
        </div>
    );
};

export default BestSelling;