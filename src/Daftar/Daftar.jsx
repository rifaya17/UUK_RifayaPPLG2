import { useState } from 'react';
import Poster from '../assets/poster.jpg';

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    namaDepan: '',
    namaBelakang: '',
    tanggalLahir: '',
    jenisKelamin: '',
    alamat: '',
    email: '',
    noTelp: '',
    pekerjaan: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Pendaftaran berhasil!');
    setFormData({
      namaDepan: '',
      namaBelakang: '',
      tanggalLahir: '',
      jenisKelamin: '',
      alamat: '',
      email: '',
      noTelp: '',
      pekerjaan: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-[1152px] mx-auto">
        <div className="bg-white shadow-lg relative flex flex-col md:flex-row p-4 md:p-6 mb-6">
          <div className="absolute top-1 right-0 z-10">
            <span className="bg-[#90977C] text-white px-7 py-2 text-sm font-semibold shadow-md">
              OPEN
            </span>
          </div>

          <div className="w-full md:w-[230px] flex-shrink-0 mb-4 md:mb-0 md:pr-6">
            <div className="w-full h-48 flex items-center justify-center">
              <img src={Poster}></img>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <h2 className="text-xl font-bold text-[#A57F22] mb-4 whitespace-nowrap">
              Earn Money Easily With Digital
            </h2>
            
            <div className="flex flex-col md:flex-row gap-0 w-full">
              <div className="flex flex-col w-full md:w-1/3 pr-0 md:pr-6 md:border-r border-gray-300">
                <p className="font-semibold text-sm text-[#A77264] mb-1">Speaker</p>
                <p className="text-sm pt-2 text-gray-700">
                  Ahmad Fatoni - Lead QA Engineer of DOT Indonesia
                </p>
                <p className="text-sm pt-3 text-gray-700">
                  Fahmi Idris - Frontend Engineer Kata.ai
                </p>
              </div>

              <div className="flex flex-col w-full md:w-1/3 px-0 md:px-6 md:border-r border-gray-300">
                <p className="font-semibold text-sm text-[#A77264] mb-1">Topics</p>
                <div className="pt-1 text-sm text-gray-700 space-y-1">
                  <p>Tips to keep productive for digiTalent</p>
                  <p>Earn money at home</p>
                  <p>Maximizing your digiTal Skills</p>
                </div>
              </div>

              <div className="flex flex-col w-full md:w-1/3 pl-0 md:pl-6">
                <p className="font-semibold text-sm text-[#A77264] mb-1">Date and Time</p>
                <p className="text-sm text-gray-700">Wednesday, 24th July 2020</p>
                <p className="text-sm text-gray-700 mb-4">13:00 WIB</p>
                <p className="font-semibold text-sm text-[#A77264] mb-1">Registration Fee</p>
                <p className="text-sm text-gray-700">Rp. 0</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-[#B99430] mb-6">Event Registration</h2>
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-sm text-[#A77264] mb-2">
                  Nama Depan :
                </label>
                <input
                  type="text"
                  name="namaDepan"
                  value={formData.namaDepan}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A77264] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#A77264] mb-2">
                  Tanggal Lahir :
                </label>
                <input
                  type="date"
                  name="tanggalLahir"
                  value={formData.tanggalLahir}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A77264] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#A77264] mb-2">
                  Alamat :
                </label>
                <textarea
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A77264] focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#A77264] mb-2">
                  Email :
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A77264] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#A77264] mb-2">
                  No. Telp :
                </label>
                <input
                  type="tel"
                  name="noTelp"
                  value={formData.noTelp}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A77264] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#A77264] mb-2">
                  Pekerjaan :
                </label>
                <textarea
                  name="pekerjaan"
                  value={formData.pekerjaan}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A77264] focus:border-transparent resize-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#A77264] mb-2">
                  Nama Belakang :
                </label>
                <input
                  type="text"
                  name="namaBelakang"
                  value={formData.namaBelakang}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A77264] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#A77264] mb-2">
                  Jenis Kelamin :
                </label>
                <select
                  name="jenisKelamin"
                  value={formData.jenisKelamin}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A77264] focus:border-transparent"
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="border border-[#B99430] text-[#B99430] font-medium py-2 px-8 rounded-lg shadow-md transition duration-200 hover:bg-[#B99430] hover:text-white"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;