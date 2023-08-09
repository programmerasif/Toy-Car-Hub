import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Banner.css';

import baby1 from '../../../../assets/Banner/baby1.png'
import baby2 from '../../../../assets/Banner/baby2.png'
import baby3 from '../../../../assets/Banner/baby3.png'

const Banner = () => {
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
            <div  className='banner grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                <div className='flex justify-center items-end'>
                <div data-aos="fade-down">
                  <h5 className=' text-[##36454F] mt-2 text-5xl font-semibold'>Hot & Trandy</h5>
                  <h3 className='text-[##000000] mt-2 text-7xl font-bold'>Baby Kids Toy</h3>
                  <h6 className='text-xl mt-2 text-[#333333]'>Get Upto 15% Off On Your First Order</h6>
                  <button className='bg-[#FFFFFF] text-[#333333] px-8 py-4 mt-2 rounded-full font-semibold'>Shop now</button>
                </div>
                </div>
                <div> 
                    <div className='flex justify-end items-end'>
                    <img src={baby1} alt="" className='w-full mt-28'/>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='banner2 grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                <div> 
                    <div className='flex justify-end items-end'>
                    <img src={baby2} alt="" className='w-[90%]'/>
                    </div>
                </div>
                <div className='flex justify-start items-end '>
                <div data-aos="fade-down" className='mt-20'>
                  <h5 className=' text-[##36454F] mt-2 text-5xl font-semibold'>Hot & Trandy</h5>
                  <h3 className='text-[##000000] mt-2 text-7xl font-bold'>Baby Kids Toy</h3>
                  <h6 className='text-xl mt-2 text-[#333333]'>Get Upto 15% Off On Your First Order</h6>
                  <button className='bg-[#FFFFFF] text-[#333333] px-8 py-4 mt-2 rounded-full font-semibold'>Shop now</button>
                </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='banner3 grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                <div> 
                    <div className='flex justify-end items-end'>
                    <img src={baby3} alt="" className='w-full'/>
                    </div>
                </div>
                <div className='flex justify-start items-end mt-20'>
                <div data-aos="fade-down">
                  <h5 className=' text-[##36454F] mt-2 text-5xl font-semibold'>Hot & Trandy</h5>
                  <h3 className='text-[##000000] mt-2 text-7xl font-bold'>Baby Kids Toy</h3>
                  <h6 className='text-xl mt-2 text-[#333333]'>Get Upto 15% Off On Your First Order</h6>
                  <button className='bg-[#FFFFFF] text-[#333333] px-8 py-4 mt-2 rounded-full font-semibold'>Shop now</button>
                </div>
                </div>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
    </>
    );
};

export default Banner;