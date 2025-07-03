import { useCart } from "./cartPages/CartValues";
import { Link } from "react-router-dom"; 

function CartOverview() {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white flex justify-between items-center px-8 py-4 text-sm">
      <p>
        {totalItems} Pizzas{" "}
        <span className="font-bold ml-2">€{totalPrice.toFixed(2)}</span>
      </p>

      <Link
        to="/cart"
        className="uppercase tracking-wide font-semibold text-sm text-yellow-400 hover:underline"
      >
        Open Cart →
      </Link>
    </div>
  );
}

export default CartOverview;
