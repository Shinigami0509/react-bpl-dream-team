import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({ handleChoosePlayer }) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div className="mx-auto max-w-7xl mt-4">
            <div className="grid grid-cols-3 gap-2">
                {
                    players.map((player) => <Player
                        handleChoosePlayer={handleChoosePlayer}
                        key={player.id}
                        player={player}
                    ></Player>)
                }
            </div>
        </div>
    );
};

export default Players;