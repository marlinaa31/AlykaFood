import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const categories = ['All', 'Main Course', 'Snack', 'Seasonal Menu']

const MenuPage = () => {
  const [menus, setMenus] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Mengambil data menu dari database
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/menu')
        setMenus(response.data)
      } catch (error) {
        console.error('Gagal mengambil menu:', error)
        setError('Gagal mengambil data menu.')
      } finally {
        setLoading(false)
      }
    }

    fetchMenus()
  }, [])

  // Filter berdasarkan kategori
  const filteredMenus = activeCategory === 'All'
    ? menus
    : menus.filter((menu) => menu.kategori === activeCategory)

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

          {/* Loading */}
          {loading && (
            <p className="text-center text-gray-500 py-10">
              Loading menu...
            </p>
          )}

          {/* Error */}
          {!loading && error && (
            <p className="text-center text-red-500 py-10">
              {error}
            </p>
          )}

          {/* Menu Cards */}
          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredMenus.map((menu) => (
                  <article
                    key={menu.id}
                    className="bg-white rounded-2xl overflow-hidden border border-[#F0DFC0] shadow-md hover:-translate-y-1 transition duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={`http://localhost:3000/uploads/${menu.gambar}`}
                        alt={menu.nama}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="p-4">
                      <p className="text-xs text-[#8B6040]">
                        {menu.kategori}
                      </p>

                      <h3 className="font-semibold text-lg text-[#2B1B12] mt-1">
                        {menu.nama}
                      </h3>

                      <div className="flex justify-between items-center mt-4">
                        <span className="font-bold text-[#F4AE3D]">
                          Rp {Number(menu.harga).toLocaleString('id-ID')}
                        </span>

                        <a
                          href="https://api.whatsapp.com/send/?phone=6285381992152&text&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#2B1B12] text-white px-4 py-2 rounded-full text-xs hover:bg-[#F4AE3D] transition inline-block"
                          >Order Now
                        </a>
                        
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
            </>
          )}

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MenuPage