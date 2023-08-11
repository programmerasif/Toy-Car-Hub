import Navebr from '../Pages/Share/Navbr/Navebr';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';
import Wave from '../Pages/Share/Wave/Wave';

const Main = () => {
    return (
        <div className='mb-0'>
            {/* <Wave /> */}
            <div className='fixed w-full z-10 top-0'>
            <Navebr />
            </div>
            <div className='mx-auto min-h-[calc(100vh-150px)]'>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;