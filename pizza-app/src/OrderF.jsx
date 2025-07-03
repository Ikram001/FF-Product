import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [priority, setPriority] = useState(false);

  const navigate = useNavigate();

  const basePrice = 58;
  const priorityCharge = 2.5;
  const total = priority ? basePrice + priorityCharge : basePrice;

  const generateOrderId = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `$${result}`;
  };

  const generateDeliveryTime = () => {
    const now = new Date();
    const minutesToAdd = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
    const deliveryTime = new Date(now.getTime() + minutesToAdd * 60000);
    return deliveryTime.toISOString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = generateOrderId();
    const deliveryTime = generateDeliveryTime();

    navigate(`/order/${orderId}`, {
      state: {
        orderId,
        name,
        phone,
        address,
        priority,
        total,
        deliveryTime,
      },
    });
  };

  return (
    <form
      className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md space-y-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold">Ready to order? Let's go!</h2>

      <div>
        <label className="block mb-1 font-medium">First Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-full"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border rounded-full"
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-grow">
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border rounded-full"
            required
          />
        </div>
        <button
          type="button"
          className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full"
        >
          GET POSITION
        </button>
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={priority}
          onChange={() => setPriority(!priority)}
        />
        <span>Want to give your order priority?</span>
      </label>

      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 w-full py-3 rounded-full font-bold"
      >
        ORDER NOW FROM €{total.toFixed(2)}
      </button>
    </form>
  );
}

export default OrderForm;
