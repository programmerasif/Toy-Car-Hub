
import AwesomeSlider from 'react-awesome-slider';
import img8 from '../../assets/Banner/banner8.png'
import img10 from '../../assets/Banner/banner10.png'
import web from '../../assets/Banner/sun.png'


import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Bannerr = () => {

  useEffect(() => {
  
    AOS.init();

    AOS.refresh();
  }, []);
  const sliderStyle = {
    height: '90vh',
  };

    return (
      <>
     <div className=' '>
 <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    style={sliderStyle}
  >
    
    
    <div data-src="" style={{ backgroundColor: '#ece3e1'}}>
       <div className='flex  flex-col-reverse lg:flex-row  mt-[82px] lg:mt-[114px] justify-start lg:justify-center leading-relaxe items-center lg:py-10 py-5'>
        <div className='text-start md:w-full lg:w-[50%]'>
          <h4 className='text-5xl md:text-8xl font-bold pb-2' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">One Box toy</h4> 
          <h5 className='md:text-2xl pb-5' data-aos="fade-right" data-aos-duration="800">Flat 10% Off On order Above 12$</h5>
          <Link to='/shopAll' className='px-6 py-2 lg:px-10 lg:py-4 font-semibold bg-yellow-500 rounded-md text-white lg:text-2xl' data-aos="fade-right" data-aos-duration="1200">Shop Now</Link>
          </div>
        <div >
          <img src={img8} alt="" className=' p-10 w-[800px]' data-aos="fade-right" data-aos-duration="1200"/>
          <img src={web} alt="" className="absolute animate-pulse lg:top-28 lg:right-28 right-6 top-24 w-[100px] lg:w-[300px] " data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500"/>
          
          </div>
      </div>
      </div>

      <div data-src="" style={{ backgroundColor: '#ece3e1'}}> <div className='flex  flex-col-reverse lg:flex-row  mt-[202px] lg:mt-[114px] justify-center leading-relaxe items-center lg:py-10 py-5'>
        <div className='md:w-full lg:w-[50%]'>
          <h4 className='text-5xl md:text-8xl font-bold pb-2' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">One Box toy</h4> 
          <h5 className='md:text-2xl pb-5' data-aos="fade-right" data-aos-duration="1100">Flat 10% Off On order Above 12$</h5>
          <Link to='/shopAll' className='px-6 py-2 md:px-10 md:py-4 font-semibold bg-yellow-500 rounded-md text-white lg:text-2xl' data-aos="fade-right" data-aos-duration="1300">Shop Now</Link>
          </div>
        <div >
          <img src={img10} alt="" className=' p-10 w-[800px]' data-aos="fade-right" data-aos-duration="1500"/>
          <img src={web} alt="" className="absolute animate-pulse lg:top-28 lg:right-28 right-6 top-24 w-[100px] lg:w-[300px] " data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800"/>
          
          </div>
      </div>
      </div>
    
  </AutoplaySlider>
     </div>
      </>



      );
  };

export default Bannerr;