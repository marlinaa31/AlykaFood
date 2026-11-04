import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Burgers', items: 12, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
  { name: 'Pizza', items: 8, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' },
  { name: 'Sushi', items: 10, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400' },
  { name: 'Salads', items: 6, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
  { name: 'Desserts', items: 9, image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400' },
  { name: 'Drinks', items: 7, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400' },
]

const Arrow = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
  </svg>
)

const Category = () => {
  return (
    // Tanpa background sendiri: warna halaman diatur di wrapper (lihat Home.jsx)
    <section className="py-6 px-4 md:px-6">
      <div className="max-w-screen-xl mx-auto px-2 md:px-4 py-10">

        {/* Judul */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B1B12] leading-tight">
              What are you craving today?
            </h2>
            <p className="text-sm text-[#66564A] mt-2">Explore our delicious food categories</p>
          </div>

          <Link
            to="/services"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#2B1B12] hover:text-[#8B6040] transition"
          >
            View All <Arrow />
          </Link>
        </div>

        {/* Kategori */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10">
          {categories.map((c) => (
            <Link
              key={c.name}
              to={`/services?category=${c.name.toLowerCase()}`}
              className="group flex flex-col items-center text-center focus:outline-none"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-[#F8D9A9] ring-4 ring-white shadow-[0_12px_25px_-10px_rgba(120,80,30,0.45)] group-focus-visible:ring-[#F4AE3D] transition">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-4 font-semibold text-[#2B1B12]">{c.name}</h3>
              <p className="text-xs text-[#66564A] mt-0.5">{c.items} items</p>

              <span className="mt-2 inline-flex items-center gap-1 text-xs text-[#8B6040] group-hover:gap-2 transition-all">
                Shop Now <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Category