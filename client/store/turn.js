////ACTION TYPE
const TOGGLE_TURN = 'TOGGLE_TURN'

//ACTION CREATOR

export function toggleTurn() {
  const action = {type: TOGGLE_TURN}
  return action
}

//REDUCER

export default function turnReducer (state = 0, action){
  switch (action.type){
    case TOGGLE_TURN:{
      if (state === 0) return 1
      return 0
    }
    default:
      return state
  }
}
