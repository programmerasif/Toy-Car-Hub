import "./style.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { BsFillClockFill, BsTelephoneFill } from "react-icons/bs";
import Title from "../../Pages/Share/Title/Title";

const Support = () => {
    return (
      <div className="mb-10">
        <Title text="Our Support" />
        <div className="support-background bg-fixed py-20 flex gap-56 justify-center items-center">
          <div className="text-white font-semibold flex flex-col gap-8 md:text-2xl">
            <p className="md:flex gap-2 items-center">
              <span className="text-white">
                <FaLocationDot size={20} />
              </span>{" "}
              <span>Barishal, Bangladesh</span>
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-white">
                <FaMessage size={20} />
              </span>{" "}
              <span>asifKhan234@gmail.com</span>
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-white">
                <BsTelephoneFill size={20} />
              </span>{" "}
              <span>01721-520848</span>
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-white">
                <BsFillClockFill size={20} />
              </span>{" "}
              <span>Mon - Fri 8.00 Am to 6.00 Pm</span>
            </p>
          </div>
          <div className="md:w-1/4 bg-white rounded-lg">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="level-text">Your Message</span>
                </label>
                <input
                  type="text"
                  className="textarea textarea-bordered textarea-lg w-full"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  

export default Support;