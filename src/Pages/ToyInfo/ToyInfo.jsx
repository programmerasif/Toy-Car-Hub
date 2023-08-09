

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import pic from '../../assets/removeBg1.png'
import pic2 from '../../assets/removeBg2.png'
import pic3 from '../../assets/removeBg3.png'
import pic4 from '../../assets/removeBg4.png'
import './Info.css';
import Wave from '../Share/Wave/Wave';
const ToyInfo = () => {
    
    return (
        <div className='bg-[#EDD8BA]  relative bg-img'>
        
            

            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 bg-[#EDD8BA] w-full'>
                <div className='text-[#333333] flex justify-center items-center mt-16 p-3'>
                        <div>
                            <h5 className='text-3xl font-semibold'>Lamborghini, luxury sports car</h5>
                            <h4 className='border rounded-md border-[#333333] p-5 mt-2'>Product type : Sports Car</h4>
                            <h4 className='border rounded-md border-[#333333] p-5 mt-2'>Product Weight : 1.1kg</h4>
                            <h4 className='border rounded-md border-[#333333] p-5 mt-2'>Product Color : Red</h4>
                            <h5 className='font-semibold mt-2'>Price :<span className='text-4xl font-bold'>15$</span></h5>
                            <button className='bg-[#FFFFFF] text-[#333333] px-8 py-4 rounded-full font-semibold mt-5'>ADD TO CARD</button>
                        </div>
                </div>
                <div >
                    <img src={pic} alt="" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000"/>
                    <div></div>                    
                    <span className='text-3xl text-black bg-[#FFFFFF] rounded-l-lg p-3 absolute top-0 right-0 font-bold'>Hot Product</span>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                <div className='text-[#333333] flex justify-center items-center mt-16 p-3'>
                        <div>
                            <h5 className='text-3xl font-semibold'>Lamborghini, luxury sports car</h5>
                            <h4 className='border rounded-md border-[#333333] p-5 mt-2'>Product type : Sports Car</h4>
                            <h4 className='border rounded-md border-[#333333] p-5 mt-2'>Product Weight : 1.1kg</h4>
                            <h4 className='border rounded-md border-[#333333] p-5 mt-2'>Product Color : Red</h4>
                            <h5 className='font-semibold mt-2'>Price :<span className='text-4xl font-bold'>15$</span></h5>
                            <button className='bg-[#FFFFFF] text-[#333333] px-8 py-4 rounded-full font-semibold mt-5'>ADD TO CARD</button>
                        </div>
                </div>
                <div >
                    <div><img src={pic2} alt="" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000"/></div>
                    <span className='text-3xl text-black bg-[#FFFFFF] rounded-l-lg p-3 absolute top-0 right-0 font-bold'>Hot Product</span>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                <div className='text-[#333333] flex justify-center items-center mt-16 p-3'>
                        <div>
                            <h5 className='text-3xl font-semibold'>Lamborghini, luxury sports car</h5>
                            <h4 className='border rounded-md border-[#333333] p-5 mt-2'>Product type : Sports Car</h4>
                            <h4 className='border rounded-md border-[#333333] p-5 mt-2'>Product Weight : 1.1kg</h4>
                            <h4 className='border rounded-md border-[#333333] p-5 mt-2'>Product Color : Red</h4>
                            <h5 className='font-semibold mt-2'>Price :<span className='text-4xl font-bold'>15$</span></h5>
                            <button className='bg-[#FFFFFF] text-[#333333] px-8 py-4 rounded-full font-semibold mt-5'>ADD TO CARD</button>
                        </div>
                </div>
                <div >
                    <div>
                    <img src={pic3} alt="" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000"/>
                    </div>
                    <span className='text-3xl text-black bg-[#FFFFFF] rounded-l-lg p-3 absolute top-0 right-0 font-bold'>Hot Product</span>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                <div className='text-[#333333] flex justify-center items-center mt-16 p-3'>
                        <div>
                            <h5 className='text-3xl font-semibold'>Lamborghini, luxury sports car</h5>
                            <h4 className='border rounded-md border-[#333333] p-5 mt-2'>Product type : Sports Car</h4>
                            <h4 className='border rounded-md border-[#333333] p-5 mt-2'>Product Weight : 1.1kg</h4>
                            <h4 className='border rounded-md border-[#333333] p-5 mt-2'>Product Color : Red</h4>
                            <h5 className='font-semibold mt-2'>Price :<span className='text-4xl font-bold'>15$</span></h5>
                            <button className='bg-[#FFFFFF] text-[#333333] px-8 py-4 rounded-full font-semibold mt-5'>ADD TO CARD</button>
                        </div>
                </div>
                <div >
                    <div>
                    <img src={pic4} alt="" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000"/>
                    </div>
                    <span className='text-3xl text-black bg-[#FFFFFF] rounded-l-lg p-3 absolute top-0 right-0 font-bold'>Hot Product</span>
                    </div>
            </div>
        </SwiperSlide>
       
        
      </Swiper>

      <Wave />
        </div>
    );
};

export default ToyInfo;