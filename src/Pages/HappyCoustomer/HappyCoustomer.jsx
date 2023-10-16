import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';

// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '../../assets/Person1.png'
import img2 from '../../assets/Person2.png'
import img3 from '../../assets/Person3.png'
import img4 from '../../assets/Person4.png'
import img5 from '../../assets/Person5.png'
import img6 from '../../assets/Person6.png'
import img7 from '../../assets/Person7.png'
import Title from '../Share/Title/Title';

const HappyCoustomer = () => {
    return (
        <div className="w-full mx-auto xl:w-[80%] mb-20">
        <Title text='Happy Coustomer'/>
            <>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
     
        <SwiperSlide>
        <div className="text-center mb-10 hover:translate-x-6 duration-300 ">
                   <div className='bg-white flex justify-center items-center'>
                     <img src={img1} alt="Person" className='h-64 rounded-full bg-red-400 ' data-aos="zoom-in"/>
                   </div>
                    <div className=" ">
                        <h2 className="text-xl font-semibold">Anderson</h2>
                        <p>AToy-Car_Hub goes beyond selling toys; it delivers a passion-infused experience. The dedication to offering diverse options and making each visitor feel valued makes it a standout in the industry.</p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-center hover:translate-x-6 duration-300 ">
        <div className='flex justify-center items-center'>
                    <img src={img2} alt="Person" className='h-64 rounded-full bg-[#C1E1C1]' data-aos="zoom-in"/>
                   </div>
                    <div className="">
                        <h2 className="text-xl font-semibold">Alexander Ramirez</h2>
                        <p>Discover a toy car enthusiast's paradise at AToy-Car_Hub. From classic to contemporary, the range is astounding. The passion of the team adds that extra mile in ensuring satisfaction.</p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-center hover:translate-x-6 duration-300 ">
        <div className='flex justify-center items-center'>
                     <img src={img3} alt="Person" className='h-64 rounded-full bg-[#eab308]' data-aos="zoom-in"/>
                   </div>
                    <div className="">
                        <h2 className="text-xl font-semibold">William Morgan</h2>
                        <p>Toy-Car Hub offers an incredible variety of high-quality toy cars. The knowledgeable staff and inviting atmosphere make it a must-visit for any toy car enthusiast. Highly recommended!</p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-center hover:translate-x-6 duration-300 bg-white ">
        <div className='bg-white '>
                   <div className='flex justify-center items-center'>
                    <img src={img4} alt="Person" className='h-64 bg-[#AEC6CF] rounded-full' data-aos="zoom-in"/>
                   </div>
                   </div>
                    <div className="">
                        <h2 className="text-xl font-semibold">James Mitchell</h2>
                        <p>At AToy-Car_Hub, every toy car lover's dream comes true. The extensive collection spans different models and eras, backed by staff who share the same passion. An absolute gem!</p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-center hover:translate-x-6 duration-300 ">
        <div className='flex justify-center items-center'>
                     <img src={img5} alt="Person" className='h-64 rounded-full bg-red-400' data-aos="zoom-in"/>
                   </div>
                    <div className="">
                        <h2 className="text-xl font-semibold">Samuel Bennett</h2>
                        <p>Step into a world of miniature marvels at AToy-Car_Hub. The diverse range of meticulously crafted toy cars, along with the friendly experts eager to assist, ensures an enriching experience.</p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-center hover:translate-x-6 duration-300 bg-white">
        <div className='flex justify-center items-center'>
                    <img src={img6} alt="Person" className='h-64 rounded-full bg-[#C1E1C1]' data-aos="zoom-in"/>
                   </div>
                    <div className="">
                        <h2 className="text-xl font-semibold">Ethan Foster</h2>
                        <p>Looking for the perfect toy car? Your search ends at AToy-Car_Hub. With an impressive inventory and staff well-versed in the intricacies, it's a haven for enthusiasts young and old</p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-center rounded-lg hover:translate-x-6 duration-300 ">
        <div className='bg-white flex justify-center items-center'>
        <img src={img7} alt="Person" className='h-64 rounded-full bg-[#eab308]' data-aos="zoom-in"/>
                   </div>
                    <div className="">
                        <h2 className="text-xl font-semibold">Daniel Reynolds`</h2>
                        <p>Toy-Car_Hub isn't just a store – it's an immersion into toy car culture. The carefully curated selection, combined with a staff that treats customers like family, creates an unparalleled destination.</p>
                    </div>
                </div>
        </SwiperSlide>
       
      
      </Swiper>
            </>
 
        </div>
    );
};

export default HappyCoustomer;