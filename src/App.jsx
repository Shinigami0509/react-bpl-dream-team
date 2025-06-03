
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import PlayersHeader from './components/PlayersHeader/PlayersHeader'
import Test from './components/Test/Test'
import { ToastContainer, toast } from 'react-toastify';

function App() {

 const [coin, setCoin] = useState(0)
 const [selectedPlayers,setSelectedPlayers] = useState([])

  const handleClaimFreeCredit = (money) => {
    const newCoin = coin + money
    setCoin(newCoin)
  }

  const handleChoosePlayer = (players) => {
    let price=players.price
    // console.log(players)
    if(coin<price){
     alert("You don't have enough balance")      
    }    else{
      setCoin(coin-price)
      const newSelectedPlayers = [...selectedPlayers, players]
      setSelectedPlayers(newSelectedPlayers)      
    }

  }
  return (
    <>      
      <Header coin={coin}></Header>
      <Banner handleClaimFreeCredit={handleClaimFreeCredit}></Banner>
      <PlayersHeader handleChoosePlayer={handleChoosePlayer} selectedPlayers={selectedPlayers}></PlayersHeader>
      

    </>
  )
}

export default App
