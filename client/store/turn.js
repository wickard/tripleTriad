////ACTION TYPE
const TOGGLE_TURN = 'TOGGLE_TURN'
const RESET = 'RESET'

//ACTION CREATOR

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
