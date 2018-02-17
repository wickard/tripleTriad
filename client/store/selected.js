////ACTION TYPE
const SELECT_CARD = 'SELECT_CARD'

//ACTION CREATOR

export function selectCard(card) {
  const action = {type: SELECT_CARD, card}
  return action
}

//REDUCER

export default function selectReducer (state = {}, action){
  switch (action.type){
    case SELECT_CARD:
      return action.card
    default:
      return state
  }
}
