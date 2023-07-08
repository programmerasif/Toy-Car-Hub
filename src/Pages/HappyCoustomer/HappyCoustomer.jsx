import img1 from '../../assets/personone.webp'
import img2 from '../../assets/personthree.jpg'
import img3 from '../../assets/persontwo.webp'
import img4 from '../../assets/personFour.jpg'

const HappyCoustomer = () => {
    return (
        <div className="px-14 mb-10">
            <h5 className="text-center mb-10">
                <span>---------------------------------</span>
                <h5 className="text-center text-4xl font-bold">Happy Coustomer</h5>
                <span>---------------------------------</span>
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-8">

                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" className='h-64'/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Anderson</h2>
                        <p>Toy-Car Hub offers an incredible variety of high-quality toy cars. The knowledgeable staff and inviting atmosphere make it a must-visit for any toy car enthusiast. Highly recommended!</p>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" className='h-64'/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Ron Wisle</h2>
                        <p>Toy-Car Hub offers an incredible variety of high-quality toy cars. The knowledgeable staff and inviting atmosphere make it a must-visit for any toy car enthusiast. Highly recommended!</p>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" className='h-64'/></figure>
                    <div className="card-body">
                        <h2 className="card-title">ST coldrige</h2>
                        <p>Toy-Car Hub offers an incredible variety of high-quality toy cars. The knowledgeable staff and inviting atmosphere make it a must-visit for any toy car enthusiast. Highly recommended!</p>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl ">
                    <figure><img src={img4} alt="Shoes" className='h-64'/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Willimson</h2>
                        <p>Toy-Car Hub offers an incredible variety of high-quality toy cars. The knowledgeable staff and inviting atmosphere make it a must-visit for any toy car enthusiast. Highly recommended!</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HappyCoustomer;