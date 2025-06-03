import deletebtn from '../../assets/images/delete.png'

const SelectedPlayer = ({selectedPlayer}) => {
    const {name, player_img, batting_style} = selectedPlayer
    return (
        <div className="border border-gray-400 rounded-xl mb-4 flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <img className="m-4 w-20 rounded-xl" src={player_img} alt="" />
                <div>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <small>{batting_style}</small>
                </div>
            </div>
            <img className='w-8 h-8 mr-5' src={deletebtn} alt="" />
        </div>
    );
};

export default SelectedPlayer;