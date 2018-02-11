import React from 'react'
import { connect } from 'react-redux'

export default function OponentHand(props){
  return (
    <div className="playerhand">
        <h1 className="player"> Kmac </h1>
        <div id="card1" className="hand"><img src="images/cardback.png" /></div>
        <div id="card2" className="hand"><img src="images/cardback.png" /></div>
        <div id="card3" className="hand"><img src="images/cardback.png" /></div>
        <div id="card4" className="hand"><img src="images/cardback.png" /></div>
        <div id="card5" className="hand"><img src="images/cardback.png" /></div>
    </div>
  )
}
