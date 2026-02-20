// import React from 'react'
// import { useState } from 'react'
// import img1 from'./assets/pic_bulbon.gif'
// import img2 from'./assets/pic_bulboff.gif'

// const App = () => {
//   const [ison,setison]=useState(true)
  
//   return (
//     <>
//     <div onClick={() => setison(!ison)}>
//       <img src={ison?img2:img1} alt="abc" />
//     </div>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
// const [name,setname]=useState("")
// const [age,setage]=useState("")
// const [submitted,setSubmitted]=useState(false)
// const handlesubmit=(e)=>{
//   e.preventDefault()
//   setSubmitted(true)
// }  
// return (<>
//   <form action="" onSubmit={handlesubmit}>
//     <label htmlFor="name">Name:</label>
//   <input type="text" onChange={(e) => setname(e.target.value)} value={name} /><br/>
//   <label htmlFor="age">Age:</label>
//   <input type="number" value={age} onChange={(e)=>setage(e.target.value)}/><br/>
//   <button >Submit</button></form>
  
//   {submitted && <h1>Hello {name}</h1>}
//   {submitted && <h2>Hello {age}</h2>}</>)
// }

// export default App
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Home = () => {
  const [count,setcount]=useState(0)
    useEffect(()=>{
      console.log("useeffect called")},[count]
  )
  return (<>
    <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)}>add it</button>
  </>)   
}
export default Home