import React from 'react'
import { connect } from 'react-redux'

export default function PlayerHand(props){
  return (
    <div className="playerhand">
        <h1 className="player"> Rant </h1>
        <div id="card1" className="hand">1</div>
        <div id="card2" className="hand">2</div>
        <div id="card3" className="hand">3</div>
        <div id="card4" className="hand">4</div>
        <div id="card5" className="hand">5</div>
    </div>
  )
}
