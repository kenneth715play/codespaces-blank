//Import react
import React from 'react'

//Import images
import logo from './assets/logo.png'
import logo2 from './assets/logo2.png'
import google from './assets/google.png'
import facebook from './assets/facebook.png'

//CSS Import/Link
import './App.css';

//Declaring the app function
const App = () => {
  //HTML to be returned
  return (
    <div className='page'>
      {/*Left side of the screen*/}
      <div className='left'>
        <img src={logo2} alt='logo' width='135px' height='117px'></img>
        <h3>Getting Started With VR Creation</h3>
        <img src={logo} alt='logo' width='630.49px' height='673.97px'></img>
      </div>

      {/*Right side of the screen*/}
      <div className='right'>

        <select name="language" id="lang">
          <option value="En">English (UK)</option>
        </select>

        <form>
          <h2>Create Account</h2>
          <div className='buttonRow'>
            <button><img src={google}></img>Signup with Google</button>
            <button><img src={facebook}></img>Signup with Facebook</button>
          </div>
          <p className='or'>- OR -</p>
          <div className='input'>

          </div>
        </form>
      </div>
    </div>
  )
}

export default App