import { useEffect } from "react"
import { useState } from "react"

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
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+1)}>click me</button>
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


// ---------------------------------------------------------------------//

// useEffect: fake chat app example
const lessons = [
    {
        id: 1,
        name: 'java',
    },
    {
        id: 2,
        name: 'javaScript',
    },
    {
        id: 3,
        name: 'html',
    }
]
function MountOrUnmount(){
    const [lessonId, setlessonId] = useState(1)

    useEffect(()=>{    
        return () => 
    }, [])

    return <div>
        <ul>
            {lessons.map(lesson => {
                
            })}
        </ul>
    </div>
}

export default MountOrUnmount
