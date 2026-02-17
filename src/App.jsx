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
import React, { useState } from 'react'

const App = () => {
const [name,setname]=useState("")
const [submitted,setSubmitted]=useState(false)
const handlesubmit=(e)=>{
  e.preventDefault()
  setSubmitted(name)
}  
return (<>
  <form action="" onSubmit={handlesubmit}>
  <input type="text" onChange={(e) => setname(e.target.value)} value={name} />
  <button >Submit</button></form>
  
  {submitted && <h1>Hello {name}</h1>}</>)
}

export default App