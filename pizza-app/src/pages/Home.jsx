import { useNavigate } from 'react-router-dom'
import { useCustomer } from '../context/CustomerContext'

function Home() {
  const { name, setName } = useCustomer()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
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
        onInput={handleChange}
        value={name}
      />

      {name && (
        <button
          className="px-6 py-2 m-10 text-lg bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
          onClick={() => navigate('/menu')}
        >
          Start Ordering
        </button>
      )}
    </main>
  )
}

export default Home
