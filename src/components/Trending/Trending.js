import React from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/coin.context";
import Exchanges from "../Exchanges/Exchanges"
import TrendingSection from './TrendingSection';
import Spinner from 'react-bootstrap/Spinner';
import "./Trending.css"


function Trending() {
  
    const {
    trending, setTrending,
    total
  }  = useContext(AppContext)




if (!total) {
  return <div className='spinnerDiv'><Spinner className='spinner' animation="border" variant="light" /></div>


}

const commas = total.total_market_cap.usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const change24 = total.market_cap_change_percentage_24h_usd.toFixed(2)



  return (

    <div className='centerFlex'>
      
      
      <h1 className='global'>The global market cap is ${commas} USD , a change of <h1 style={{color: total['market_cap_change_percentage_24h_usd'] >  0 ? 'lime' : 'red'}}>{ change24}%</h1>in the last 24hrs</h1>
      
      <div className='secondFlex'>
      <Exchanges className="space"/>
      <TrendingSection className="space"/>

  </div>
  </div>
  )
}

export default Trending