import { useState, useEffect } from "react"
import axios from 'axios'


const TrendingSection = () => {

    const [trendingCurrencies, setTrendingCurrencies] = useState([])

    useEffect(() => {
        const fetchTrendingCurrencies = async () => {
            const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')
            setTrendingCurrencies(res.data.coins)
        }
        fetchTrendingCurrencies()
    }, [])

    if (trendingCurrencies.length < 1) {
        return
    }


    return (
        <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body">
                <h2 className="card-title mb-2">🔥 Trending Currencies</h2>
                <div className='flex gap-4'>
                    <span className=''>🚀</span>
                    <p><b>{trendingCurrencies[0].item.name}</b></p>
                    <p className='text-xs text-gray-500 text-right'>{trendingCurrencies[0].item.symbol}</p>
                </div>
                <div className='flex gap-4'>
                    <span className=''>🚀</span>
                    <p><b>{trendingCurrencies[1].item.name}</b></p>
                    <p className='text-xs text-gray-500 text-right'>{trendingCurrencies[1].item.symbol}</p>
                </div>
                <div className='flex gap-4'>
                    <span className=''>🚀</span>
                    <p><b>{trendingCurrencies[2].item.name}</b></p>
                    <p className='text-xs text-gray-500 text-right'>{trendingCurrencies[2].item.symbol}</p>
                </div>
            </div>
        </div>
    )
}

export default TrendingSection