import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitlt from "../../Hook/useHook";
import Title from "../Share/Title/Title";

const AddToys = () => {
    const {user} = useContext(AuthContext)
    useTitlt('Added Toy')
    const handelAdded = (e) =>{
        e.preventDefault();
        const form = e.target
        const Picture = form.picter.value;
        const CarName = form.name.value;
        const SellerName = form.SellerName.value;
        const email = form.SellerEmail.value;
        const SubCategory = form.SubCategory.value;
        const Price = form.Price.value;
        const Rating = form.rating.value;
        const Quantity = form.quantity.value;
        const description = form.description.value;
        const person = {
            pictureURL: Picture,
            name:CarName,
            email,
            sellerName:SellerName,
            subCategory:SubCategory,
            price: Price,
            rating: Rating,
            availableQuantity:Quantity,
            description
        }

        console.log(person);

        fetch(`https://server-forassiignment11.vercel.app/allCars`,{
            method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(person)
          })
          .then(res => res.json())
          .then(data => {
            if (data.acknowledged) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Car has been Added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            console.log(data)
        })
    }

    
    return (
        <div className="mt-[5.5rem] bg-[#ece3e182]"> 
        <Title text='Add New Toy'/>
            <div className="pb-12 px-5 rounded w-full lg:w-4/5 mx-auto drop-shadow-md ">

              <form onSubmit={handelAdded}>

              <div className="form-control ">
                    <label className="label ">
                        <span className="label-text text-yellow-500">Pictur URL</span>
                    </label>
                   
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 w-full sm:text-sm" placeholder="Pictur URL..." type="text" required name='picter'/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500">Car Name</span>
                    </label>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 w-full sm:text-sm" placeholder="Name..." type="text" required name='name'/>
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500">Seller Name</span>
                    </label>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 w-full sm:text-sm" placeholder="Seller Name..." type="text" required name='SellerName'/>
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500">Seller Email</span>
                    </label>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 w-full sm:text-sm" placeholder="Seller Email..." type="text" value={user?.email} required name='SellerEmail'/>
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500">Sub-category</span>
                    </label>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 w-full sm:text-sm" placeholder="Like sports, Bus,Truck etc..." type="text" required name='SubCategory'/>
                    
                </div>
               <div className="grid grid-cols-3 gap-4 ">
               <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500">Price</span>
                    </label>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 w-full sm:text-sm" placeholder="Price..." required name='Price' type="number"/>
        
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500">Rating</span>
                    </label>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 w-full sm:text-sm" placeholder="Price..." required name='rating' type="number"/>
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500">Quantity</span>
                    </label>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 w-full sm:text-sm" placeholder="Available quantity..." required name='quantity' type="number"/>
                  
                </div>
                
               </div>
               <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500">Description</span>
                    </label>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 w-full sm:text-sm" placeholder="Description..." required name='description' type="text"/>
                   
                </div>
               <div className="form-control">
                   {/* <input type="button" value="Submit"  className=" "/> */}
                   <input type="submit" className=" rounded-md text-xl font-semibold bg-yellow-500 text-white p-4 mt-4" />
                </div>
              </form>
            </div>

        </div>
    );
};

export default AddToys;