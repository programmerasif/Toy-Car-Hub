import useTitlt from '../../../../Hook/useHook';

import BestSelling from '../../../BestSelling/BestSelling';
import Contact from '../../../Contact/Contact';
import HappyCoustomer from '../../../HappyCoustomer/HappyCoustomer';
import ShopCatagory from '../../../ShapCatagory/ShopCatagory';
import Supporting from '../../../Supporting/Supporting';
import ToyInfo from '../../../ToyInfo/ToyInfo';
import Galary from '../Galary/Galary';
import Banner from './Banner';

const Home = () => {
  useTitlt('Home Page')
  return (
    <>
    {/* This is banner */}
   <Banner />
    {/* This is shop catagory */}
    <div className='mt-28 mb-28'>
      <ShopCatagory />
    </div>
    {/* This is galary */}
    <div className='mt-28 mb-28'>
      <Galary />
    </div>
    
    <div className='mt-28 mb-28'>
      <BestSelling />
    </div>
    <Supporting />
    <HappyCoustomer />
    {/* <Contact /> */}
    </>
  );
};

export default Home;