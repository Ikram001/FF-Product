import { useLocation } from "react-router-dom";

function OrderStatus() {
  const { state } = useLocation();
  const { name, phone, address, priority, orderId, total, deliveryTime } = state || {};

  const basePrice = 58;
  const priorityCharge = priority ? 2.5 : 0;

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <h2 className="text-xl font-bold">Order {orderId} status</h2>

      <div className="flex gap-2">
        {priority && (
          <span className="bg-red-500 text-white px-4 py-1 rounded-full">PRIORITY</span>
        )}
        <span className="bg-green-500 text-white px-4 py-1 rounded-full">
          PREPARING ORDER
        </span>
      </div>

      <div className="bg-gray-100 p-4">
        <p>
          Estimated delivery:{" "}
          {new Date(deliveryTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
        <p>Price pizza: €{basePrice.toFixed(2)}</p>
        {priority && <p>Price priority: €{priorityCharge.toFixed(2)}</p>}
        <p className="font-bold text-lg mt-2">To pay on delivery: €{total.toFixed(2)}</p>
      </div>

      <div>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>
    </div>
  );
}

export default OrderStatus;
