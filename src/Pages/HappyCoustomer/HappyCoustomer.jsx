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
        <div className="w-full mx-auto md:w-[80%] mb-20">
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
        <div className="card card-compact rounded-lg   bg-white shadow-xl mb-10 hover:translate-x-6 duration-300 ">
                   <div className='bg-[#A0CeD4] '>
                     <figure><img src={img1} alt="Person" className='h-64'/></figure>
                   </div>
                    <div className="card-body">
                        <h2 className="card-title">Anderson</h2>
                        <p>Toy-Car Hub offers an incredible variety of high-quality toy cars. The knowledgeable staff and inviting atmosphere make it a must-visit for any toy car enthusiast. Highly recommended!</p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card rounded-lg  card-compact hover:translate-x-6 duration-300 bg-white shadow-xl">
        <div className='bg-[#A0CeD4]'>
                     <figure><img src={img2} alt="Person" className='h-64'/></figure>
                   </div>
                    <div className="card-body">
                        <h2 className="card-title">Anderson</h2>
                        <p>Toy-Car Hub offers an incredible variety of high-quality toy cars. The knowledgeable staff and inviting atmosphere make it a must-visit for any toy car enthusiast. Highly recommended!</p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card rounded-lg  card-compact hover:translate-x-6 duration-300 bg-white shadow-xl">
        <div className='bg-[#A0CeD4]'>
                     <figure><img src={img3} alt="Person" className='h-64'/></figure>
                   </div>
                    <div className="card-body">
                        <h2 className="card-title">Anderson</h2>
                        <p>Toy-Car Hub offers an incredible variety of high-quality toy cars. The knowledgeable staff and inviting atmosphere make it a must-visit for any toy car enthusiast. Highly recommended!</p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact rounded-lg  hover:translate-x-6 duration-300 bg-white shadow-xl">
        <div className='bg-[#A0CeD4]'>
                     <figure><img src={img4} alt="Person" className='h-64'/></figure>
                   </div>
                    <div className="card-body">
                        <h2 className="card-title">Anderson</h2>
                        <p>Toy-Car Hub offers an incredible variety of high-quality toy cars. The knowledgeable staff and inviting atmosphere make it a must-visit for any toy car enthusiast. Highly recommended!</p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact rounded-lg  hover:translate-x-6 duration-300 bg-white shadow-xl">
        <div className='bg-[#A0CeD4]'>
                     <figure><img src={img5} alt="Person" className='h-64'/></figure>
                   </div>
                    <div className="card-body">
                        <h2 className="card-title">Anderson</h2>
                        <p>Toy-Car Hub offers an incredible variety of high-quality toy cars. The knowledgeable staff and inviting atmosphere make it a must-visit for any toy car enthusiast. Highly recommended!</p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact rounded-lg  hover:translate-x-6 duration-300 bg-white shadow-xl">
        <div className='bg-[#A0CeD4]'>
                     <figure><img src={img6} alt="Person" className='h-64'/></figure>
                   </div>
                    <div className="card-body">
                        <h2 className="card-title">Anderson</h2>
                        <p>Toy-Car Hub offers an incredible variety of high-quality toy cars. The knowledgeable staff and inviting atmosphere make it a must-visit for any toy car enthusiast. Highly recommended!</p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact rounded-lg  hover:translate-x-6 duration-300 bg-white shadow-xl">
        <div className='bg-[#A0CeD4]'>
                     <figure><img src={img7} alt="Person" className='h-64'/></figure>
                   </div>
                    <div className="card-body">
                        <h2 className="card-title">Anderson</h2>
                        <p>Toy-Car Hub offers an incredible variety of high-quality toy cars. The knowledgeable staff and inviting atmosphere make it a must-visit for any toy car enthusiast. Highly recommended!</p>
                    </div>
                </div>
        </SwiperSlide>
      
      </Swiper>
            </>
 
        </div>
    );
};

export default HappyCoustomer;