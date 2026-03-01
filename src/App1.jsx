import React from 'react'
import { ThemeContext } from './Context'
import Navbar from './Navbar';
import Home from './Home';
const App1 = () => {
    const theme=dark;
  return (
    <ThemeContext.Provider>
        <Navbar/>
        <div>App1</div>
        <Home/>
    </ThemeContext.Provider>
    
  )
}

export default App1