
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Daftar from '../src/Daftar/Daftar';
import Checkout from '../src/Checkout/Checkout';

const Home = () => (
  <div className="min-h-100 bg-gradient-to-br from-blue-50 to-orange-50">
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Selamat Datang
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Platform pembelajaran digital untuk mengembangkan kemampuan dan karir Anda
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link to="/daftar">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Daftar Sekarang
            </button>
          </Link>
          <Link to="/checkout">
            <button className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Checkout Course
            </button>
          </Link>
        </div>
</div>
</div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daftar" element={<Daftar />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;