import CountUp from "react-countup";
import { motion } from "framer-motion";

const SellsAndReviews = () => {
    return (
      <div className="mb-14 my-20">
        <div>
          <p className="font-bold text-center mb-8 font-sans text-2xl md:text-4xl">
            Our Sells And Reviews
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#ece3e1] hover:bg-[#ece3e1db] md:h-60 flex flex-col justify-center text-black md:w-80 px-3 md:px-0 py-4 text-center">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <p className="font-bold md:text-2xl">Sells</p>
              <p className="font-semibold md:text-3xl">
                <CountUp delay={2} end={90123} /> <span>K</span>
              </p>
              <p>Jan 1st - Feb 1st</p>
            </motion.div>
          </div>
          <div className="md:w-60 px-3 md:px-0 py-4 text-center flex flex-col justify-center items-center">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <p className="font-bold md:text-2xl">Likes</p>
              <p className="font-semibold md:text-3xl">
                <CountUp delay={2} end={10869} /> <span>K</span>
              </p>
              <p>400(22%)</p>
            </motion.div>
          </div>
          <div className="border-2 border-white bg-black text-yellow-500 md:h-60 flex flex-col justify-center md:w-80 px-3 md:px-0 py-4 text-center">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <p className="font-bold md:text-2xl">Reviews</p>
              <p className="font-semibold md:text-3xl">
                <CountUp delay={2} end={4676} /> <span>K</span>
              </p>
              <p>Jan 1st - Feb 1st</p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

export default SellsAndReviews;