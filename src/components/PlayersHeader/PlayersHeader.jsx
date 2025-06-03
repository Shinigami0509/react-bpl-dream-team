import { useState } from "react";
import Players from "../Players/Players";
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers'

const PlayersHeader = ({ handleChoosePlayer, selectedPlayers }) => {

    const [selected, setSelected] = useState("available");

    return (
        <div>
            <div className="mx-auto max-w-7xl mt-10 flex justify-between">
                <h3 className="text-xl font-bold pt-2">
                    {selected === 'available' ? (
                        `Available Players`
                ) : (
                    `Selected players (${selectedPlayers.length}/10)`
                )}</h3>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden w-64">
                    <button onClick={() => setSelected('available')} className={`w-1/2 py-2 ${selected === "available"
                        ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                        }`}>
                        Available
                    </button>
                    <button onClick={() => setSelected('selected')} className={`w-1/2 py-2 ${selected === 'selected'
                        ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                        }`}>
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>
            {selected === 'available' ? (
                <Players handleChoosePlayer={handleChoosePlayer} />
            ) : (
                <SelectedPlayers selectedPlayers={selectedPlayers} />
            )}

        </div>
    );
};

export default PlayersHeader;