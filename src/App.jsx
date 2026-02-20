import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
const App = () => {
  return (<>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  </>)
}

export default App