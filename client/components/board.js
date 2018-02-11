import React from 'react'
import { connect } from 'react-redux'

function board(props){
  console.log(props)
  return (
        <div id="board">
          <div id="1"><img src="images/cardback.png" /></div>
          <div id="2">2</div>
          <div id="3">3</div>
          <div id="4">4</div>
          <div id="5">5</div>
          <div id="6">6</div>
          <div id="7">7</div>
          <div id="8">8</div>
          <div id="9">9</div>
        </div>
  )
}

function mapStateToProps(state){
  return {
    users: state.users,
    cards: state.cards
  }
}

const Container = connect(mapStateToProps)(board)

export default Container
