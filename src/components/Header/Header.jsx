import logo from '../../assets/images/logo.png'
import dollar from '../../assets//images/dollar.png'

const Header = ({coin}) => {
    return (
        <div className="sticky top-0 bg-white z-50 shadow">
            <div className='flex justify-between items-center p-4 mx-auto max-w-7xl mt-4 mb-4'>
            <img src={logo} alt="" />
            <div className='space-x-4 flex justify-center, items-center'>
                <a href="">Home</a>
                <a href="">Fixture</a>
                <a href="">Team</a>
                <a href="">Schedules</a>
                <button className='border rounded-lg border-black p-2 flex'>
                    {coin} Coin
                    <img className='w-4 ml-1 mt-1' src={dollar} alt="" />
                </button>
            </div>
        </div>
        </div>
    );
};

export default Header;