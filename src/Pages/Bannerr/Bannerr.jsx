import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './styles.css';

import baby1 from '../../assets/Banner/baby1.png'
import baby2 from '../../assets/Banner/baby2.png'
import baby3 from '../../assets/Banner/baby3.png'

const Bannerr = () => {
    return (
        <>
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
            <div  className='styles.banner  flex flex-col md:flex-row w-full  justify-center md:justify-around items-center mt-0 md:mt-20'>
            <div data-aos="fade-down">
                  <h5 className=' text-[##36454F] mt-2  md:text-5xl font-semibold'>Hot & Trandy</h5>
                  <h3 className='text-[##000000] mt-2 text-4xl md:text-7xl font-bold'>Baby Kids Toy</h3>
                  <h6 className='text-xl mt-2 text-[#333333]'>Get Upto 15% Off On Your First Order</h6>
                  <button className='bg-[#FFFFFF] text-[#333333] px-4  md:px-8 py-2 md:py-4 rounded-full font-semibold'>Shop now</button>
                </div>
                <div className=''>
                    <img src={baby2} alt="" className='w-[800px]'/>
                    </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div  className='styles.banner flex flex-col-reverse md:flex-row w-full  justify-center md:justify-around items-center mt-0 md:mt-20'>
            <div data-aos="fade-down">
                  <h5 className=' text-[##36454F] mt-2  md:text-5xl font-semibold'>Hot & Trandy</h5>
                  <h3 className='text-[##000000] mt-2 text-4xl md:text-7xl font-bold'>Baby Kids Toy</h3>
                  <h6 className='text-xl mt-2 text-[#333333]'>Get Upto 15% Off On Your First Order</h6>
                  <button className='bg-[#FFFFFF] text-[#333333] px-4  md:px-8 py-2 md:py-4 rounded-full font-semibold'>Shop now</button>
                </div>
                <div className=''>
                    <img src={baby1} alt="" className='w-[800px]'/>
                    </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div  className='banner3 flex flex-col-reverse md:flex-row w-full  justify-center  items-center mt-0 md:mt-20'>
            <div className=''>
                    <img src={baby3} alt="" className='w-[900px]'/>
                    </div>
            
            <div data-aos="fade-down">
                  <h5 className=' text-[##36454F] mt-2  md:text-5xl font-semibold'>Hot & Trandy</h5>
                  <h3 className='text-[##000000] mt-2 text-4xl md:text-7xl font-bold'>Baby Kids Toy</h3>
                  <h6 className='text-xl mt-2 text-[#333333]'>Get Upto 15% Off On Your First Order</h6>
                  <button className='bg-[#FFFFFF] text-[#333333] px-4  md:px-8 py-2 md:py-4 rounded-full font-semibold'>Shop now</button>
                </div>
                
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Bannerr;