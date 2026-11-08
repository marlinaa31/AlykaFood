import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bolenCoklatKeju from '../assets/images/bolen.png'
import risolMayo from '../assets/images/smokebeef.jpg'
import riceBowl from '../assets/images/ricebowl.jpg'
import risolCoklat from '../assets/images/risolcoklat.jpg'

 const WA_NUMBER = '6285381992125'

const restaurants = [
  {
    name: 'Bolen Coklat Keju',
    category: 'Sweet',
    rating: '4.8',
    price: 'Rp30.000',
    image: bolenCoklatKeju,
  },
  {
    name: 'Risol Mayo Smoke Beef',
    category: 'Snack',
    rating: '4.9',
    price: 'Rp15.000',
    image: risolMayo,
  },
  {
    name: 'Rice Bowl Ayam Sambal Matah',
    category: 'Main Course',
    rating: '4.7',
    price: 'Rp25.000',
    image: riceBowl,
  },
  {
    name: 'Risol Coklat',
    category: 'Snack',
    rating: '4.8',
    price: 'Rp12.000',
    image: risolCoklat,
  },
]

const Arrow = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
  </svg>
)

const RestaurantCard = ({ restaurant }) => {
  const [liked, setLiked] = useState(false)

  const orderLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Halo Alyka Food, saya mau pesan ${restaurant.name} (${restaurant.price}).`
  )}`

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden border border-[#F0DFC0] shadow-[0_12px_28px_-16px_rgba(120,80,30,0.4)] hover:-translate-y-1 transition duration-300">

      {/* Gambar + tombol favorit */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        <button
          type="button"
          aria-label={liked ? 'Hapus dari favorit' : 'Tambah ke favorit'}
          aria-pressed={liked}
          onClick={() => setLiked((v) => !v)}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/95 shadow-md flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4AE3D]"
        >
          <svg
            className={`w-4 h-4 transition ${liked ? 'text-red-500' : 'text-[#2B1B12]'}`}
            viewBox="0 0 24 24"
            fill={liked ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-[#2B1B12]">{restaurant.name}</h3>
        <p className="text-xs text-[#66564A] mt-0.5">{restaurant.category}</p>

        <div className="flex items-center gap-1.5 mt-3 text-xs text-[#2B1B12]">
          <svg className="w-4 h-4 text-[#F4AE3D]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3 6.5 7 .9-5.2 4.8 1.4 7L12 17.8 5.8 21.2l1.4-7L2 9.4l7-.9L12 2z" />
          </svg>
          <span className="font-semibold">{restaurant.rating}</span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-semibold text-[#8B6040]">{restaurant.price}</span>

          {/* after:absolute inset-0 membuat seluruh kartu bisa diklik */}
          <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`Pesan ${restaurant.name} via WhatsApp`}
            className="inline-flex items-center gap-1 text-xs font-medium text-[#2B1B12] group-hover:text-[#8B6040] group-hover:gap-2 transition-all after:absolute after:inset-0 focus:outline-none focus-visible:after:ring-2 focus-visible:after:ring-[#F4AE3D] after:rounded-2xl"
          >
            Pesan <Arrow />
          </a>
        </div>
      </div>
    </article>
  )
}

const PopularRestaurants = () => {
  return (
    <section className="py-6 px-4 md:px-6">
      <div className="max-w-screen-xl mx-auto px-2 md:px-4 py-10">

        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] tracking-[0.35em] font-medium text-[#2B1B12] mb-6">
              BEST SELLERS
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B1B12] leading-tight">
              Our Popular Menu
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2B1B12] hover:text-[#8B6040] transition shrink-0"
          >
            View All <Arrow />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {restaurants.map((r) => (
            <RestaurantCard key={r.name} restaurant={r} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularRestaurants