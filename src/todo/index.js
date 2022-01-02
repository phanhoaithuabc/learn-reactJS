import { useRef, useReducer } from "react"
import reducer, { initState } from './reducer'
import { addJob, setJob, deleteJob } from './actions'
import logger from './logger'

function App() {
  const inputRef = useRef()
  // co the tach phan reducer, initState ra file js rieng de de
  // quan ly
  const [state, dispatch] = useReducer(logger(reducer), initState)
  const { job, jobs } = state

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }
  return (
    <div className="App">
      <h3>Todo</h3>
      <input value={job} placeholder='Enter todo...' 
        onChange={e => dispatch(setJob(e.target.value))}
        ref={inputRef}/>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job,index) => <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>
              &times;</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App