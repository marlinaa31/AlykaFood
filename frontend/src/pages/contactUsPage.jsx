import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#2B1B17] font-sans flex flex-col justify-between">
      {/* Navbar Website */}
      <Navbar />

      {/* Main Content / Bagian Kontak */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 md:py-16 w-full">
        <div className="bg-[#FDEFD0]/60 rounded-3xl p-8 md:p-12 border border-[#FAD99B]/50 relative overflow-hidden shadow-sm">
          <div className="max-w-2xl mx-auto space-y-8 relative z-10 text-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E58529]">
                Hubungi Kami
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-[#2B1B17]">
                Mari Terhubung Bersama AlykaFood
              </h1>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Punya pertanyaan seputar varian snack, pemesanan jumlah besar, atau jadwal PO? Silakan hubungi kami melalui informasi di bawah ini!
              </p>
            </div>

            {/* Detail Info Kontak */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-4">
              <div className="bg-white/80 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Telepon / WhatsApp</h4>
                <p className="font-semibold text-base text-[#2B1B17]">+62 538 199 2125</p>
              </div>

              <div className="bg-white/80 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Jam Operasional</h4>
                <p className="font-semibold text-base text-[#2B1B17]">09.00 - 17.00 WIB</p>
                <span className="text-xs text-gray-500">Ready Setiap Hari</span>
              </div>

              <div className="bg-white/80 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Lokasi</h4>
                <p className="font-semibold text-base text-[#2B1B17]">Banda Aceh, Indonesia</p>
              </div>

              <div className="bg-white/80 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Instagram</h4>
                <p className="font-semibold text-base text-[#2B1B17]">@alyka.food</p>
              </div>
            </div>
          </div>

          {/* Fitur Utama di Bagian Bawah */}
          <div className="pt-10 mt-10 border-t border-[#FAD99B]/60 grid grid-cols-3 gap-2 text-center relative z-10 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold text-gray-700">Pengiriman Cepat</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold text-gray-700">Bahan Pilihan</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold text-gray-700">Pembayaran Aman</span>
            </div>
          </div>

          {/* Aksen Dekorasi Latar Belakang */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#E58529]/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      </main>

      {/* Footer Website */}
      <Footer />
    </div>
  );
};

export default ContactUsPage;