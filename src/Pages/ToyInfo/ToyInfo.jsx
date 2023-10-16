

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
const ToyInfo = () => {

    return (
        <div className=' bg-[#ece3e1] relative bg-img'>



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
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 bg-[#ece3e1] w-full'>
                        <div className='text-[#333333] flex justify-center items-center  p-3'>
                            <div>
                                <h5 className='text-3xl font-semibold'>Lamborghini, luxury sports car</h5>
                                <h4 className='border-2 rounded-md border-white p-5 mt-2 shadow-xl'>Product type : Sports Car</h4>
                                <h4 className='border-2 rounded-md border-white p-5 mt-2 shadow-xl'>Product Weight : 1.1kg</h4>
                                <h4 className='border-2 rounded-md border-white p-5 mt-2 shadow-xl'>Product Color : Red</h4>
                                <h5 className='font-semibold mt-2'>Price :<span className='text-4xl font-bold text-yellow-500 '>15$</span></h5>
                                <button className='bg-[#FFFFFF] text-[#333333] px-8 py-4 rounded-full font-semibold mt-5'>ADD TO CARD</button>
                            </div>
                        </div>
                        <div >
                            <img src={pic} alt="" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" />
                            <div></div>
                            <span className='text-3xl bg-[#FFFFFF] rounded-l-lg p-3 absolute top-0 right-0 font-bold text-yellow-500 '><span className='animate-pulse'>Hot Product</span></span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 bg-[#ece3e1]'>
                        <div className='flex justify-end items-center'>
                            <div><img src={pic2} alt="" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" /></div>
                            <span className='text-3xl text-yellow-500 bg-[#FFFFFF] rounded-l-lg p-3 absolute top-0 left-0 font-bold'><span className='animate-pulse'>Hot Product</span></span>
                        </div>

                        <div className='text-[#333333] flex justify-center items-center mt-16 p-3'>
                            <div>
                                <h5 className='text-3xl font-semibold'>Lamborghini, luxury sports car</h5>
                                <h4 className='border-2 rounded-md border-white p-5 mt-2 shadow-xl'>Product type : Sports Car</h4>
                                <h4 className='border-2 rounded-md border-white p-5 mt-2 shadow-xl'>Product Weight : 1.1kg</h4>
                                <h4 className='border-2 rounded-md border-white p-5 mt-2 shadow-xl'>Product Color : Red</h4>
                                <h5 className='font-semibold mt-2'>Price :<span className='text-4xl font-bold text-yellow-500'>15$</span></h5>
                                <button className='bg-[#FFFFFF] text-[#333333] px-8 py-4 rounded-full font-semibold mt-5'>ADD TO CARD</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 bg-[#ece3e1]'>
                        <div className='text-[#333333] flex justify-center items-center mt-16 p-3'>
                            <div>
                                <h5 className='text-3xl font-semibold'>Lamborghini, luxury sports car</h5>
                                <h4 className='border-2 rounded-md border-white p-5 mt-2 shadow-xl'>Product type : Sports Car</h4>
                                <h4 className='border-2 rounded-md border-white p-5 mt-2 shadow-xl'>Product Weight : 1.1kg</h4>
                                <h4 className='border-2 rounded-md border-white p-5 mt-2 shadow-xl'>Product Color : Red</h4>
                                <h5 className='font-semibold mt-2'>Price :<span className='text-4xl font-bold text-yellow-500'>15$</span></h5>
                                <button className='bg-[#FFFFFF] text-[#333333] px-8 py-4 rounded-full font-semibold mt-5'>ADD TO CARD</button>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img src={pic3} alt="" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" />
                            </div>
                            <span className='text-3xl text-yellow-500 bg-[#FFFFFF] rounded-l-lg p-3 absolute top-0 right-0 font-bold '><span className='animate-pulse'>Hot Product</span></span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 bg-[#ece3e1]'>
                        
                        <div >
                            <div className='flex justify-end items-center'>
                                <img src={pic4} alt="" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" />
                            </div>
                            <span className='text-3xl text-yellow-500 bg-[#FFFFFF] rounded-l-lg p-3 absolute top-0 left-0 font-bold '><span className='animate-pulse'>Hot Product</span></span>
                        </div>

                        <div className='text-[#333333] flex justify-center items-center mt-16 p-3'>
                            <div>
                                <h5 className='text-3xl font-semibold'>Lamborghini, luxury sports car</h5>
                                <h4 className='border-2 rounded-md border-white p-5 mt-2 shadow-xl'>Product type : Sports Car</h4>
                                <h4 className='border-2 rounded-md border-white p-5 mt-2 shadow-xl'>Product Weight : 1.1kg</h4>
                                <h4 className='border-2 rounded-md border-white p-5 mt-2 shadow-xl'>Product Color : Red</h4>
                                <h5 className='font-semibold mt-2'>Price :<span className='text-4xl font-bold text-yellow-500'>15$</span></h5>
                                <button className='bg-[#FFFFFF] text-[#333333] px-8 py-4 rounded-full font-semibold mt-5'>ADD TO CARD</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>

            
        </div>
    );
};

export default ToyInfo;