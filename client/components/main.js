import React, { Component } from 'react';
import Board from './board'
import PlayerHand from './playerhand'
import OpponentHand from './oponenthand'
import store, { fetchCards, fetchUsers, changePlayer } from '../store';
import { fireDb } from '../firebase';
import { connect } from 'react-redux'

class Main extends Component {
  constructor(props){
    super(props)

  }

  componentDidMount () {
    store.dispatch(fetchCards());
    store.dispatch(fetchUsers());
    store.dispatch(changePlayer())
  }
  render() {
    var player;
    fireDb.ref('player').once('value', snap => {
      player = snap.val()
    })
    return (
      <div id="container">
        <PlayerHand player={this.props.player} />
        <Board />
      </div>
    )
  }
}

function mapState(state){
  return {
    player: state.player
  }
}

const Container = connect(mapState)(Main)

export default Container
