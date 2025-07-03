import { useCart } from "../cartPages/CartValues";

function PizzaItem({ pizza }) {
  const { cart, dispatch } = useCart();
  const cartItem = cart.find((item) => item.id === pizza.id);

  const imageSrc = pizza.photoName.startsWith("data:image")
    ? pizza.photoName
    : `/pizzas/${pizza.photoName}`;

  return (
    <li
      className={`flex items-center justify-between border-b pb-4 ${
        pizza.soldOut ? "opacity-50 grayscale" : ""
      }`}
    >
      <div className="flex gap-4">
        <img
          src={imageSrc}
          alt={pizza.name}
          className="w-24 h-24 object-cover rounded"
        />
        <div className="text-left">
          <h3 className="text-lg font-semibold">{pizza.name}</h3>
          <p className="text-sm italic text-gray-600">{pizza.ingredients}</p>
          {pizza.soldOut ? (
            <p className="text-red-500 font-semibold">SOLD OUT</p>
          ) : (
            <p className="text-gray-800 font-medium">
              €{pizza.price.toFixed(2)}
            </p>
          )}
        </div>
      </div>

      {!pizza.soldOut &&
        (!cartItem ? (
          <button
            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold rounded-full"
            onClick={() => dispatch({ type: "add", payload: pizza })}
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                dispatch({ type: "decrease", payload: { id: pizza.id } })
              }
              className="px-3 py-1 bg-yellow-300 rounded-full font-bold text-lg"
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button
              onClick={() =>
                dispatch({ type: "increase", payload: { id: pizza.id } })
              }
              className="px-3 py-1 bg-yellow-300 rounded-full font-bold text-lg"
            >
              +
            </button>
            <button
              onClick={() =>
                dispatch({ type: "delete", payload: { id: pizza.id } })
              }
              className="ml-2 px-4 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-full text-sm font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
    </li>
  );
}

export default PizzaItem;
