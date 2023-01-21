import axios from "axios"
import { useState, useContext, useEffect } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Transaction.css"
import { AppContext } from "../../context/coin.context";
import Alert from 'react-bootstrap/Alert';



const TransactionForm = () => {
  
  const { user, coins, transactions, setTransaction } = useContext(AppContext)
  const [currencyName, setCurrencyName] = useState('Bitcoin')
  const [price, setPrice] = useState(0)
  const [qty, setQty] = useState(0)
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])
  const [alert, setAlert] = useState(false)
  



  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = () => {
    setAlert(false);
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    

    if (!user) {
      setError('You must be logged in')
      return
    }

    if (price == 0 || qty == 0){
     
      setError("fields cannot be 0")
    }

    if(price > 0.000000000000001 && qty > 0.0000000000000001){
    setAlert(true)

  
    

    const response = await axios.post('http://localhost:5005/api/create/transactions', {
      name : currencyName,
      price : price,
      quantity : qty,
      image: image

    })
    
    setTransaction([response.data, ...transactions])
  } 

  }

// image of each coin being stored
  const image = coins.find(coin => coin.name == currencyName) ? coins.find(coin => coin.name == currencyName).image : '';

  
 
  return (
    <Form id="formId"  onSubmit={handleSubmit}>
      <h3 className="mb-8 text-xl">New Transaction</h3>
      <label>Currency Name:</label>
      <select
        value={currencyName}
        name="name"
        className="select my-2 w-full max-w-xs"
        onChange={(e) => (setCurrencyName(e.target.value), setAlert(false))}
        >
        {coins.map((currency, i) => (
          <option
            key={i}
            >
            {currency.name}
          </option>
        ))}
      </select>

      <input 
      style={{"display" : "none"}}
      value = {image}
      type="text"
       />

      <label>Price:</label>
      <input
        type="number"
        step="0.1"
        onChange={(e) => setPrice(e.target.value)}
        name="price"
        value={price}
        min="0"
        className={emptyFields.includes('price') ? 'error' : 'bg-base-100'}
      />

      <label>Qty:</label>
      <input
      step="any"
        type="number"
        onChange={(e) => setQty(e.target.value)}
        name="quantity"
        value={qty}
        min="0"
        className=  {emptyFields.includes('qty') ? 'error' : 'bg-base-100'}
      />

      <Button className="submit" type="submit">Add Transaction</Button>
      {error && <div className="error">{error}</div>}
      <Alert className="flexAlert" variant="success" style={ {display: alert ? "flex" : "none"}}><p className="nono">{currencyName} transaction added successfully</p> <a className="finger" onClick={() => setAlert(false)}><p className="nono">x</p></a></Alert>
    </Form>
  )
}

export default TransactionForm