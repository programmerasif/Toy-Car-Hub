
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Title from '../Share/Title/Title';

const UpdatedMyToy = () => {
    const data = useLoaderData();
    const {_id,price,availableQuantity,description} = data
       


    console.log(data);
    const handelUpdate = (e) =>{
        e.preventDefault()
        const form = e.target
        const price = form.price.value;
        const Quantity = form.quantity.value;
        const description = form.descripton.value;

        const modificar = {
            price,
            Quantity,
            description
        }

        fetch(`https://server-forassiignment11.vercel.app/allCars/${_id}`,{
            method: 'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(modificar)
            
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Update Succesful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }
    return (
        <div className='mt-[5.5rem] bg-[#ece3e182]'>
        <Title  text="Update Toy Detils"/>
        <div className='flex items-start justify-center lg:p-20 w-full lg:w-[80%] mx-auto '>
            
           
            <div className='px-3 w-full'>
            <form onSubmit={handelUpdate}>

<div className="grid grid-cols-1 gap-4 w-full drop-shadow-md">
    <div className="w-full">
        <label className="label">
            <span className="label-text text-yellow-500">Price</span>
        </label>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 w-full sm:text-sm" placeholder="Price..." type='number' defaultValue={price} required name='price'/>
       
    </div>

    <div className="w-full">
        <label className="label">
            <span className="label-text text-yellow-500">Quantity</span>
        </label>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 w-full sm:text-sm" placeholder="Available quantity..." type='number'defaultValue={availableQuantity} required name='quantity'/>
    </div>
    <div className="w-full">
        <label className="label">
            <span className="label-text text-yellow-500">Description</span>
        </label>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 w-full sm:text-sm" placeholder="Description..." type='number' defaultValue={description} required name='descripton'/>
        
    </div>

</div>
<div className=" mt-6">
    <input type="submit" value='Update' className="w-full rounded-md text-xl font-semibold bg-yellow-500 text-white p-4 mt-4" />
</div>
</form>
            </div>
        </div>
        </div>
    );
};

export default UpdatedMyToy;