import bannerImg from '../../assets/images/banner-main.png'
import bg from '../../assets/images/bg-shadow.png'

const Banner = ({handleClaimFreeCredit}) => {
    return (
        <div className='bg-black mx-auto max-w-7xl flex flex-col justify-center items-center rounded-xl text-center py-16 space-y-4' style={{backgroundImage: `url(${bg})`}}>
            <img className='w-52' src={bannerImg} alt="" />
            <h1 className='text-white text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-white text-xl'>Beyond Boundaries Beyond Limits</p>
            <button onClick={()=>handleClaimFreeCredit(500000)} className='bg-green-600 p-4 rounded-lg'>Claim Free Credit</button>
        </div>
    );
};

export default Banner;