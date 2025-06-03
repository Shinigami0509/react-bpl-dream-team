
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import PlayersHeader from './components/PlayersHeader/PlayersHeader'

function App() {

 const [coin, setCoin] = useState(0)

  const handleClaimFreeCredit = (money) => {
    const newCoin = coin + money
    setCoin(newCoin)
  }

  const handleChoosePlayer = (price) => {
    console.log(price)
    if(coin<price){
      alert("You don't have enough balance")
    }    else{
      console.group('Player is sold')
      setCoin(coin-price)
    }
  }
  return (
    <>      
      <Header coin={coin}></Header>
      <Banner handleClaimFreeCredit={handleClaimFreeCredit}></Banner>
      <PlayersHeader handleChoosePlayer={handleChoosePlayer}></PlayersHeader>


    </>
  )
}

export default App
