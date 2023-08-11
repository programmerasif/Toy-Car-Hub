import useTitlt from '../../../../Hook/useHook';
import Bannerr from '../../../Bannerr/Bannerr';
import BestSelling from '../../../BestSelling/BestSelling';
import HappyCoustomer from '../../../HappyCoustomer/HappyCoustomer';
import ShopCatagory from '../../../ShapCatagory/ShopCatagory';
import Supporting from '../../../Supporting/Supporting';

import Galary from '../Galary/Galary';


const Home = () => {
  useTitlt('Home Page')
  return (
    <>
    {/* This is banner */}
    <Bannerr />
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