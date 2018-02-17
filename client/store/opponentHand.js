import axios from 'axios'

////ACTION TYPE
const SET_OPPONENT_HAND = 'SET_OPPONENT_HAND'
const REMOVE_OPPONENT_CARD = 'REMOVE_OPP_CARD'

//ACTION CREATOR

export function setOpponentHand(hand) {
  const action = {type: SET_OPPONENT_HAND, hand}
  return action
}

export function removeOpponentCard(card) {
  const action = {type: REMOVE_OPPONENT_CARD, card}
  return action
}

//THUNKS

export function fetchOppHand (id) {
  return function thunk(dispatch){
    return axios.get(`api/users/${id}`)
      .then(res => res.data)
      .then(user => {
        const action = setOpponentHand(user.cards)
        dispatch(action)
      })
  }
}

//REDUCER

export default function oopHandReducer (state = [], action){
  switch (action.type){
    case SET_OPPONENT_HAND:
      return action.hand
    case REMOVE_OPPONENT_CARD:
      return state.filter(card => card.id !== action.card.id)
    default:
      return state
  }
}
