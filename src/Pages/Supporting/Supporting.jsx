import Marquee from "react-fast-marquee";
import img1 from '../../assets/nogod.png'
import img2 from '../../assets/bkash.png'
import img3 from '../../assets/download.png'
import img4 from '../../assets/quantam.png'
import img5 from '../../assets/pran.jpg'
import img6 from '../../assets/anor.jpg'

const Supporting = () => {
    return (
        <div className="mb-32">
            <h5 className="text-center mb-10">
                <span>-------------------------</span>
                <h5 className="text-center text-4xl font-bold">Our Sponser</h5>
                <span>-------------------------</span>
            </h5>
            <Marquee>
                <img src={img1} alt="" className="w-72 h-44 me-9"/>
                <img src={img2} alt="" className="w-72 h-44 me-9"/>
                <img src={img3} alt="" className="w-72 h-44 me-9"/>
                <img src={img4} alt="" className="w-72 h-44 me-9"/>
                <img src={img5} alt="" className="w-72 h-44 me-9"/>
                <img src={img6} alt="" className="w-72 h-44 "/>
                
            </Marquee>
        </div>
    );
};

export default Supporting;