import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Demo.jsx'
import Test from "./Test.jsx"
import copyComponent from "./copyComponent.jsx"

function App() {
 
  return (
   <div>
<h1>This is the main component</h1>
{/* <Demo/> */}
{/* <Test/> */}
<copyComponent/>
   </div>
  )

}

export default App
