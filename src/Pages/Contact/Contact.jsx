import Lottie from "lottie-react";
import anemation from "../../assets/about2.json";
import Form from "./Form";

const Contact = () => {
    return (
        <div className="mt-32 mb-10">
            <h5 className="text-center ">
                <span>---------------------------------</span>
                <div className="text-center text-4xl font-bold">Contact Us</div>
                <span>---------------------------------</span>
            </h5>
            <section className='' id="contac">
            <div className='flex flex-col md:flex-row justify-center items-end text-white px-5'>
                <div className='w-full md:w-[40%] text-4xl font-bold'>
                    <h5>Contact Info</h5>
                <p className="text-sm secondary-color">Please feel free to contact me through the mail. If you need any service send me a mail and also you can give advice to me to improve my work. </p>
               <div className=""> <Lottie animationData={anemation} loop={true} /></div>
                </div>
                <div className='w-full md:w-[60%]'>

                    <Form />
                </div>
            </div>
        </section>
        </div>
    );
};

export default Contact;