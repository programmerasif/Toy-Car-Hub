import Navebr from '../Pages/Share/Navbr/Navebr';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';


const Main = () => {
    return (
        <div className='mb-0'>
            {/* <Wave /> */}
            <div className='fixed w-full z-50 top-0'>
            <Navebr />
            </div>
            <div className='mx-auto min-h-[calc(100vh-680px)] lg:min-h-[calc(100vh-300px)]'>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;