import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1>React: Hello world!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Hai cliccato {count} volte!
        </button>
      </div>
    </>
  )
}

export default App
