import titleImg from '../../../assets/title.png'

const Title = ({text}) => {
    return (
        <div>
            <h5 className="text-center  mb-0 text-yellow-500 flex flex-col items-center justify-center">
                <div className="text-center text-2xl md:text-4xl font-bold">{text}</div>
                <img src={titleImg} alt="" className= 'w-[500px] '/>
            </h5>
        </div>
    );
};

export default Title;