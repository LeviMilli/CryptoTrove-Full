import { AppContext } from "../../context/coin.context";

import { useEffect, useState, useContext } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Transaction.css"


const TransactionDetails = ({transaction}) => {

  const { user, transactions, setTransaction } = useContext(AppContext)


 console.log(transaction)


  async function handleDelete(event, id){


   if(!user){
      return
    }

    await axios.delete(`http://localhost:5005/api/transactions/delete/${transaction._id}`, {withCredentials: true})

    let newTransaction = transactions.filter(trans => {
      return  trans._id !== transaction._id
    })
    setTransaction(newTransaction)
  }

  return (
<Card className="cardWidth">
<Card.Header className="portfolioHeader">{transaction.name} <img className="symbol" src={transaction.image}/></Card.Header>
<Card.Body id="bodySize">
  <Card.Title>Price:</Card.Title>
  <Card.Text>
  ${transaction.price} USD
  </Card.Text>
  <Card.Title>Qty:</Card.Title>
  <Card.Text>
  {transaction.quantity}
  </Card.Text>
  <Card.Title>Invested:</Card.Title>
  <Card.Text>
  ${transaction.quantity * transaction.price}
  </Card.Text>
  <Card.Text>
  <p><i>{formatDistanceToNow(new Date(transaction.createdAt), { addSuffix: true })}</i></p>
  </Card.Text>
  
  <Button onClick={handleDelete} variant="delete">Delete</Button>
</Card.Body>
</Card>
  )
}

export default TransactionDetails





{/* <div className="transaction-details card bg-base-300 p-8 mb-10">
<h4 className='text-accent text-2xl'>{transaction.name}</h4>
<p><strong>Price: </strong>${transaction.price} USD</p>
<p><strong>Qty: </strong>{transaction.quantity}</p>
<p>{formatDistanceToNow(new Date(transaction.createdAt), { addSuffix: true })}</p>
<span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
</div> */}