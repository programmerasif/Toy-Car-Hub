import { Link } from "react-router-dom";


const AlldataCard = ({cars}) => {
    const {pictureURL,sellerName,name,subCategory,price,rating,availableQuantity,_id} =cars
  
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
         hello
        </td>
        <td className="text-start">
         {subCategory}
        </td>
        <td className="text-start">{price} $</td>
        <td className="text-start">
        <Link to={`/view/${_id}`}><button className="text-white px-3 py-2 rounded-md bg-yellow-500">View Detils</button></Link>
          
        </td>
      </tr>
      }
      </>
        
    );
};

export default AlldataCard;