
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const categories = ['Main Course', 'Snack', 'Seasonal Menu']

const API_URL = 'http://localhost:3000/api/menu'
const IMAGE_URL = 'http://localhost:3000/uploads/'

const FormAdminPage = () => {
  const [menus, setMenus] = useState([])

  const [formData, setFormData] = useState({
    nama: '',
    kategori: '',
    harga: '',
    gambar: null
  })

  const [preview, setPreview] = useState(null)
  const [editingId, setEditingId] = useState(null)

  const [loading, setLoading] = useState(false)
  const [loadingMenus, setLoadingMenus] = useState(true)

  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  // Membersihkan URL preview gambar baru
  useEffect(() => {
    return () => {
      if (preview?.startsWith('blob:')) {
        URL.revokeObjectURL(preview)
      }
    }
  }, [preview])

  // get all menu
  const fetchMenus = async () => {
    try {
      const response = await axios.get(API_URL)
      setMenus(response.data)
    } catch (error) {
      console.error('Gagal mengambil data menu:', error)
    } finally {
      setLoadingMenus(false)
    }
  }

  useEffect(() => {
    fetchMenus()
  }, [])

  // Mengisi form
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // take image
  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (!file) return

    const allowedTypes = ['image/png', 'image/jpeg']

    if (!allowedTypes.includes(file.type)) {
      setMessage('Format gambar harus PNG atau JPG.')
      setMessageType('error')
      e.target.value = ''
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      setMessage('Ukuran gambar maksimal 2 MB.')
      setMessageType('error')
      e.target.value = ''
      return
    }

    setFormData((prev) => ({
      ...prev,
      gambar: file
    }))

    setPreview(URL.createObjectURL(file))
    setMessage('')
  }

  // reset form
  const resetForm = () => {
    setFormData({
      nama: '',
      kategori: '',
      harga: '',
      gambar: null
    })

    setPreview(null)
    setEditingId(null)
    setMessage('')
    setMessageType('')
  }

  // add & update menu
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!editingId && !formData.gambar) {
      setMessage('Silakan pilih gambar menu terlebih dahulu.')
      setMessageType('error')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const data = new FormData()

      data.append('nama', formData.nama)
      data.append('kategori', formData.kategori)
      data.append('harga', formData.harga)

      // Gambar hanya dikirim jika pengguna memilih gambar baru
      if (formData.gambar) {
        data.append('gambar', formData.gambar)
      }

      if (editingId) {
        // UPDATE MENU
        await axios.put(`${API_URL}/${editingId}`, data)

        setMessage('Menu berhasil diperbarui!')
      } else {
        // ADD MENU
        await axios.post(API_URL, data)

        setMessage('Menu berhasil ditambahkan!')
      }

      setMessageType('success')

      resetForm()
      e.target.reset()

      // Memperbarui tabel
      await fetchMenus()

    } catch (error) {
      console.error(
        'Error:',
        error.response?.data || error.message
      )

      setMessage(
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Terjadi kesalahan saat menyimpan menu.'
      )

      setMessageType('error')

    } finally {
      setLoading(false)
    }
  }

  // Memasukkan data menu ke form untuk diedit
  const handleEdit = (menu) => {
    setEditingId(menu.id)

    setFormData({
      nama: menu.nama,
      kategori: menu.kategori,
      harga: menu.harga,
      gambar: null
    })

    // Menampilkan gambar lama
    setPreview(
      menu.gambar
        ? `${IMAGE_URL}${menu.gambar}`
        : null
    )

    setMessage('')
    setMessageType('')

    // Kembali ke bagian form
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Menghapus menu
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      'Apakah kamu yakin ingin menghapus menu ini?'
    )

    if (!confirmDelete) return

    try {
      await axios.delete(`${API_URL}/${id}`)

      setMessage('Menu berhasil dihapus!')
      setMessageType('success')

      // Jika menu yang sedang diedit dihapus
      if (editingId === id) {
        resetForm()
      }

      await fetchMenus()

    } catch (error) {
      console.error(error)

      setMessage('Gagal menghapus menu.')
      setMessageType('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8ED]">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#2B1B12] mt-2">
              {editingId ? 'Update Menu' : 'Add New Menu'}
            </h1>

            <p className="text-gray-500 mt-3">
              {editingId
                ? 'Update your restaurant menu details.'
                : 'Add a new delicious menu to your restaurant.'}
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#F0DFC0] p-8">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Nama Menu */}
              <div>
                <label className="block text-sm font-semibold text-[#2B1B12] mb-2">
                  Menu Name
                </label>

                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Enter menu name"
                  required
                  className="w-full border border-[#E5D5BD] rounded-xl px-4 py-3 outline-none focus:border-[#F4AE3D] focus:ring-2 focus:ring-[#F4AE3D]/20"
                />
              </div>

              {/* Kategori */}
              <div>
                <label className="block text-sm font-semibold text-[#2B1B12] mb-2">
                  Category
                </label>

                <select
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#E5D5BD] rounded-xl px-4 py-3 outline-none focus:border-[#F4AE3D] bg-white"
                >
                  <option value="">Select category</option>

                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Harga */}
              <div>
                <label className="block text-sm font-semibold text-[#2B1B12] mb-2">
                  Price (Rupiah)
                </label>

                <input
                  type="number"
                  name="harga"
                  value={formData.harga}
                  onChange={handleChange}
                  placeholder="Example: 25000"
                  min="0"
                  required
                  className="w-full border border-[#E5D5BD] rounded-xl px-4 py-3 outline-none focus:border-[#F4AE3D] focus:ring-2 focus:ring-[#F4AE3D]/20"
                />
              </div>

              {/* Gambar */}
              <div>
                <label className="block text-sm font-semibold text-[#2B1B12] mb-2">
                  Menu Image
                </label>

                <label className="flex flex-col items-center justify-center w-full min-h-48 border-2 border-dashed border-[#E5D5BD] rounded-xl cursor-pointer hover:border-[#F4AE3D] transition p-4">

                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview menu"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <span className="text-4xl mb-3">📷</span>

                      <p className="text-sm font-medium text-[#2B1B12]">
                        Click to upload image
                      </p>

                      <p className="text-xs text-gray-400 mt-2">
                        PNG, JPG or JPEG (Max 2 MB)
                      </p>
                    </>
                  )}

                  <input
                    type="file"
                    name="gambar"
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                    required={!editingId}
                    className="hidden"
                  />
                </label>

                {editingId && (
                  <p className="text-xs text-gray-500 mt-2">
                    Pilih gambar baru jika ingin mengganti gambar lama.
                    Kosongkan jika ingin tetap menggunakan gambar lama.
                  </p>
                )}
              </div>

              {/* Notifikasi */}
              {message && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    messageType === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {message}
                </div>
              )}

              {/* Tombol */}
              <div className="flex gap-3">

                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#F4AE3D] text-[#2B1B12] font-bold py-3 rounded-xl hover:bg-[#E99B25] transition disabled:opacity-50"
                >
                  {loading
                    ? 'Saving...'
                    : editingId
                      ? 'Save Changes'
                      : 'Add Menu'}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-semibold hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                )}

              </div>

            </form>
          </div>

          {/* Tabel Semua Menu */}
          <div className="mt-12">

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#2B1B12]">
                All Menu
              </h2>

              <p className="text-gray-500 mt-2">
                Manage all menus available in your restaurant.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-[#F0DFC0] overflow-hidden">

              <div className="overflow-x-auto">

                <table className="w-full text-left">

                  <thead className="bg-[#FFF8ED]">
                    <tr>
                      <th className="px-6 py-4 text-sm font-semibold">No</th>
                      <th className="px-6 py-4 text-sm font-semibold">Menu Name</th>
                      <th className="px-6 py-4 text-sm font-semibold">Price</th>
                      <th className="px-6 py-4 text-sm font-semibold">Category</th>
                      <th className="px-6 py-4 text-sm font-semibold text-center">Action</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#F0DFC0]">

                    {loadingMenus ? (
                      <tr>
                        <td colSpan="5" className="text-center py-8 text-gray-500">
                          Loading data...
                        </td>
                      </tr>
                    ) : menus.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-8 text-gray-500">
                          No menu available.
                        </td>
                      </tr>
                    ) : (
                      menus.map((menu, index) => (
                        <tr
                          key={menu.id}
                          className="hover:bg-[#FFFDF8] transition"
                        >

                          <td className="px-6 py-4 text-gray-600">
                            {index + 1}
                          </td>

                          <td className="px-6 py-4 font-medium text-[#2B1B12]">
                            {menu.nama}
                          </td>

                          <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                            Rp {Number(menu.harga).toLocaleString('id-ID')}
                          </td>

                          <td className="px-6 py-4 text-gray-600">
                            {menu.kategori}
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex justify-center gap-2">

                              <button
                                type="button"
                                onClick={() => handleEdit(menu)}
                                className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition"
                              >
                                Update
                              </button>

                              <button
                                type="button"
                                onClick={() => handleDelete(menu.id)}
                                className="px-3 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition"
                              >
                                Delete
                              </button>

                            </div>
                          </td>

                        </tr>
                      ))
                    )}

                  </tbody>

                </table>

              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FormAdminPage
