import { useState } from 'react'


import Scoreboard from './components/Scoreboard'

function App() {
  
  return (
    <div className="dark:bg-slate-700 dark:text-white bg-slate-300 min-h-screen">
      <main className='flex flex-col items-center'>

        <h1 className='p-10 text-2xl'>Fifa World Cup</h1>
        <Scoreboard/>
      </main>
    </div>
  )
}

export default App
