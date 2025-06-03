import user from '../../assets/images/user.png'
import flag from '../../assets/images/flag.png'

const Player = ({ player, handleChoosePlayer }) => {
    const { player_img, name, country, players_role, batting_style, balling_style, price } = player
    // console.log(player)
    return (
        <div className='space-y-3 w-11/12 mx-auto border border-gray-300 rounded-lg'>
            <img className="rounded-lg mx-auto w-8/12 mt-5" src={player_img} alt="" />
            <div className='space-y-2 pl-6 pr-6'>
                <div className='flex gap-2 pt-2'>
                    <img className='w-6' src={user} alt="" />
                    <h3 className='font-bold'>{name}</h3>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-1'>
                        <img className='w-6' src={flag} alt="" />
                        <p className='opacity-70'>{country}</p>
                    </div>
                    <button className='border border-gray-400 rounded-lg p-1'>{players_role}</button>
                </div>
                <hr />
                <p className='font-bold'>Rating</p>
                <div className='space-y-2 pb-5'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>{batting_style}</p>
                        <p className='opacity-70'>{balling_style}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-bold pt-1'>Price: ${price}</p>
                        <button onClick={() => handleChoosePlayer(price)} className='border border-gray-400 p-1 rounded-lg'>Choose Player</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Player;