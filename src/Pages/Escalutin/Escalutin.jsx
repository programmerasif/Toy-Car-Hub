import yellowCar from "../../assets/yellowCar.jpg";
import './style.css'


const Escalutin = () => {
    return (
      <div className="featured-item bg-fixed text-white pt-8 my-20">
        <div className="text-center font-bold text-3xl">
          <p>Check It Out</p>
          <p>Featured Item</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-center items-center pb-20 pt-12 md:px-36">
          <div className="md:w-2/3 ">
            <img className="w-full" src={yellowCar} alt="yellowCar" />
          </div>
          <div className="md:ml-10 px-3 w-2/3">
            <p className="mb-2">Aug 20, 2029</p>
            <p className="uppercase font-bold md:text-2xl w-72 md:w-full">
              Where can i get some ?
            </p>
            <p className="mb-5 font-semibold text-xl">
              A sports car is a fast, high-performance vehicle designed for
              agility and excitement. Its known for its sleek design, powerful
              engine, and sharp handling, making it a thrilling choice for driving
              enthusiasts who enjoy speed and precision
            </p>
            <button className="btn rounded-lg bg-yellow-500 btn-outline border-0 border-b-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Escalutin;