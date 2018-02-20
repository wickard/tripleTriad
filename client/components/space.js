import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { addCardToBoard, nextTurn, removePlayerCard, setPlayerHand, removeOpponentCard, selectCard, toggleTurn } from '../store'
import { fireDb } from '../firebase'

class Space extends Component{
  constructor(props){
    super(props)
    this.state = {
      turn: 0,
      owner: null,
      empty: true
    }
    this.setCard = this.setCard.bind(this)
    this.addCardToBoard = this.props.addCardToBoard.bind(this)
  }

  componentDidMount(){
    fireDb.ref('turn').on('value', snap =>{
      this.setState({
        turn: snap.val()
      })
    })
  }

  setCard(card){
    if (this.props.owner === undefined && this.props.selected.id){
      this.addCardToBoard(this.props.idx, card, this.state.turn % 2, this.state.turn )
    }
  }
  render(){
    return (
      <div className={this.props.owner === 0 && 'red'} id={this.props.owner === 1 && 'blue'} onClick={() => this.setCard(this.props.selected) }><img src={this.props.img} /></div>
    )
  }

}

const mapState = state => ({
  players: state.users,
  turn: state.turn,
  board: state.board,
  selected: state.selected
})

const mapProps = (dispatch, ownProps) => {
  return {
    addCardToBoard(idx, card, owner, turn){
      dispatch(addCardToBoard(idx, card, owner))
      dispatch(removePlayerCard(card))
      dispatch(selectCard({}))
      dispatch(toggleTurn())
      fireDb.ref('turn').set(++turn)
      this.setState({
        empty: false,
        owner
      })
    }
  }
}

const Container = connect(mapState, mapProps)(Space)

export default Container
