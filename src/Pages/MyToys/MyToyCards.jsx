import { Link } from "react-router-dom";

import 'aos/dist/aos.css'; // You can also use <link> for styles
import useTitlt from "../../Hook/useHook";
// ..

const MyToyCards = ({cars,handelDelete}) => {
    const {pictureURL,sellerName,name,subCategory,price,rating,availableQuantity,_id} =cars
 
   useTitlt('My Toy Page')
    return (
        <>
      {
        cars == true ? <div className=" text-4xl">No Toy Found </div> : <tr>
        <td className="text-start">
        <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={pictureURL} alt="item Image" />
              </div>
            </div>
        </td>
        <td className="text-start">
         {sellerName}
        </td>
        <td className="text-start">
         {name}
        </td>
        <td className="text-start">
        <th>
          <button className="btn btn-ghost btn-xs">{subCategory}</button>
        </th>
        </td>
        <td className="text-start">
        <th>
           <button className="btn btn-ghost btn-xs">{price} $</button>
         </th>
        </td>
        <td className="text-start">
        <th>
            <button className="btn btn-ghost btn-xs">{rating}</button>
        </th>
        </td>
        <td className="text-start">
        <th>
          <button className="btn btn-ghost btn-xs">{availableQuantity}</button>
        </th>
        </td>
        <td className="text-start">
        <th>
          <Link to={`/updatedToy/${_id}`}><button className="text-white px-3 py-2 rounded-md bg-yellow-500">Update</button></Link>
        </th>
        </td>
        <td className="text-start">
        <th>
          <button className="text-white px-3 py-2 rounded-md bg-red-500" onClick={() =>handelDelete(_id)}>Delete</button>
        </th>
        </td>
      </tr>
      }
      </>
    );
};

export default MyToyCards;