import useTitlt from '../../../../Hook/useHook';
import car3 from '../../../../assets/carr1.jpg'
import car2 from '../../../../assets/carr2.jpg'
import car1 from '../../../../assets/carr3.jpg'
import BestSelling from '../../../BestSelling/BestSelling';
import Contact from '../../../Contact/Contact';
import HappyCoustomer from '../../../HappyCoustomer/HappyCoustomer';
import ShopCatagory from '../../../ShapCatagory/ShopCatagory';
import Supporting from '../../../Supporting/Supporting';
import ToyInfo from '../../../ToyInfo/ToyInfo';
import Galary from '../Galary/Galary';

const Home = () => {
  useTitlt('Home Page')
  return (
    <>
    {/* This is banner */}
    <div className=' grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
      
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={car1} className="w-full " />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
            
          </div>

        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={car2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>

          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={car3} className="w-full " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
            
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center h-full '>
        <div className='md:py-28 py-10 bg-[#F1F6F9] w-full p-12 h-full'>
          <h3 className='md:text-6xl sm:text-4xl text-black font-bold'><span className=''>Discover joy</span> <br />  <span className='text-[#394867]'>&</span> wonder at our <br />magical toy store!</h3>

          <button className="btn mt-7 bg-[#394867]">SHOP NOW</button>
        </div>

      </div>
    </div>
    {/* This is galary */}
    <div className='mt-28 mb-28'>
      <Galary />
    </div>
    {/* This is shop catagory */}
    <div className='mt-28 mb-28'>
      <ShopCatagory />
    </div>
    <div className='mt-28 mb-28'>
      <ToyInfo />
    </div>
    <div className='mt-28 mb-28'>
      <BestSelling />
    </div>
    <Supporting />
    <HappyCoustomer />
    <Contact />
    </>
  );
};

export default Home;