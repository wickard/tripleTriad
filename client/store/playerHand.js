import axios from 'axios'

////ACTION TYPE
const SET_PLAYER_HAND = 'SET_PLAYER_HAND'
const REMOVE_PLAYER_CARD = 'REMOVE_CARD'

//ACTION CREATOR

export function setPlayerHand(hand) {
  const action = {type: SET_PLAYER_HAND, hand}
  return action
}

export function removePlayerCard(card) {
  const action = {type: REMOVE_PLAYER_CARD, card}
  return action
}

//THUNKS

export function fetchUserHand (id) {
  return function thunk(dispatch){
    return axios.get(`api/users/${id}`)
      .then(res => res.data)
      .then(user => {
        const action = setPlayerHand(user.cards)
        dispatch(action)
      })
  }
}

//REDUCER

export default function handReducer (state = [], action){
  switch (action.type){
    case SET_PLAYER_HAND:
      return action.hand
    case REMOVE_PLAYER_CARD:
      return state.filter(card => card.id !== action.card.id)
    default:
      return state
  }
}
