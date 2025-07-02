import { useCustomer } from '../context/CustomerContext'

function Header() {
  const { name } = useCustomer()

  return (
    <header className="bg-yellow-400 px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-lg tracking-wide uppercase">
        Fast React Pizza Co.
      </h1>

      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search order #"
          className="rounded-full px-4 py-2 w-72 outline-none border-2 border-yellow-300 focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {name && (
        <div className="ml-4 font-medium text-gray-800 uppercase">{name}</div>
      )}
    </header>
  )
}

export default Header
