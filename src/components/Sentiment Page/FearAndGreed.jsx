import React from 'react'
import { useEffect, useState } from 'react'
import FearAndGreedHistory from './FearAndGreedHistroy'
import FearAndGreedIndex from './FearAndGreedIndex'
import ApexChart from './ApexChart'
import "./FearAndGreed.css"

const FearAndGreed = () => {

    const [todaysFGIndex, setTodaysFGIndex] = useState(0)
    const [todaysFGSentiment, setTodaysFGSentiment] = useState('')
    const [fearGreedHistory, setFearGreedHistory] = useState([])

    // fetching f&g history
    useEffect(() => {
        const fetchFearGreedHistory = async () => {
            const response = await fetch('https://api.alternative.me/fng/?limit=10')
            
            const data = await response.json()
            
            setFearGreedHistory(data.data)
            setTodaysFGIndex(data.data[0].value)
            setTodaysFGSentiment(data.data[0].value_classification)
        }
        fetchFearGreedHistory()
    }, [])



    return (
        <div>
            <h1 className='text-center'>Today's market sentiment is <span className='font-bold'>{todaysFGSentiment}</span> which may indicate a good <span className='font-bold'>{todaysFGIndex >= 50 ? 'selling' : 'buying'} opportunity.</span></h1>
            <div className='flex flex-wrap justify-around indexes'>
                <FearAndGreedIndex />
                <div className='apex'>
                {fearGreedHistory.length > 0 && (
                <ApexChart history={fearGreedHistory} />
                )}
            </div>
                <FearAndGreedHistory history={fearGreedHistory} />
            </div>
 
            <div className='centerFear'>
                <h3>The Fear and Greed index is used to measure general cryptocurrency market sentiment.</h3>
                <ul>
                    <li className='mb-2'>- A lower score, leaning towards fear, may indicate that investors are worried about which way the market will go, which could mean it is a good buying opportunity.</li>
                    <li>- A higher score, leaning towards greed, may indicate that investors are being too greedy and the market may be impending a correction, which could mean a good selling opportunity.</li>
                </ul>
            </div>
        </div>
    )
}

export default FearAndGreed