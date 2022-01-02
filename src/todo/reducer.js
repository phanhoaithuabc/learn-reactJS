import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

// initial state 
export const initState = { job: '', jobs: [], }

// reducer 
const reducer = (state, action) => {
  let newState
  console.log('action: ', action)
  console.log('previous state: ', state)

  switch(action.type){
    case SET_JOB:
      return { 
        ...state, 
        job: action.payload, 
      }
    case ADD_JOB:
      return { 
        ...state, 
        jobs: [...state.jobs, action.payload]
      }
    case DELETE_JOB:
      // not working
      // const newjobs = [...state.jobs].splice(action.payload, 1)
      const newjobs = [...state.jobs]
      newjobs.splice(action.payload, 1)
      return {
        ...state,
        jobs: newjobs
      }
    default: throw new Error('Invalid action.')
  }
}

export default reducer