////ACTION TYPE
const TOGGLE_TURN = 'TOGGLE_TURN'
const RESET = 'RESET'
const SET_TURN = 'SET_TURN'

//ACTION CREATOR

export function setTurn(newTurn){
  const action = {type: SET_TURN, newTurn}
  return action
}

export function toggleTurn() {
  const action = {type: TOGGLE_TURN}
  return action
}

export function resetTurn(){
  const action = {type: RESET}
  return action
}

//REDUCER

export default function turnReducer (state = 0, action){
  switch (action.type){
    case SET_TURN:
      return action.newTurn
    case TOGGLE_TURN:{
      return ++state
    }
    case RESET:{
      return 0
    }
    default:
      return state
  }
}
