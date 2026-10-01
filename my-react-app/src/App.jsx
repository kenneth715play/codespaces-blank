import React from 'react'
import logo from './assets/logo.png'
import logo2 from './assets/logo2.png'


const App = () => {
  return (
  <div className='page'>
    <div className = 'left'>
      <img src = {logo} alt = 'logo'></img>
      <h3>Getting Started with VR Creation</h3>
      <img src = {logo2} alt = 'logo' width = '500px'></img>
    </div>
    <div className = 'right'>
      <select name ="language" id = "lang">
        <option value = "En">English (UK)</option>
      </select>


      <form>
       
      </form>
    </div>
  </div>
  )
}


export default App



