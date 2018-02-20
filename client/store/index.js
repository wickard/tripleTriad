import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import cards from './cards';
import users from './users';
import selected from './selected'
import board from './board'
import turn from './turn'
import playerHand from './playerHand'
import opponentHand from './opponentHand'
import player from './player'

const reducer = combineReducers({
  cards,
  users,
  selected,
  board,
  turn,
  playerHand,
  opponentHand,
  player
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;
export * from './users';
export * from './cards';
export * from './selected';
export * from './board';
export * from './turn';
export * from './playerHand';
export * from './opponentHand'
export * from './player'
