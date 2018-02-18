import React from 'react'
import { connect } from 'react-redux'
import { selectCard, fetchUserHand } from '../store'

function PlayerHand(props){
  return (
      <div className="playerhand" >
        <form onSubmit={props.setHand}>
            <select name="player" className="form-control">
            <option>Select Player</option>
            {
              props.players.length && props.players.map(player => <option key={player.id} value={player.id}>{player.name}</option> )
            }
            </select>
            <button type="submit" className="btn btn-primary mb-2">Select Player</button>
        </form>
      {
        props.hand.map((card, idx) => <div onClick={() => {props.turn % 2 === 0 && props.select(card) }} key={card.id} id={`card${idx}`} className={props.selected.id === card.id && props.turn % 2 === 0 ? 'hand selected' : 'hand'}><img src={card.img} /></div>)
      }
      </div>
  )
}

function mapState(state){
  return {
    turn: state.turn,
    players: state.users,
    selected: state.selected,
    hand: state.playerHand
  }
}

function mapDispatch(dispatch, ownProps){
  return {
    select(card){
      dispatch(selectCard(card))
    },
    setHand(event){
      event.preventDefault()
      const id = event.target.player.value
      dispatch(fetchUserHand(id))
    }
  }
}

const Container = connect(mapState, mapDispatch)(PlayerHand)

export default Container

