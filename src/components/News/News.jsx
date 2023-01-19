import React, { useState, useContext } from 'react'
import { AppContext } from "../../context/coin.context";
import Table from 'react-bootstrap/Table';
import "./News.css"

function News() {


   const  {news, setNews}  = useContext(AppContext)

   const [index, setIndex] = useState(0);
   const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  

  return (
    <Table id='tablenews' striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>THE NEWS</th>
          <th>LINK</th>
        </tr>
      </thead>
      <tbody>
        {news.map((items => {
            return (


                <tr>
                <td>{items.Title}</td>
                <a href={items.URL}><td>MORE...</td></a>
                 </tr>




            )
        }))}
        </tbody>
    </Table>
  )
}

export default News