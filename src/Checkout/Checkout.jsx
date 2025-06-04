import { useState } from 'react';
import Profil from '../assets/pfp.jpeg';
import Office from '../assets/office.jpg';
import Ovo from '../assets/ovo.png';
import Dana from '../assets/dana.png';
import Jago from '../assets/jago.png';
import Mandiri from '../assets/mandiri.png';
import Bca from '../assets/bca.png';
import Bni from '../assets/bni.png';
import Bri from '../assets/bri.png';
import Alfa from '../assets/alfa.png';
import Indo from '../assets/indomaret.png';
import Master from '../assets/mastercard.png';
import Visa from '../assets/visa.png';

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [voucher, setVoucher] = useState('');
  const [voucherUsed, setVoucherUsed] = useState(false);

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const handleUseVoucher = () => {
    if (voucher.trim().toUpperCase() === 'DISKON06') {
      alert('Voucher berhasil dipakai!');
      setVoucherUsed(true);
    } else {
      alert('Kode voucher tidak ditemukan!');
      setVoucherUsed(false);
    }
  };

  const handleBuyNow = () => {
    if (!selectedPayment) {
      alert('Silakan pilih metode pembayaran terlebih dahulu!');
      return;
    }

    alert(`Pembelian berhasil dengan metode: ${selectedPayment}${voucherUsed ? ' + Voucher DISKON06' : ''}`);

    setSelectedPayment('');
    setVoucher('');
    setVoucherUsed(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[356px] p-4 flex justify-center relative">
      <div className="w-full max-w-[1152px]">
        <div className="w-full h-[356px] bg-[#E2D7A8] flex items-center px-16 mb-8 absolute left-0 top-0 right-0">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold text-[#B99430]">
              UX Designer: Digital Product Development
            </h1>
            <div className="flex items-center gap-3 text-gray-700">
              <img src={Profil} alt="author" className="w-8 h-8 rounded-full object-cover" />
              <span>Dimounirf Netsalapoba</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="px-1 py-1 text-m text-black">
                Kategori: <span className="text-black font-bold">UI/UX</span>
              </span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Rp. 0</span>
          </div>

          <img
            src={Office}
            alt="course banner"
            className="w-[400px] h-[320px] rounded shadow-md object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl text-[#B99430] mt-10 ml-1 font-semibold">Payment Method</h2>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-[#A77264] mb-3">E-Wallet</h3>
              <p className="text-medium text-[#030303B8] font-medium mb-3">
                Transaksi terhubung dengan akun e-wallet
              </p>
              {[{ name: 'OVO', img: Ovo }, { name: 'DANA', img: Dana }].map((method) => (
                <label key={method.name} className="flex items-center p-3 border rounded-lg hover:border-[#A77264] hover:shadow-md transition-all duration-200 cursor-pointer mb-2">
                  <input
                    type="radio"
                    name="payment"
                    value={method.name}
                    checked={selectedPayment === method.name}
                    onChange={(e) => handlePaymentSelect(e.target.value)}
                    className="mr-3"
                  />
                  <img src={method.img} alt={method.name} className="w-8 h-8 object-cover mr-3" />
                  <span className="font-medium">{method.name}</span>
                </label>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-[#A77264] mb-3">Transfer Bank</h3>
              <p className="text-medium text-[#030303B8] font-medium mb-3">
                Transaksi perlu upload bukti transfer untuk proses verifikasi
              </p>
              {[{ name: 'BANK JAGO', img: Jago }].map((method) => (
                <label key={method.name} className="flex items-center p-3 border rounded-lg hover:border-[#A77264] hover:shadow-md transition-all duration-200 cursor-pointer mb-2">
                  <input
                    type="radio"
                    name="payment"
                    value={method.name}
                    checked={selectedPayment === method.name}
                    onChange={(e) => handlePaymentSelect(e.target.value)}
                    className="mr-3"
                  />
                  <img src={method.img} alt={method.name} className="w-8 h-8 object-cover mr-3" />
                  <span className="font-medium">{method.name}</span>
                </label>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-[#A77264] mb-3">Transfer Virtual Account</h3>
              <p className="text-medium text-[#030303B8] font-medium mb-3">Transaksi di cek otomatis</p>
              {[{ name: 'BANK MANDIRI', img: Mandiri }, { name: 'BANK BCA', img: Bca }, { name: 'BANK BNI', img: Bni }, { name: 'BANK BRI', img: Bri }].map((method) => (
                <label key={method.name} className="flex items-center p-3 border rounded-lg hover:border-[#A77264] hover:shadow-md transition-all duration-200 cursor-pointer mb-2">
                  <input
                    type="radio"
                    name="payment"
                    value={method.name}
                    checked={selectedPayment === method.name}
                    onChange={(e) => handlePaymentSelect(e.target.value)}
                    className="mr-3"
                  />
                  <img src={method.img} alt={method.name} className="w-8 object-cover mr-3" />
                  <span className="font-medium">{method.name}</span>
                </label>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-[#A77264] mb-3">Kartu Kredit</h3>
              <p className="text-medium text-[#030303B8] font-medium mb-3">
                Transaksi dengan kartu kredit berlogo VISA/MASTERCARD
              </p>
              <label className="flex items-center p-3 border rounded-lg hover:border-red-400 hover:shadow-md transition-all duration-200 cursor-pointer mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="VISA/MASTERCARD"
                  checked={selectedPayment === 'VISA/MASTERCARD'}
                  onChange={(e) => handlePaymentSelect(e.target.value)}
                  className="mr-3"
                />
                <div className="flex items-center gap-2 mr-3">
                  <img src={Visa} alt="VISA" className="w-8 h-8 object-contain" />
                  <img src={Master} alt="MASTERCARD" className="w-8 h-8 object-contain" />
                </div>
                <span className="font-medium">VISA / MASTERCARD</span>
              </label>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-[#A77264] mb-3">Minimarket</h3>
              <p className="text-medium text-[#030303B8] font-medium mb-3">
                Transaksi di gerai retail terdekat dengan biaya layanan tambahan
              </p>
              {[{ name: 'INDOMARET', img: Indo }, { name: 'ALFAMART', img: Alfa }].map((method) => (
                <label key={method.name} className="flex items-center p-3 border rounded-lg hover:border-[#A77264] hover:shadow-md transition-all duration-200 cursor-pointer mb-2">
                  <input
                    type="radio"
                    name="payment"
                    value={method.name}
                    checked={selectedPayment === method.name}
                    onChange={(e) => handlePaymentSelect(e.target.value)}
                    className="mr-3"
                  />
                  <img src={method.img} alt={method.name} className="w-8 object-cover mr-3" />
                  <span className="font-medium">{method.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4 mt-23">
              <h3 className="text-lg font-semibold mb-4">Total Price</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price</span>
                  <span>Rp. 0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Diskon</span>
                  <span>{voucherUsed ? 'Rp. 10.000' : 'Rp. 0'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Voucher</span>
                  <span>Rp. 0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Voucher</span>
                  <span>{voucherUsed ? 'DISKON06' : '-'}</span>
                </div>
              </div>

              <div className="mb-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Input voucher code"
                  value={voucher}
                  onChange={(e) => setVoucher(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:border-[#A77264] focus:outline-none"
                />
                <button
                  onClick={handleUseVoucher}
                  className="bg-[#B99430] text-white border border-transparent font-medium py-2 px-5 rounded-lg transition duration-200 hover:bg-white hover:text-[#B99430] hover:border-[#B99430]"
                >
                  Use
                </button>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Payment</span>
                  <span>Rp. 0</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Dengan menyelesaikan pembelian, Anda menyetujui ketentuan layanan ini.
                </p>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full border hover:border-[#B99430] text-[#B99430] font-medium py-2 px-5 rounded-lg transition duration-200 hover:bg-[#B99430] hover:text-white"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;