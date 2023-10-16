import Lottie from "lottie-react";
import carLottie from "../../assets/soprtsCar.json";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
 
    return (
      <div className="md:w-3/4 mx-auto h-[60vh]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-yellow-500 mx-6 md:w-2/3 md:mx-0">
            <p className="md:text-5xl text-xl md:mb-4 mb-2 md:ml-16 font-bold mt-16 md:mt-0">
              <Typewriter
                words={["About", "Toy Car Hub"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <p className="font-bold md:leading-9 md:ml-16 text-black md:text-2xl">
              We provide exceptional customer service for toy car sales by
              offering expert guidance, ensuring product quality, and leaving
              customers with a delightful shopping experience
            </p>
          </div>
          <div className="">
            <Lottie
              animationData={carLottie}
              height={400}
              width={400}
              loop={true} 
            />
          </div>
        </div>
      </div>
    );
  };
export default About;