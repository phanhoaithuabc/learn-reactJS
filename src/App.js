// import logo from './logo.svg';
import { useCallback, useState, useMemo, createContext,
  useReducer, useRef, useImparativeHandle } from 'react';
import MountOrUnmount from './MountOrUnmount';


// // useState example: count when press a button
// function App() {
//   const orders = [1, 2, 3]

//   // const total = orders.reduce((total, order) => total + order)
//   // console.log('calculate total: ',total)

//   // truyen callback vao initial state thi state lay gia tri return 
//   // cua callback lam initial state => tranh viec mat cong tinh lai 
//   // logic cua ham do chi render 1 lan
//   // const [counter, setCounter] = useState(total)

//   const [counter, setCounter] = useState(() => {
//     const total = orders.reduce((total, order) => total + order)
//     console.log('calculate total: ',total)
//     return total // initial value: render 1 lan => performance up
//   })
  
//   const handleIncrease = () => {
//     // goi nhieu lan nhung chi render 1 lan
//     setCounter(counter + 1)
//     setCounter(counter + 1)
//     // // ung dung callback de ghi nho gia tri
//     // setCounter(prevState => prevState + 1)
//     // setCounter(prevState => prevState + 1)
//   }
//   return (
//     <div className="App">
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>UP</button>
//     </div>
//   );
// }

// -------------------------------------------------------------------------- //

// // useState example: add a property to object
// function App() {
//   const [info, setInfo] = useState({
//     name: 'a',
//     age: 18,
//     address: '1'
//   })
  
//   const handleUpdate = () => {
//     // // use spread
//     // setInfo({...info, bio: 'ok'})

//     // use callbacl
//     setInfo(previous => {
//       // logic...  
//       return {...previous, bio: 'ok'}
//     })
//   }
//   return (
//     <div className="App">
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleUpdate}>UPDATE</button>


// -------------------------------------------------------------------------- //

// function App() {
//   return (
//     <div className="App">
//       <MountOrUnmount />
//     </div>
//   );
// }


// -------------------------------------------------------------------------- //

// // useState example: random gift when click a button
// const gifts = ['a', 'b', 'c']
// function App() {
//   const [gift, setGift] = useState()
  
//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index])
//   }
//   return (
//     <div className="App">
//       <h1>{gift || 'No gift yet'}</h1>
//       <button onClick={randomGift}>get gift</button>
//     </div>
//   );
// }


//-----------------------------------------------------------------------------//

// // memo() => higher order component (hoc): ghi nho lai props cua 1 component
// // de quyet dinh co render lai component do hay khong => toi uu performance
// function App() {
//   const [count, setCount] = useState(0)
//   const handleUP = () => {
//     setCount(count + 1)
//   }
//   return (
//     <div className="App">
//       {/* component MountOrUnmount dc re-render nhieu lan => use memo to prevent */}
//       <MountOrUnmount />
//       <h2>{count}</h2>
//       <button onClick={handleUP}>up</button>



// // -------------------------------------------------------------------------- //

// // useState example: two-way binding (UI change <=> data change)
// // with radio button
// const courses = [
//   {
//     id: 1,
//     name: 'a',
//   },
//   {
//     id: 2,
//     name: 'b',
//   }, 
//   {
//     id: 3,
//     name: 'c'
//   }
// ]
// function App() {
//   const [checked, setChecked] = useState(1)
  
//   const handleSubmit = () => {
//     // Call API...
//     console.log({ id: checked })
//   }
//   return (
//     <div className="App">
//       {courses.map(course => (
//         <div key={course.id}>
//           <input type="radio"
//             checked={checked === course.id}
//             onChange={() => setChecked(course.id)}/>
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }


// -------------------------------------------------------------------------- //

// // useState example: two-way binding (UI change <=> data change)
// // with checkbox button
// const courses = [
//   {
//     id: 1,
//     name: 'a',
//   },
//   {
//     id: 2,
//     name: 'b',
//   }, 
//   {
//     id: 3,
//     name: 'c'
//   }
// ]
// function App() {
//   const [checked, setChecked] = useState([])

//   const handleCheck = (id) => {
//     setChecked(previous => {
//       const isChecked = checked.includes(id)
//       if (isChecked){
//         return checked.filter(item => item !== id) // uncheck
//       }else return [...previous, id]
//     })
//   }

//   const handleSubmit = () => {
//     // Call API...
//     console.log(checked)
//   }
//   return (
//     <div className="App">
//       {courses.map(course => (
//         <div key={course.id}>
//           <input type="checkbox"
//             checked={checked.includes(course.id)}
//             onChange={() => handleCheck(course.id)}/>
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }


// -------------------------------------------------------------------------- //

// // useState example: todo list application
// function App() {

//   const [job, setJob] = useState('')
//   // ||(false, '', 0, null, nan) ??(undefined, null)
//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     return storageJobs ?? []
//   })

//   const handleSubmit = () => {
//     setJobs(previous => {
//       const newjobs = [...previous, job]
//       // save to local storage
//       const jsonJobs = JSON.stringify(newjobs)
//       localStorage.setItem('jobs', jsonJobs)
//       return newjobs
//     })
//     setJob('')
//   }
//   return (
//     <div className="App">
//       <input value={job} onChange={e => setJob(e.target.value)}/>
//       <button onClick={handleSubmit}>Submit</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//-----------------------------------------------------------------------------//

// // hook useCallback: giup tranh tao ra cac ham moi khong can thiet trong function
// // component 
// function App() {
//   const [count, setCount] = useState(0)

//   const handleUP = useCallback(() => {
//     setCount(previous => previous + 1)
//   }, [])

//   return (
//     <div className="App">
//       {/* component MountOrUnmount dc re-render nhieu lan => use memo to prevent */}
//       <MountOrUnmount onIncrease={handleUP}/>
//       <h2>{count}</h2>
//     </div>


// -------------------------------------------------------------------------- //

// // useState example: mount component example
// function App() {
//   const [show, setShow] = useState(false)
//   const [name, setName] = useState('show')
//   const handleSubmit = () => {
//     setShow(!show)
//     setName(show ? 'show' : 'hide')
//   }
//   return (
//     <div className="App">
//       <button onClick={handleSubmit}>{name}</button>
//       {show && <MountOrUnmount/>}
//       </div>
//   );
// }


//-----------------------------------------------------------------------------//

// // hook useMemo(): giup tranh thuc hien mot logic khong can thiet trong function
// // component 
// function App() {
//   const [name, setName] = useState('')
//   const [price, setPrice] = useState('')
//   const [products, setProducts] = useState([])
//   const nameRef = useRef()

//   const handleSubmit = () => {
//     setProducts([...products, {
//       name,
//       // price: Number(price)
//       // price: parseInt(price)
//       price: +price
//     }])
//     setName('')
//     setPrice('')
//     nameRef.current.focus() // focus vao input
//   }

//   // const total = products.reduce((result, product) => {
//   //   console.log("Bi tinh lai...")
//   //   return result + product.price
//   // }, 0)

//   const total = useMemo(() => {
//     const result = products.reduce((result, product) => {
//       console.log("Bi tinh lai...")
//       return result + product.price
//     }, 0)
//     return result
//   }, [products])

//   return (
//     <div className="App">
//       <input value={name} ref={nameRef}
//         placeholder='Enter name...'
//         onChange={e => setName(e.target.value)}/><br/>
//       <input value={price} placeholder='Enter price...'
//         onChange={e => setPrice(e.target.value)}/><br/>
//       <button onClick={handleSubmit}>Add</button><br/>
//       Total: {total}
//       <ul>{products.map((product,index) => <li key={index}>
//           {product.name} - {product.price}
//         </li>)}
//       </ul>
//     </div>
//   );
// }


// -------------------------------------------------------------------------- //

// useReducer: lam dc nhu useState
// useState (state don gian) vs useReducer (su dung khi state phuc tap
// state la Array, object nhieu tang, nhieu lop)

// useReducer: up and down button example
// useState: initial state (0) => action: up (state+1), down (state-1)
// useReducer: initial state (0) => action: up (state+1), down (state-1)
// => reducer => dispatch

// // initial state 
// const initState = 0

// // action
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'

// // reducer 
// const reducer = (state, action) => {
//   console.log('reducer run...')
//   switch(action){
//     case UP_ACTION: return state + 1
//     case DOWN_ACTION: return state - 1
//     default: throw new Error('Invalid action')
//   }
// }
// // dispatch

// function App() {
//   const [count, dispatch] = useReducer(reducer, initState)
  
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(UP_ACTION)}>UP</button>
//       <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
//       </div>
//   );
// }


// -------------------------------------------------------------------------- //

// // todo app with useReducer()
// // initial state 
// const initState = { job: '', jobs: [], }

// // action
// const SET_JOB = 'set_job'
// const ADD_JOB = 'add_job'
// const DELETE_JOB = 'delete_job'
// const setJob = payload => {
//   return {
//     type: SET_JOB, 
//     payload
//   }
// }
// const addJob = payload => {
//   return {
//     type: ADD_JOB, 
//     payload
//   }
// }
// const deleteJob = payload => {
//   return {
//     type: DELETE_JOB, 
//     payload
//   }
// }

// // reducer 
// const reducer = (state, action) => {
//   let newState
//   console.log('action: ', action)
//   console.log('previous state: ', state)

//   switch(action.type){
//     case SET_JOB:
//       newState = { 
//         ...state, 
//         job: action.payload, 
//       }
//       break
//       case ADD_JOB:
//         newState = { 
//           ...state, 
//           jobs: [...state.jobs, action.payload]
//         }
//         break
//       case DELETE_JOB:
//         // not working
//         // const newjobs = [...state.jobs].splice(action.payload, 1)
//         const newjobs = [...state.jobs]
//         newjobs.splice(action.payload, 1)
//         newState = {
//           ...state,
//           jobs: newjobs
//         }
//         break
//     default: throw new Error('Invalid action.')
//   }
//   console.log('new state: ', newState)
//   return newState
// }
// // dispatch

// function App() {
//   const inputRef = useRef()
//   // co the tach phan reducer, initState ra file js rieng de de
//   // quan ly
//   const [state, dispatch] = useReducer(reducer, initState)
//   const { job, jobs } = state

//   const handleSubmit = () => {
//     dispatch(addJob(job))
//     dispatch(setJob(''))
//     inputRef.current.focus()
//   }
//   return (
//     <div className="App">
//       <h3>Todo</h3>
//       <input value={job} placeholder='Enter todo...' 
//         onChange={e => dispatch(setJob(e.target.value))}
//         ref={inputRef}/>
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobs.map((job,index) => <li key={index}>
//             {job}
//             <span onClick={() => dispatch(deleteJob(index))}>
//               &times;</span>
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// }


// -------------------------------------------------------------------------- //

// // tach ung dung todo (useReducer) ra thanh component rieng
// import TodoApp from './todo'
// function App(){
//   return <TodoApp />
// }


// -------------------------------------------------------------------------- //

// // react context & useContext() hook
// // theme dark/light example
// // componentA => componentB => componentC
// // create context (tao pham vi de truyen data trong pham vi do)
// // => provider (nhan data) => consumer (nhan data tu componentC)
// import ComponentB from './ComponentB';
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'

// function App(){
//   const context = useContext(ThemeContext)
//   return(
//     <div className="App">
//       <button onClick={context.toggleTheme}>
//         Toggle theme
//       </button>
//       <ComponentB/>
//     </div>)
// }


// // -------------------------------------------------------------------------- //

// // react context & useContext() hook
// // todo app example
// import { useStore, actions } from './store';

// function App(){
//   const inputRef = useRef()
//   const [state, dispatch] = useStore()
//   const handleClick = () => {
//     dispatch(actions.addTodo(state.todoInput))
//     dispatch(actions.setTodoInput(''))
//     inputRef.current.focus()
//   }
//   return(
//     <div className="App">
//       <input value={state.todoInput} placeholder="Enter todo..."
//         onChange={e => {
//           dispatch(actions.setTodoInput(e.target.value))
//         }} ref={inputRef}/>
//       <button onClick={handleClick}>ADD</button>
//       {state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
//     </div>)
// }


// // -------------------------------------------------------------------------- //

// // useImparativeHandle() hook: bao toan tinh dong goi, tinh
// // toan ven cua du lieu
// // play video from local example
// import Video from './Video';
// function App(){
//   const videoRef = useRef()
//   const handlePlay = () => {
//     videoRef.current.play()
//   }
//   const handlePause = () => {
//     videoRef.current.pause()
//   }
//   return(
//     <div className="App">
//       <Video ref={videoRef}/>
//       <button onClick={handlePlay}>play</button>
//       <button onClick={handlePause}>pause</button>
//     </div>)
// }


// -------------------------------------------------------------------------- //

// // CSS trong du an ReactJS
// // development: npm start => css internal
// // production: npm run build => CSS external
// import './App.css';
// // thuc te dung cach nay
// import Heading from './components/Heading'
// import Paragraph from './components/Paragraph'
// import GlobalStyle from './components/GlobalStyle'
// import Button from './components/Button'

// function App(){
  
//   return(
//     <GlobalStyle>
//       <div className="App">
//         <h1 className='heading'>Using CSS</h1>
//         <Heading />
//         <Paragraph />
//         <Button /> <br/>
//         <Button primary /> <br/>
//         <Button primary disable />
//       </div>
//       { /* Su dung css global mang tinh ke thua */}
//       <div className="d-flex">
//         <div>content 1</div>
//         <div>content 2</div>
//       </div>
//     </GlobalStyle>)
// }


// // -------------------------------------------------------------------------- //

// learn react router
// Link: apply SPA page
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './react_router_pages/Home'
import ContactPage from './react_router_pages/Contact'
import NewsPage from './react_router_pages/News'

function App(){
  return(
    <div className="App">
      <h1>react router</h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/news'>News</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </div>)
}

export default App;
