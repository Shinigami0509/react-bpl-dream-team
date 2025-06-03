
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import PlayersHeader from './components/PlayersHeader/PlayersHeader'


function App() {

  const [coin, setCoin] = useState(0)
  const [selectedPlayers, setSelectedPlayers] = useState([])

  const handleClaimFreeCredit = (money) => {
    const newCoin = coin + money
    setCoin(newCoin)
  }

  const handleChoosePlayer = (players) => {
    const price = players.price
    console.log()
    const alreadySelected = selectedPlayers.some(player => player.id === players.id)

    // console.log(alreadySelected)

    if (alreadySelected) {
      alert("Player already selected!!!")
      return
    }
    // console.log(players)
    if (coin < price) {
      alert("You don't have enough balance")
    } else {
      setCoin(coin - price)
      console.log(selectedPlayers.length)
      if (selectedPlayers.length < 6) {
        const newSelectedPlayers = [...selectedPlayers, players]
        setSelectedPlayers(newSelectedPlayers)
      } else{
        alert('Player limit exceded')
        return
      }
    }





  }
  return (
    <>
      <Header coin={coin}></Header>
      <Banner handleClaimFreeCredit={handleClaimFreeCredit}></Banner>
      <PlayersHeader handleChoosePlayer={handleChoosePlayer}
        selectedPlayers={selectedPlayers}
      ></PlayersHeader>


    </>
  )
}

export default App
