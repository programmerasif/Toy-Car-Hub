import logo from '../../../assets/unicon.png'
import Wave2 from '../Wave/Wave2';


const Footer = () => {
  return (
    <div className='relative'>
     
      <footer className="footer p-10 bg-[#ece3e1]  mx-auto py-14 ">

       <div>
       <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center mx-auto md:p-8 ms:p-0 lg:mb-32 mb-3'>
       <div>
       <div className='flex  items-center justify-start w-full'>
              <span>Toy-cars Hub</span> <img src={logo} alt="" height='65' width='65' className='' />
            </div>
          <p>Toy-cars Hub<br />Providing reliable Toy-Cars since 2016</p>
        </div>

        <div className='flex flex-col '>
          <span className="footer-title text-base">CUSTOMER SERVICE</span>
          <a className="link link-hover">Payment Methods</a>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Cancellation, Return & Refund</a> 
        </div>
        <div className='flex flex-col '>
          <span className="footer-title">Contact </span>
          <a className="link link-hover">Facbook : www.facebook/Toy-CarsHub.com</a>
          <a className="link link-hover">Email :toy-cars-hub@gmail.com</a>
          <a className="link link-hover">Phone : 017xxxxx01</a> 
        </div>

        <div>
        <span className=" footer-title text-black">About Us </span>
         <p className='link link-hover'> Welcome to Toy-Cars-Hub, a leading destination for all things fun and imaginative! Since 2016, we have been delighting children and families in the heart of Barisal with our wide selection of toys, games, and playtime essentials.</p>
        </div>

       </div>
       </div>
      </footer>
      <div className='z-10 absolute bottom-0'>
      <Wave2 />
      </div>
    </div>
  );
};

export default Footer;