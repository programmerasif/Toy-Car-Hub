import Navebr from '../Pages/Share/Navbr/Navebr';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';

const Main = () => {
    return (
        <div className='mb-0'>
            <div className='fixed w-full z-10'>
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