import React from 'react'
import { ThemeContext } from './Context'
import { useContext } from 'react'
const Contact = () => {
  const theme=useContext(ThemeContext)
  return (
    <div>Current Theme : {theme}</div>

  )
}

export default Contact