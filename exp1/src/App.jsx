import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Mouse Click Tracker</h1>
      <h3>Click inside this button</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click count : {count}
        </button>
      </div>
    </>
  )
}

export default App
