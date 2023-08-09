import galary1 from '../../../../assets/galary/galary1.jpg'
import galary2 from '../../../../assets/galary/galary2.jpg'
import galary3 from '../../../../assets/galary/galary3.jpg'
import galary4 from '../../../../assets/galary/galary4.jpg'
import ToyInfo from '../../../ToyInfo/ToyInfo';
import Wave from '../../Wave/Wave';



const Galary = () => {
    return (

        <>
            <h5 className="text-center mb-10">
                <span>-------------------------</span>
                <div className="text-center text-4xl font-bold">Famous Car</div>
                <span>-------------------------</span>
            </h5>
            <Wave />
            <div className="bg-[#EDD8BA] text-[#333333] text-xl font-semibold" >

                <div className="grid grid-cols-2 md:grid-cols-4  p-10 justify-center items-center gap-8">
                    <div data-aos="fade-up">
                        <div className='flex flex-col justify-center items-center gap-2 hover:scale-[1.1] duration-200'>
                            <img src={galary1} alt="" className='rounded-full w-60' />
                            <h5 className=' link link-hover'>Lamborghini Green</h5>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <div className='flex flex-col justify-center items-center gap-2 hover:scale-[1.1] duration-300'>
                            <img src={galary2} alt="" className='rounded-full w-60' />
                            <h5 className=' link link-hover'>Lamborghini white</h5>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <div className='flex flex-col justify-center items-center gap-2 hover:scale-[1.1] duration-300'>
                            <img src={galary3} alt="" className='rounded-full w-60' />
                            <h5 className=' link link-hover'>Lamborgeni Dark-Red</h5>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <div className='flex flex-col justify-center items-center gap-2 hover:scale-[1.1] duration-300'>
                            <img src={galary4} alt="" className='rounded-full w-60' />
                            <h5 className=' link link-hover'>Lamborgeni yellow</h5>
                        </div>
                    </div>
                </div>
            </div>
            <ToyInfo />
        </>
    );
};

export default Galary;