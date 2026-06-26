import { useState } from 'react'
import './App.css'
import RimigoTitle from './components/rimigotitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#0D0C0D]'>
      <RimigoTitle />
    </div>
  ) 
}

export default App
