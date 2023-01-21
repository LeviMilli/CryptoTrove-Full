import React from 'react'
import { useEffect, useState } from 'react'
import "./Exchanges.css"


const TopExchangesSection = () => {

    const [trendingExchanges, setTrendingExchanges] = useState([])

    useEffect(() => {

        const fetchExchanges = async () => {
            const res = await fetch('https://api.coingecko.com/api/v3/exchanges?per_page=5')
            const data = await res.json()
            setTrendingExchanges(data)
        }
        fetchExchanges()
    }, [])


    if(trendingExchanges.length < 1) {
        return
    }

    return (
        <div className="card w-96 bg-base-300 shadow-xl">
       
            <div className="card-body">
                <h2 className="card-title mb-2">💹 Top Exchanges 24hr Volume</h2>
                <div className='flex gap-4'>
                    <span className='yup'>📊</span>
                    <p><b>{trendingExchanges[0].name}</b></p>
                    <p className='text-xs text-gray-500 text-right'>{trendingExchanges[0].trade_volume_24h_btc.toFixed(2)}btc</p>
                </div>
                <div className='flex gap-4'>
                    <span className='yup'>📊</span>
                    <p><b>{trendingExchanges[1].name}</b></p>
                    <p className='text-xs text-gray-500 text-right'>{trendingExchanges[1].trade_volume_24h_btc.toFixed(2)}btc</p>
                </div>
                <div className='flex gap-4'>
                    <span className='yup'>📊</span>
                    <p><b>{trendingExchanges[2].name}</b></p>
                    <p className='text-xs text-gray-500 text-right'>{trendingExchanges[2].trade_volume_24h_btc.toFixed(2)}btc</p>
                </div>
            </div>
        </div>
    )
}

export default TopExchangesSection