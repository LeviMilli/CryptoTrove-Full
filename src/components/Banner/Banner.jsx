import React from 'react'
import "./Banner.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Banner() {



  return (
    <div id='wrapper'>

        
    <section id="banner" class="major">
    <div class="inner">
        <header class="major">
            <h1>Welcome to CryptoTrove</h1>
        </header>
        <div class="content">
            <p>All your crypto information and tracking in one place</p>
            <ul class="actions">
                <li><a href="#one" class="button next scrolly">Get Started</a></li>
            </ul>
        </div>
    </div>
</section>
<div id="main">


    <section id="one" class="tiles">
        <article>
            <span class="image" >
                <img src="./chart.jpg" alt="" />
            </span>
            <header class="major">
                <a href="#center" class="link"><h3>Live Crypto Prices</h3></a>
                <p>Sort by 24hr change, market cap, or whatever else fits your strategy</p>
            </header>
        </article>
        <article>
            <span class="image">
                <img src="images/pic02.jpg" alt="" />
            </span>
            <header class="major">
                <h3><a href="/signin" class="link">Live Demo</a></h3>
                <p>Click here to start your portfolio</p>
            </header>
        </article>

    </section>
</div>
</div>
  )
}

export default Banner