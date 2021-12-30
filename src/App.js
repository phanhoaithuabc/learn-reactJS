// import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import './App.css';
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

// hook useMemo(): giup tranh thuc hien mot logic khong can thiet trong function
// component 
function App() {
  const [count, setCount] = useState(0)

  const handleUP = useCallback(() => {
    setCount(previous => previous + 1)
  }, [])

  return (
    <div className="App">
      {/* component MountOrUnmount dc re-render nhieu lan => use memo to prevent */}
      <MountOrUnmount onIncrease={handleUP}/>
      <h2>{count}</h2>
      </div>
  );
}


export default App;
