import React, { Component } from 'react';
import Board from './board'
import PlayerHand from './playerhand'
import OpponentHand from './oponenthand'
import store, { fetchCards, fetchUsers } from '../store';

export default class Main extends Component {

  componentDidMount () {
    store.dispatch(fetchCards());
    store.dispatch(fetchUsers());
  }
  render() {
    return (
      <div id="container">
        <PlayerHand />
        <Board />
        <OpponentHand />
      </div>
    )
  }
}
