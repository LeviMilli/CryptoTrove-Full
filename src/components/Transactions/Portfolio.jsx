import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { AppContext } from "../../context/coin.context";


// components
import TransactionDetails from './TransactionDetails'
import TransactionForm from './TransactionForm'

const Portfolio = () => {
    

    const { 
        user, handleLogout, transactions, setTransaction
      }  = useContext(AppContext)

    
    const navigate = useNavigate() 
    const [currencies, setCurrencies] = useState([])
    const [profitOrLoss, setProfitOrLoss] = useState(0)
    

    useEffect(() => {


        if (user) {
            const fetchTransactions = async () => {
                const response = await axios.get('http://localhost:5005/api/transactions')
                
                setTransaction(response.data)
                
            }
            fetchTransactions()
        }
        // fetching current market data to compare against portfolio
        const fetchMarketCurrencies = async () => {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            
            setCurrencies(res.data)
        }
        fetchMarketCurrencies()
    }, [user])
    

    let portfolioBal = 0;
    if (transactions && currencies.length > 0) {
        portfolioBal = transactions.reduce((acc, trans) => acc + (currencies.find(cur => cur.name === trans.name).current_price - trans.price) * trans.quantity, 0)
    }

    //adding commas:

    //to invested
    const investedCommas = transactions.reduce((acc, c) => acc + (c.price * c.quantity), 0)
    const displayedInvested = investedCommas.toLocaleString()

    // to port balance
    const portfolioCommas = +transactions.reduce((acc, c) => acc + (c.price * c.quantity), 0) + +portfolioBal
    const displayedPortfolio = portfolioCommas.toLocaleString()



    
    return (
        <div>
            
            <div className='flex my-10 mainText justify-center justify-content-around'>
            <div className='flex-column text-center p-2 sm:p-8 bg-base-300 rounded-2xl mr-10'>
                    <span className=' text-white sm:text-2xl'>${displayedInvested} USD</span>
                    <h1 className=''>Invested Amount</h1>
                </div>
                <div className='flex-column text-center p-2 sm:p-8 bg-base-300 rounded-2xl mr-10'>
                    <span className=' orangeBitcoin sm:text-2xl'>${displayedPortfolio} USD</span>
                    <h1 className=''>Portfolio Balance</h1>
                </div>
                <div className='flex-column text-center p-2 sm:p-8 bg-base-300 rounded-2xl'>
                    <span className=' sm:text-2xl' style={{color: portfolioBal >= 0 ? "lime" : "red"}}>${portfolioBal.toLocaleString()} USD</span>
                    <h1 className=''>Total {portfolioBal >= 0 ? 'Profit' : 'Loss'}</h1>
                </div>
                
            </div>
            <div className="home flex-col lg:grid">
                <TransactionForm currencies={currencies} />
                <div className="transactions">
                    {transactions && transactions.map((transaction) => (
                        <TransactionDetails key={transaction._id} transaction={transaction} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio