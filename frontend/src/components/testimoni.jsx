import React, { useRef } from 'react'

const reviews = [
  {
    name: 'Nama Pelanggan 1',
    city: 'Banda Aceh',
    text: 'Isi ulasan pelanggan pertama. Ganti dengan ulasan asli dari pelangganmu.',
    rating: 5,
  },
  {
    name: 'Nama Pelanggan 2',
    city: 'Banda Aceh',
    text: 'Isi ulasan pelanggan kedua. Ganti dengan ulasan asli dari pelangganmu.',
    rating: 5,
  },
  {
    name: 'Nama Pelanggan 3',
    city: 'Aceh Besar',
    text: 'Isi ulasan pelanggan ketiga. Ganti dengan ulasan asli dari pelangganmu.',
    rating: 5,
  },
  {
    name: 'Nama Pelanggan 4',
    city: 'Banda Aceh',
    text: 'Isi ulasan pelanggan keempat. Ganti dengan ulasan asli dari pelangganmu.',
    rating: 5,
  },
]

const Star = ({ filled }) => (
  <svg
    className={`w-3.5 h-3.5 ${filled ? 'text-[#F4AE3D]' : 'text-[#F0DFC0]'}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2l3 6.5 7 .9-5.2 4.8 1.4 7L12 17.8 5.8 21.2l1.4-7L2 9.4l7-.9L12 2z" />
  </svg>
)

const NavButton = ({ label, onClick, children }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="w-9 h-9 rounded-full bg-white border border-[#F0DFC0] text-[#2B1B12] flex items-center justify-center hover:bg-[#F4AE3D] hover:border-[#F4AE3D] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4AE3D]"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  </button>
)

const Testimonials = () => {
  const listRef = useRef(null)

  const scroll = (dir) => {
    const el = listRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

return (
  <section className="py-6 px-4 md:px-6">
    <div className="max-w-screen-xl mx-auto px-2 md:px-4 py-10">

      <div className="text-center mb-8">
        <p className="text-[11px] tracking-[0.35em] font-medium text-[#2B1B12] mb-6">
          ULASAN
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B1B12] leading-tight">
          Kata Pelanggan Kami
        </h2>
      </div>

      <div
        ref={listRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r) => (
          <article
            key={r.name}
            className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-white rounded-[8px] border border-[#F0DFC0] shadow-[0_12px_28px_-16px_rgba(120,80,30,0.4)] p-6 flex flex-col"
          >
            <p className="text-sm text-[#3E2F25] leading-relaxed flex-1">“{r.text}”</p>

            <div className="flex items-center gap-3 mt-6">
              <span className="w-11 h-11 rounded-full bg-[#F4AE3D]/25 text-[#8B6040] font-semibold flex items-center justify-center shrink-0">
                {r.name.charAt(0)}
              </span>

              <div>
                <h3 className="text-sm font-semibold text-[#2B1B12]">{r.name}</h3>
                <p className="text-xs text-[#66564A]">{r.city}</p>
                <div className="flex gap-0.5 mt-1" aria-label={`Rating ${r.rating} dari 5`}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} filled={n <= r.rating} />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        <NavButton label="Ulasan sebelumnya" onClick={() => scroll(-1)}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m7-7l-7 7 7 7" />
        </NavButton>
        <NavButton label="Ulasan berikutnya" onClick={() => scroll(1)}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
        </NavButton>
      </div>
    </div>
  </section>
)
}

export default Testimonials