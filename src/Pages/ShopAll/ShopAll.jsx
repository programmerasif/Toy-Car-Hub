import { useEffect, useState } from "react";
import Title from "../Share/Title/Title";
import BestSellingCard from "../BestSelling/BestSellingCard";


const ShopAll = () => {

    const [toprated,setToprsit] = useState([])
    useEffect(() =>{
        fetch('https://server-forassiignment11.vercel.app/topRated')
        .then(res => res.json())
        .then(data => setToprsit(data))
    },[])
    return (
        <div className="2xl:w-[80%] w-full mx-auto mt-24"> 

            <Title text='Buy Now'/>
            <div  className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-5 py-8  mx-auto">
            {
                toprated.map(car => <BestSellingCard car={car} key={car._id}/> )
            }
            </div>
        </div>
    );
};

export default ShopAll;