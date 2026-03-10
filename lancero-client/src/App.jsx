import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className='App Header'>
        <h1> Welcome to My React App! </h1>
        <p>
          Name: Lloyd Lancero <br/>
          Email: lavlancero@gmail.com <br/>
          Other Personal Info: <a href="https://github.com/Lloyd-Lancero/lancero-webprog"> GitHub Repository</a>
        </p>
      </header>
    </div>
  );
}

export default App
