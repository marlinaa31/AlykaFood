import React from 'react'
import { Link } from 'react-router-dom'
import bolenCoklatKeju from '../assets/images/bolen.png'
import risolMayo from '../assets/images/smokebeef.jpg'
import riceBowl from '../assets/images/ricebowl.jpg'
import risolCoklat from '../assets/images/risolcoklat.jpg'

const favorites = [
  { name: 'Bolen Coklat Keju', image: bolenCoklatKeju },
  { name: 'Risol Mayo Smoke Beef', image: risolMayo },
  { name: 'Rice Bowl Ayam Sambal Matah', image: riceBowl },
  { name: 'Risol Coklat', image: risolCoklat },
]

const Arrow = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
  </svg>
)

const Category = () => {
  return (
    <section id="menu" className="px-4 md:px-6 py-6">
      <div className="max-w-screen-xl mx-auto px-2 md:px-4 py-10">

        {/* Judul */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B1B12] leading-tight">
              Menu Favorit
            </h2>
            <p className="text-sm text-[#66564A] mt-2">Paling sering dipesan di Alyka Food</p>
          </div>

          <Link
            to="/services"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#2B1B12] hover:text-[#8B6040] transition"
          >
            Lihat Semua <Arrow />
          </Link>
        </div>

        {/* Menu */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          {favorites.map((item) => (
            <Link
              key={item.name}
              to="/services"
              className="group flex flex-col items-center text-center focus:outline-none"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-[#F8D9A9] ring-4 ring-white shadow-[0_12px_25px_-10px_rgba(120,80,30,0.45)] group-focus-visible:ring-[#F4AE3D] transition">
                <img
                  src={item.image}
                  alt={`${item.name} buatan Alyka Food`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-4 font-semibold text-[#2B1B12] max-w-[11rem]">{item.name}</h3>

              <span className="mt-2 inline-flex items-center gap-1 text-xs text-[#8B6040] group-hover:gap-2 transition-all">
                Pesan Sekarang <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Category