import axios from 'axios'

//ACTION TYPE
const GET_CARDS = 'GET_CARDS'

//ACTION CREATORS

export function getCards(cards) {
  const action = {type: GET_CARDS, cards}
  return action
}

// THUNKS

export function fetchCards () {
  return function thunk(dispatch){
    return axios.get('api/cards')
      .then(res => res.data)
      .then(cards => {
        const action = getCards(cards)
        dispatch(action)
      })
  }
}


//REDUCER

export default function cardsReducer (state = [], action){
  switch (action.type){
    case GET_CARDS:
      return action.cards
    default:
      return state
  }
}

