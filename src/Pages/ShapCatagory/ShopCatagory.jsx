import 'react-tabs/style/react-tabs.css';
import Sportscars from '../CarsPages/Cars/Sportscars';
import BusCar from '../CarsPages/Cars/BusCar';
import PrivateCar from '../CarsPages/Cars/PrivateCar';

import { useState } from "react";
import Title from '../Share/Title/Title';


const ShopCatagory = () => {
  const [totol, updateTogol] = useState(1)
  return (
    <>
    
    <Title text='Shop Catagory'/>
    <h5 className='text-center font-semibold pb-4'>Featured Products</h5>
  
    <div>
      <div className='flex justify-center items-center gap-3 md:gap-5 cursor-pointer px-3 font-semibold lg:text-2xl'>
        <h1 onClick={() => updateTogol(1)} className={totol == 1 ? "border-b-4 border-yellow-500 " : ""}>Sports Cars </h1><div className="line-container">
  <div className="line bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 h-1 w-10 lg:w-20 md:w-14 relative">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full w-6 h-6 flex justify-center items-center">
      {/* You can add content inside the circle if needed */}
    </div>
  </div>
</div>
        <h1 onClick={() => updateTogol(2)} className={totol == 2 ? "border-b-4 border-yellow-500" : ""}>Bus</h1> <div className="line-container">
  <div className="line bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 h-1 w-10 lg:w-20 md:w-14 relative">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full w-6 h-6 flex justify-center items-center">
      {/* You can add content inside the circle if needed */}
    </div>
  </div>
</div>
        <h1 onClick={() => updateTogol(3)} className={totol == 3 ? "border-b-4 border-yellow-500" : ""}>Private Cars</h1>
      </div>

      <div className="flex justify-center items-center ">
      <div className={totol == 1 ? "block" : "hidden"}>
      <Sportscars />
      </div>
      <div className={totol == 2 ? "block " : "hidden"}>
      <BusCar />
      </div>
      <div className={totol == 3 ? "block" : "hidden"}>
      <PrivateCar />
      </div>
      </div>
    </div>
    </>
  );
};

export default ShopCatagory;