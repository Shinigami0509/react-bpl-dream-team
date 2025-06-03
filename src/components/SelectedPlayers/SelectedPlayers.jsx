
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({selectedPlayers }) => {

    // console.log(selectedPlayers)  
    
    
    return (
        <div className='mx-auto max-w-7xl mt-10'>
            {
                selectedPlayers.map((selectedPlayer)=><SelectedPlayer key={selectedPlayer.id} 
                selectedPlayer={selectedPlayer} 
                ></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;<h2>selected players</h2>

// [
//     {
//         "id": 3,
//         "name": "Ravi Perera",
//         "player_img": "https://randomuser.me/api/portraits/men/31.jpg",
//         "country": "Sri Lanka",
//         "batting_style": "Right-hand bat",
//         "balling_style": "Right-arm fast",
//         "price": 780000,
//         "players_role": "Bowler"
//     },
//     {
//         "id": 5,
//         "name": "Mohammad Rafi",
//         "player_img": "https://randomuser.me/api/portraits/men/51.jpg",
//         "country": "Pakistan",
//         "batting_style": "Right-hand bat",
//         "balling_style": "Right-arm offbreak",
//         "price": 920000,
//         "players_role": "Wicket-keeper"
//     }
// ]