import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const restaurants = [
  {
    name: 'Burger House',
    category: 'Burgers & Fast Food',
    rating: '4.8',
    time: '20-30 min',
    price: '$$',
    delivery: 'Free delivery over $20',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600',
  },
  {
    name: 'Pizza Palace',
    category: 'Italian & Pizza',
    rating: '4.9',
    time: '25-35 min',
    price: '$$',
    delivery: 'Free delivery over $25',
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600',
  },
  {
    name: 'Sushi Corner',
    category: 'Japanese Food',
    rating: '4.7',
    time: '30-40 min',
    price: '$$$',
    delivery: 'Free delivery over $15',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600',
  },
  {
    name: 'Healthy Bowl',
    category: 'Healthy & Salads',
    rating: '4.8',
    time: '15-25 min',
    price: '$$',
    delivery: 'Free delivery over $20',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600',
  },
]

const Arrow = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
  </svg>
)

const RestaurantCard = ({ restaurant }) => {
  const [liked, setLiked] = useState(false)

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#F0DFC0] shadow-[0_12px_28px_-16px_rgba(120,80,30,0.4)] hover:-translate-y-1 transition duration-300">

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
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 shadow-md flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4AE3D]"
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

        <div className="flex items-center gap-1.5 mt-2 text-xs text-[#66564A]">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="8.5" />
            <path d="M12 7.5V12l3 2" />
          </svg>
          {restaurant.time}
        </div>

        <div className="flex items-end justify-between mt-2">
          <p className="text-xs text-[#66564A]">{restaurant.delivery}</p>
          <span className="text-xs font-semibold text-[#8B6040]">{restaurant.price}</span>
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B1B12] leading-tight">
              Popular Restaurants
            </h2>
            <p className="text-sm text-[#66564A] mt-2">
              Discover the most loved restaurants around you.
            </p>
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