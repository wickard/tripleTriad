import React, { Component } from 'react'
import { connect } from 'react-redux'
import Space from './space'
import { resetTurn, setPlayerHand, setOpponentHand, resetBoard, load, toggleTurn, setTurn } from '../store';
import { fireDb } from '../firebase';

class board extends Component{

  constructor(props){
    super(props)
    this.state = {
      board: [],
      turn: 0
    }
    this.reset = this.props.reset.bind(this)
  }
  componentDidMount(){
    fireDb.ref('turn').on('value', snap =>{
      this.props.nextTurn(snap.val())
      this.setState({
        turn: snap.val()
      })
    })
    fireDb.ref('board').on('value', snap => {
      const newboard = snap.val()
      const arr = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
      for (let i in newboard) {
        arr[i] = newboard[i]
      }
      this.props.loadBoard(arr)
      this.setState({
        board: arr
      })
    })
  }

  render(){
  if (this.props.turn === 9){
    var player = 0
    for (let i = 0; i < this.props.board.length; i++){
      if (this.props.board[i].owner === 0) player++
    }
  }
  return (
        <div id="board">
          {
            this.state.board.map((space, n) => <Space img={this.state.board[n].img ? this.state.board[n].img : 'https://thumbs.dreamstime.com/t/wood-metallic-texture-background-rustic-banner-blue-tones-51204566.jpg'} owner={this.state.board[n].owner} key={n} idx={n} />)
          }
          {
            this.state.turn === 9 && <banner id="gameOver"><h1>{player > 4 ? 'Player 1 wins!' : 'Player 2 wins!'}</h1> <button onClick={this.props.reset} className="btn btn-secondary btn-block">Play Again!</button></banner>
          }
        </div>
  )
}
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
  nextTurn(turn){
    dispatch(setTurn(turn))
  },
  loadBoard(sharedboard){
    dispatch(load(sharedboard))
  },
  reset(){
    dispatch(resetTurn())
    dispatch(setPlayerHand([]))
    dispatch(resetBoard())
    fireDb.ref('turn').set(0)
    fireDb.ref('player').set(0)
  }
})

const Container = connect(mapStateToProps, mapDispatch)(board)

export default Container
