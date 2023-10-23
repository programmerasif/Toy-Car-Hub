import Title from "../../Pages/Share/Title/Title";
import bus from "../../assets/bus.png";


const Exclusive = () => {
    return (
      <div>
        <Title text="Exclusive Item" />
        <div className="md:flex justify-center items-center">
          <div>
            <img className="md:h-[640px]" src={bus} alt="" />
          </div>
          <div className="md:w-1/2">
            <p className="mb-2 text-4xl font-bold text-yellow-500">
              Yellow Fire Truck
            </p>
            <p className="text-xl leading-9 md:w-4/5">
              A yellow fire truck toy is a small, plastic replica of a fire
              engine, often with rolling wheels and realistic details like a cab,
              ladder, and hose. It`s designed for children aged 3 and up, and some
              models may feature lights and sirens for added fun. These toys
              encourage imaginative play and help kids learn about firefighting
              and emergency services
            </p>
          </div>
        </div>
      </div>
    );
  };

export default Exclusive;