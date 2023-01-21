import React from "react";
import { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { AppContext } from "./context/coin.context";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Table from "./components/Table/Table"
import Trending from "./components/Trending/Trending";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import News from "./components/News/News"
import TransactionForm from "./components/Transactions/TransactionForm";
import Portfolio from "./components/Transactions/Portfolio";



function App() {
  

//CONTEXT IMPORT
  const { 
    coins, setCoins,
    loading, setLoading,
    trending, setTrending,
    total, setTotal,
    user, setUser,
    news, setNews
  }  = useContext(AppContext)


  const [error, setError] = useState(null)


// SET DATA FOR 
// COIN
// TRENDING
// MARKET SENTIMENT
// NFTS



  useEffect(() => {
    async function fetchCurrencyData(){

      try {
        setLoading(true)
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        console.log("rendering")
        // const trend = await axios.get('https://api.coingecko.com/api/v3/search/trending');

        const totalCap = await axios.get('https://api.coingecko.com/api/v3/global')


        // NEWS API
        const options = {
          method: 'GET',
          url: 'https://crypto-update-live.p.rapidapi.com/news',
          headers: {
            'X-RapidAPI-Key': '8784912ff7msh059048cc966813ap157d9fjsnfd45ffdcab31',
            'X-RapidAPI-Host': 'crypto-update-live.p.rapidapi.com'
          }
        };

        const newsResults = await axios.request(options)



        // setTrending(trend.data)

        setNews(newsResults.data)
    
        setTotal(totalCap.data.data)
       
        setCoins(res.data)

        setLoading(false)
        
      }
      catch(err){
        setLoading(false)
      }
    }


     fetchCurrencyData()
}, [])











if (loading) {
  return <h1>loading</h1>
}

console.log(coins)




  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={[
          <Banner/>,
          <Trending/>,
          <Table/>
        ]}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
