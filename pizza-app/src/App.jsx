import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import CartPage from './pages/CartHomePage';
import CartOverview from './CartBar';
import OrderForm from './OrderF';
import OrderStatus from './OrderS';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order/new" element={<OrderForm />} />
        <Route path="/order/:orderId" element={<OrderStatus />} />
      </Routes>
      <CartOverview />
    </div>
  );
}

export default App;
