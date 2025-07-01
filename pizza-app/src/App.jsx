import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
     <div className="min-h-screen bg-gray-50">
      <header className="bg-yellow-400 px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg tracking-wide uppercase">
          Fast React Pizza Co.
        </h1>
        <input
          type="text"
          placeholder="Search order #"
          className="rounded-full px-4 py-2 placeholder:text-sm outline-none border-2 border-yellow-300 focus:ring-2 focus:ring-yellow-500"
        />
      </header>

      <main className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-3xl font-semibold mb-2">The best pizza.</h2>
        <p className="text-xl font-medium text-yellow-600 mb-6">
          Straight out of the oven, straight to you.
        </p>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">👋</span>
          <p className="text-gray-700 font-medium">
            Welcome! Please start by telling us your name:
          </p>
        </div>

        <input
          type="text"
          placeholder="Your full name"
          className="px-6 py-3 border-2 border-yellow-400 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 w-72 text-center"
        />
      </main>
    </div>
    </>
  )
}

export default App
