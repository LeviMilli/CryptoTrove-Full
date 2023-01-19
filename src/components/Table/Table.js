import { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { AppContext } from '../../context/coin.context';
import "./Table.css"

function DarkExample() {

    const {coins, setCoins} = useContext(AppContext)
    const [sortedAscending, setSortedAscending] = useState({ col: "", asc: false })
    

    
    const handleSort = (e) => {
      let sortedCurrencies
      switch (e.target.id) {
          case 'currency':
              sortedCurrencies = coins.concat().sort((a, b) => {
                  return (a.name).localeCompare(b.name);
              })
              break;
          default:
              sortedCurrencies = coins.concat().sort((a, b) => {
                  return a[e.target.id] - b[e.target.id]
              })
              break;
      }

      if (e.target.id === sortedAscending.col) {
          if (!sortedAscending.asc) {
              setSortedAscending({ ...sortedAscending, asc: true })
              setCoins(sortedCurrencies)
          } else {
              setSortedAscending({ ...sortedAscending, asc: false })
              setCoins(sortedCurrencies.reverse())
          }
      } else {
          setSortedAscending({ col: e.target.id, asc: true })
          setCoins(sortedCurrencies)
      }
  }


// Search function for crypto list



// return (
//   <div>
//     <input type="text" onChange={(e) => setSearchText(e.target.value)} />
//     <h2>Recommendations:</h2>
//     <ul>
//       {recommendations.map((rec, index) => (
//         <li key={index}>{rec}</li>
//       ))}
//     </ul>
//   </div>
// );






  return (

    <div id='center' className='scrolly'>
        
    <Table striped bordered hover variant="dark" id='bigTable' className='data'>
  
    
      <thead>
      <tr>
                <th>Sym</th>
                <th onClick={handleSort} id="currency" className="cursor-pointer hover:text-white"><span className='orangeBitcoin'>{sortedAscending.col === "currency" ? sortedAscending.asc ? '🡇' : "🡅" : "⇵"}</span> Currency</th>
                <th onClick={handleSort} id="current_price" className="cursor-pointer hover:text-white"><span className='orangeBitcoin'>{sortedAscending.col === "current_price" ? sortedAscending.asc ? '🡇' : "🡅" : "⇵"}</span> Price</th>
                <th onClick={handleSort} id="market_cap" className="cursor-pointer hover:text-white"><span className='orangeBitcoin'>{sortedAscending.col === "market_cap" ? sortedAscending.asc ? '🡇' : "🡅" : "⇵"}</span> Market Cap (USD)</th>
                <th onClick={handleSort} id="circulating_supply" className="cursor-pointer hover:text-white"><span className='orangeBitcoin'>{sortedAscending.col === "circulating_supply" ? sortedAscending.asc ? '🡇' : "🡅" : "⇵"}</span> Circulating Supply</th>
                <th onClick={handleSort} id="total_volume" className="cursor-pointer hover:text-white"><span className='orangeBitcoin'>{sortedAscending.col === "total_volume" ? sortedAscending.asc ? '🡇' : "🡅" : "⇵"}</span> 24h Volume (USD)</th>
                <th onClick={handleSort} id="price_change_percentage_24h" className="cursor-pointer hover:text-white"><span className='orangeBitcoin'>{sortedAscending.col === "price_change_percentage_24h" ? sortedAscending.asc ? '🡇' : "🡅" : "⇵"}</span> 24h %</th>
       
         </tr>
                        
      </thead>
      {coins.map((coins) => {
        return (
          <tbody>
          <tr>
            <td><img className="symbol" src={coins.image} alt="" /></td>
            <td>{coins.name}</td>
            <td>${coins.current_price <= 1 ? coins.current_price.toFixed(7) : coins.current_price.toLocaleString()}</td>
            <td>${coins.market_cap.toLocaleString()}</td>
            <td>{coins.circulating_supply.toLocaleString()}</td>
            <td>${coins.total_volume.toLocaleString()}</td>
            <td className="whitespace-pre-wrap" style={{ color: coins['price_change_percentage_24h'] > 0 ? 'lime' : 'red' }}>{coins.price_change_percentage_24h >= 0 ? '🔥' : '❄'} {Math.abs(coins.price_change_percentage_24h.toFixed(2))}%</td>
    </tr>
          
            
          

          </tbody>
        )
})}

    </Table>
    </div>

  );
}

export default DarkExample;