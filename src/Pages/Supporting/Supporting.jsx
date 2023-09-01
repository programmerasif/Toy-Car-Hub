import Marquee from "react-fast-marquee";
import img1 from '../../assets/sponsor/sponcer1.png'
import img2 from '../../assets/sponsor/sponcer2.png'
import img3 from '../../assets/sponsor/sponcer3.png'
import img4 from '../../assets/sponsor/sponcer4.png'
import img5 from '../../assets/sponsor/sponcer5.png'
import img6 from '../../assets/sponsor/sponcer6.png'
import img7 from '../../assets/sponsor/sponcer7.png'
import Wave from "../Share/Wave/Wave";
import Title from "../Share/Title/Title";


const Supporting = () => {
    return (
        <div className="mb-32 bg-[#ece3e1] pt-2">
            <Title  size={96} text='Our Sponser'/>
            <Marquee>
                <img src={img1} alt="" className="w-52 max-h-[50px] md:w-64 md:max-h-[90px] me-9"/>
                <img src={img2} alt="" className="w-52 h-32 md:w-72 md:h-44 md:me-9"/>
                <img src={img3} alt="" className="w-52 h-32 md:w-72 md:h-44 md:me-9"/>
                <img src={img4} alt="" className="w-52 h-32 md:w-72 md:h-44 md:me-9"/>
                <img src={img5} alt="" className="w-52 h-32 md:w-72 md:h-44 md:me-9"/>
                <img src={img6} alt="" className="w-52 h-32 md:w-72 md:h-44 md:me-9"/>
                <img src={img7} alt="" className="w-52 h-32 md:w-72 md:h-44"/>
                
            </Marquee>
            <Wave />
        </div>
    );
};

export default Supporting;