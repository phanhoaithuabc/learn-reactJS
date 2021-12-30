// import logo from './logo.svg';
import { useCallback, useState } from 'react';
import './App.css';
import MountOrUnmount from './MountOrUnmount';

// function App() {
//   return (
//     <div className="App">
//       <MountOrUnmount />
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
