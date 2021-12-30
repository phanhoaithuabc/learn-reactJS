import { useEffect, useLayoutEffect, useRef, useState } from "react";


// // unsubscribe de tranh ro ri bo nho
// const lessons = [
//     {
//         id: 1,
//         name: 'Java',
//     },
//     {
//         id: 2,
//         name: 'JavaScript',
//     },
//     {
//         id: 3,
//         name: 'HTML/CSS',
//     },
// ]
// function MountOrUnmount() {
//     const [lessonId, setLessonId] = useState(1)
    
//     useEffect(() => {
//         const handleComment = ({ detail }) => {
//             console.log(detail)
//         }
//         window.addEventListener(`lesson-${lessonId}`, handleComment)
//         return () => {
//             window.removeEventListener(`lesson-${lessonId}`, handleComment)
//         }
//     }, [lessonId])

//     return <div>
//         <ul>
//             {lessons.map(lesson => <li key={lesson.id}
//                 style={{color: lessonId === lesson.id ? 'red':'#333'}}
//                 onClick={() => setLessonId(lesson.id)}>
//                 {lesson.name}
//             </li>)}
//         </ul>
//     </div>
// }


// ---------------------------------------------------------------------- //


// //    useEffect              vs                 useLayoutEffect
// // 1. Cap nhat lai state                     Cap nhat lai state
// // 2. Cap nhat DOM (mutated)                 Cap nhat DOM (mutated)
// // 3. Render lai UI                          Goi cleanup neu [dependences] change (sync)
// // 4. Goi cleanup neu [dependences] change   Goi useLayoutEffect callback (sync)
// // 5. Goi useEffect callback                 Render lai UI
// function MountOrUnmount() {
//     const [count, setCount] = useState(0)
    
//     // useEffect(() => {
//     //     if (count > 3) setCount(0)
//     // }, [count])

//     useLayoutEffect(() => {
//         if (count > 3) setCount(0)
//     }, [count])

//     const handleClick = () => { setCount(count + 1) }

//     return <div>
//         <h1>{count}</h1>
//         <button onClick={handleClick}>count</button>
//     </div>
// }


// ---------------------------------------------------------------------- //


// // khi component dc re-render => loss variable => useRef: luu cac gia tri bat 
// // ki qua mot tham chieu ben ngoai function component
// function MountOrUnmount() {
//     const timer = useRef()
//     const prevCount = useRef()
//     const h1Ref = useRef()
//     const [count, setCount] = useState(60)

//     // lay gia tri truoc do
//     useEffect(() => {
//         prevCount.current = count
//     }, [count])

//     // lay cac thuoc tinh cua the
//     useEffect(() => {
//         console.log(h1Ref.current)
//         const rect = h1Ref.current.getBoundingClientRect()
//         console.log(rect)
//     })

//     const handleStart = () => {
//         timer.current = setInterval(() => {
//             setCount(previous => previous - 1)
//         }, 1000)
//     }
//     const handleStop = () => {
//         clearInterval(timer.current)
//     }

//     console.log(count, prevCount.current)
//     return <div>
//         <h1 ref={h1Ref}>{count}</h1>
//         <button onClick={handleStart}>start</button>
//         <button onClick={handleStop}>stop</button>
//     </div>
// }


// ---------------------------------------------------------------------- //


// // memo() => higher order component (hoc): ghi nho lai props cua 1 component
// // de quyet dinh co render lai component do hay khong => toi uu performance
// // neu co 'props' nao thay doi thi se re-render component
// import { memo } from "react";
// function MountOrUnmount() {
//     console.log('re-render')
//     return <div>
//         <h1>hello memo</h1>
//     </div>
// }
// export default memo(MountOrUnmount)


// ---------------------------------------------------------------------- //

// khai niem props: truyen du lieu giua cac component
// useCallback example
import { memo } from "react";
function MountOrUnmount({onIncrease}) {
    console.log('re-render')
    return <> 
        { /* dc babel chuyen doi thanh react fragment */ }
        <h1>hello memo and callback</h1>
        <button onClick={onIncrease}>up</button>
    </>
}
export default memo(MountOrUnmount)


// export default MountOrUnmount
