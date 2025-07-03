import { Link } from "react-router-dom";
import { useCart } from "../cartPages/CartValues";

function CartPage() {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleClear = () => {
    dispatch({ type: "clear" });
  };


  if (cart.length === 0)
    return (
      <div className="text-center mt-20">
        <Link
          to="/menu"
          className="text-yellow-500 font-semibold hover:underline"
        >
          ← Back to menu
        </Link>
        <p className="mt-4 text-lg text-gray-700">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <ul className="space-y-6 mb-6">
  {cart.map((item) => (
    <li
      key={item.id}
      className="flex justify-between items-center border-b pb-4"
    >
      <div className="flex flex-col">
        <span className="font-medium text-lg">{item.name}</span>
        <span className="text-gray-600 text-sm italic">
          Quantity: {item.quantity}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch({ type: "decrease", payload: { id: item.id } })}
          className="bg-yellow-300 px-3 py-1 rounded-full font-bold text-lg"
        >
          -
        </button>
        <span className="font-semibold">{item.quantity}</span>
        <button
          onClick={() => dispatch({ type: "increase", payload: { id: item.id } })}
          className="bg-yellow-300 px-3 py-1 rounded-full font-bold text-lg"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "delete", payload: { id: item.id } })}
            className="ml-2 px-4 py-1 bg-yellow-400 hover:bg-yellow-500 text-white text-sm rounded-full"
        >
           Delete
        </button>

        <span className="ml-4 font-semibold">
          €{(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </li>
  ))}
</ul>


      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-medium">
          Total: €{totalPrice.toFixed(2)}
        </span>
      </div>

      <div className="flex gap-3">
  <Link to="/order/new">     
  <button
    className="bg-yellow-400 text-white px-5 py-2 rounded-full font-semibold hover:bg-yellow-500"
  >
    Order pizzas
  </button>
  </Link> 
  <button
    onClick={handleClear}
    className="bg-white text-gray-800 border border-gray-300 px-5 py-2 rounded-full font-semibold hover:bg-gray-100"
  >
    Clear cart
  </button>
</div>


      <div className="mt-6 text-center">
        <Link
          to="/menu"
          className="text-yellow-500 font-semibold hover:underline"
        >
          ← Back to menu
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
