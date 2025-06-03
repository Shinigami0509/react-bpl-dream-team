import { useState } from "react";
import Players from "../Players/Players";

const PlayersHeader = ({handleChoosePlayer}) => {
    const [selected, setSelected] = useState("available");
    const selectedNumber = 0
    return (
        <div>
            <div className="mx-auto max-w-7xl mt-10 flex justify-between">
                <h3 className="text-xl font-bold pt-2">Available Players</h3>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden w-64">
                    <button onClick={() => setSelected('available')} className={`w-1/2 py-2 ${selected === "available"
                        ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                        }`}>
                        Available
                    </button>
                    <button onClick={() => setSelected('selected')} className={`w-1/2 py-2 ${selected === 'selected'
                        ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                        }`}>
                        Selected ({selectedNumber})
                    </button>
                </div>
            </div>
            <Players handleChoosePlayer={handleChoosePlayer}></Players>
        </div>
    );
};

export default PlayersHeader;