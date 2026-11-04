import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import menus from '../data/menu'

const categories = ['All', 'Main Course', 'Snack', 'Sweet', 'Health']

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredMenus = activeCategory === 'All'
    ? menus
    : menus.filter((menu) => menu.category === activeCategory)

  return (
    <div>
      <Navbar />

      <section className="pt-32 pb-12 px-6">
        <div className="max-w-screen-xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#2B1B12]">
              Our Menu
            </h1>
            <p className="text-gray-500 mt-2">
              Explore our delicious food selection.
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  activeCategory === category
                    ? 'bg-[#F4AE3D] text-white shadow-md'
                    : 'bg-[#FFF8ED] text-[#2B1B12] hover:bg-[#F4AE3D] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMenus.map((menu) => (
              <article
                key={menu.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#F0DFC0] shadow-md hover:-translate-y-1 transition duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={menu.image}
                    alt={menu.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-4">
                  <p className="text-xs text-[#8B6040]">
                    {menu.category}
                  </p>

                  <h3 className="font-semibold text-lg text-[#2B1B12] mt-1">
                    {menu.name}
                  </h3>

                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-[#F4AE3D]">
                      ${menu.price}
                    </span>

                    <button className="bg-[#2B1B12] text-white px-4 py-2 rounded-full text-xs hover:bg-[#8B6040] transition">
                      Order Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredMenus.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              No menu available in this category.
            </p>
          )}

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MenuPage