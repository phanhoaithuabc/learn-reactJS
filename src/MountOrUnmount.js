import { useEffect, useLayoutEffect, useRef, useState } from "react";

// side effects: khi co tac dong xay ra => du lieu cua phan mem
// bi thay doi (call api, update DOM, listen DOM event, cleanup)
// callback luon dc goi sau khi component mounted

// // useEffect(callback): goi callback moi khi component re-render,
// // goi callback sau khi element dc them vao DOM => it dung
// function MountOrUnmount(){
//     const [title, setTitle] = useState('')
//     // chay sau khi render UI, uu tien render UI cho client
//     useEffect(()=>{
//         console.log('mounted')
//         document.title = title
//     })
//     return <div>
//         <input value={title} 
//             onChange={e=>setTitle(e.target.value)}/>
//         {console.log('render')}
//     </div>
// }


// ---------------------------------------------------------------------//


// // useEffect(callback, []): chi goi lai 1 lan sau khi component
// // mounted 
// function MountOrUnmount(){
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     // chay sau khi render UI, uu tien render UI cho client
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(posts => { setPosts(posts) })
//     }, [])
//     return <div>
//         <input value={title} 
//             onChange={e=>setTitle(e.target.value)}/>
//         {console.log('render')}
//         <ul>
//             {posts.map(post => 
//                 <li key={post.id}>
//                     {post.title}
//                 </li>)
//             }
//         </ul>
//     </div>
// }


// // ---------------------------------------------------------------------//


// // useEffect(callback, [dependences]): callback se dc goi lai moi
// // khi dependence thay doi
// const tabs = ['posts', 'comments', 'albums']
// function MountOrUnmount(){
//     const [data, setData] = useState([])
//     const [type, setType] = useState('posts')
//     const [showGototop, setshowGototop] = useState(false)
//     console.log(type)
//     // chay sau khi render UI, uu tien render UI cho client
//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(response => response.json())
//             .then(data => { setData(data) })
//     }, [type])

//     useEffect(()=>{
//         const handleScroll = () => {
//             setshowGototop(window.scrollY>=200)
//         }
//         window.addEventListener('scroll', handleScroll)
//         // cleanup function 
//         return () => {
//             console.log('unmouted')
//             window.removeEventListener('scroll', handleScroll)
//         }
//     },[])
//     return <div>
//         {console.log('render')}
//         {tabs.map(tab => 
//         <button key={tab} onClick={()=>setType(tab)}
//             style={type === tab ? {
//                 color: 'red', backgroudColor: '#000'
//             }: {}}>
//             {tab}
//         </button>)}
//         {data.map(item => 
//             <li key={item.id}>
//                 {item.title || item.name}
//             </li>)
//         }
//         {showGototop && <button
//             style={{
//                 position: 'fixed',
//                 right: 20,
//                 bottom: 20,
//             }}
//         >UP</button>}
//     </div>
// }


// // ---------------------------------------------------------------------//


// // useEffect: listen DOM event example
// function MountOrUnmount(){
//     const [width, setWidth] = useState(window.innerWidth)
//     console.log(width)

//     useEffect(()=>{
//         const resizeHandler = () => {
//             setWidth(window.innerWidth)
//         }
//         window.addEventListener('resize', resizeHandler)
//         return () => {window.removeEventListener('resize', resizeHandler)}
//     }, [])
//     return <div>
//         <div>{width}</div>
//         </div>


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


// // ---------------------------------------------------------------------//


// // useEffect: countdown example
// function MountOrUnmount(){
//     const [countdown, setCountdown] = useState(60)

//     useEffect(()=>{
//         const timer = setInterval(() => {
//             setCountdown(prevState => prevState -1)
//             console.log(countdown)
//         }, 1000);
//         return () => clearInterval(timer)
//     }, [])

//     // // another way
//     // useEffect(()=>{
//     //     const timer = setTimeout(() => {
//     //         setCountdown(countdown - 1)
//     //         console.log(countdown)
//     //     }, 1000);
//     //     return () => clearTimeout(timer)
//     // }, [countdown])

//     return <div>
//         <h1>{countdown}</h1>
//        </div>

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


// ---------------------------------------------------------------------//


// // useEffect: cleanup function
// // cleanup function dc goi truoc khi component unmouted
// // cleanup function dc goi truoc khi callback dc goi (tru lan mounted)
// function MountOrUnmount(){
//     const [count, setCount] = useState(1)

//     useEffect(()=>{
//         console.log(`mounted or re-render ${count}`)
        
//         return () => console.log(`cleanup lan ${count}`)
//     }, [count])

//     return <div>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)}>click me</button>
//         </div>
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


// // ---------------------------------------------------------------------//

// // useEffect: preview avatar
// function MountOrUnmount(){
//     const [avatar, setAvatar] = useState()
//     const handlePreviewAvatar = (e) => {
//         const file = e.target.files[0] // lay anh dau tien
//         file.preview = URL.createObjectURL(file)
//         setAvatar(file)
//     }
//     useEffect(()=>{    
//         return () => 
//             // remove khoi bo nho
//             avatar && URL.revokeObjectURL(avatar.preview)
//     }, [avatar])

//     return <div>
//         <input type="file"
//             // multiple // cho phep chon nhieu anh
//             onChange={handlePreviewAvatar} />
//         {avatar && <img
//             src={avatar.preview} alt="" width="70%"/>}
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


// // khai niem props: truyen du lieu giua cac component
// // useCallback example
// import { memo } from "react";
// function MountOrUnmount({onIncrease}) {
//     console.log('re-render')
//     return <> 
//         { /* dc babel chuyen doi thanh react fragment */ }
//         <h1>hello memo and callback</h1>
//         <button onClick={onIncrease}>up</button>
//     </>
// }
// export default memo(MountOrUnmount)


// export default MountOrUnmount
