import React from 'react'
import { connect } from 'react-redux'
import Space from './space'
import { resetTurn, setPlayerHand, setOpponentHand, resetBoard } from '../store';
import { fireDb } from '../firebase';

function board(props){
  if (props.turn === 9){
    var player = 0
    for (let i = 0; i < props.board.length; i++){
      if (props.board[i].owner === 0) player++
    }
  }
//   props.board.forEach((space, idx) =>{
//     fireDb.ref('position/' + idx).set(props.board[idx])
//   })
//   const thing = fireDb.ref('position').on('value', (snapshot) => {
//     console.log(sna)
//   })
// console.log(thing)
  return (
        <div id="board">
          {
            props.board.map((space, n) => <Space img={props.board[n].img ? props.board[n].img : 'https://thumbs.dreamstime.com/t/wood-metallic-texture-background-rustic-banner-blue-tones-51204566.jpg'} owner={props.board[n].owner} key={n} idx={n} />)
          }
          {
            props.turn === 9 && <banner id="gameOver"><h1>{player > 4 ? 'Player 1 wins!' : 'Player 2 wins!'}</h1> <button onClick={props.reset} className="btn btn-secondary btn-block">Play Again!</button></banner>
          }
        </div>
  )
}

function mapStateToProps(state){
  return {
    turn: state.turn,
    users: state.users,
    cards: state.cards,
    board: state.board
  }
}

const mapDispatch = dispatch => ({
  reset(){
    dispatch(resetTurn())
    dispatch(setPlayerHand([]))
    dispatch(setOpponentHand([]))
    dispatch(resetBoard())
  }
})


const Container = connect(mapStateToProps, mapDispatch)(board)

export default Container
