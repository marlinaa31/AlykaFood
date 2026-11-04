import React from 'react'
import risol from '../assets/images/risol.png'

// Pakai PNG tanpa background agar shadow mengikuti bentuk makanan.
const FOOD_IMG = risol

const features = [
  {
    label: 'Pengiriman Cepat',
    icon: (
      <>
        <circle cx="6" cy="17" r="2.5" />
        <circle cx="18" cy="17" r="2.5" />
        <path d="M8.5 17h5l2-7h3M6 17l-1-6h6M13 10l-1.5-3H9" />
      </>
    ),
  },
  {
    label: 'Bahan Pilihan',
    icon: (
      <>
        <path d="M5 19c0-8 5-14 14-14 0 9-6 14-14 14z" />
        <path d="M5 19c3-4 6-7 10-9" />
      </>
    ),
  },
  {
    label: 'Pembayaran Aman',
    icon: (
      <>
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
]

const Leaf = ({ className = '' }) => (
  <svg viewBox="0 0 100 140" className={className} aria-hidden="true">
    <path d="M50 5C90 30 100 80 50 135 0 80 10 30 50 5z" fill="#4F7A2B" />
    <path d="M50 12v118" stroke="#3B5E1F" strokeWidth="2" />
    <path
      d="M50 45l-20-12M50 70l-28-16M50 95l-22-12M50 45l20-12M50 70l28-16M50 95l22-12"
      stroke="#3B5E1F"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
)

const Sparks = ({ className, flip }) => (
  <svg
    className={`absolute top-0 w-5 h-8 text-[#49372B] ${className}`}
    viewBox="0 0 20 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d={flip ? 'M6 2l4 8M14 16l4 4M4 20l6 2' : 'M14 2l-4 8M6 16l-4 4M16 20l-6 2'} />
  </svg>
)

const Hero = () => {
  return (
    // Tanpa background sendiri: warna halaman diatur di wrapper (lihat Home.jsx)
    <section className="pt-24 pb-6 px-4 md:px-6">
      <div className="relative max-w-screen-xl mx-auto overflow-hidden rounded-[8px] bg-gradient-to-br from-[#FFF6E6] via-[#FDEBCB] to-[#F9DDAE] shadow-[0_20px_50px_-20px_rgba(120,80,30,0.35)]">

        {/* Blob di belakang makanan */}
        <div className="absolute -top-10 right-[-6%] w-[62%] h-[115%] bg-[#F4C98A]/70 rounded-[48%_52%_40%_60%/55%_45%_55%_45%] rotate-[8deg] hidden lg:block" />
        <div className="absolute top-[18%] right-[8%] w-[45%] h-[70%] bg-[#F8D9A9]/80 rounded-[50%] blur-2xl hidden lg:block" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center min-h-[480px] px-6 md:px-10">

          {/* Kiri */}
          <div className="relative z-10 py-10">
            <p className="text-[11px] tracking-[0.35em] font-medium text-[#2B1B12] mb-6">
              CAMILAN & KUE PILIHAN
            </p>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#2B1B12] leading-[1.02] mb-6">
              Momen Manis
              <br />
              Dimulai
              <br />
              dari Sini
            </h1>

            <p className="text-[#3E2F25] text-sm md:text-base leading-relaxed max-w-sm mb-8">
              Camilan buatan rumah dengan bahan pilihan, untuk setiap momen manis bersama orang tersayang.
            </p>

            {/* Tombol menu */}
            <div className="max-w-md">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-[#F4AE3D] hover:bg-[#E99B25] text-[#2B1B12] font-medium rounded-full pl-6 pr-2 py-2 text-sm shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B1B12]"
              >
                Lihat Semua Menu
                <span className="bg-[#2B1B12] text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Fitur layanan */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-9">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5 text-xs text-[#49372B]">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kanan */}
          <div className="relative flex items-center justify-center min-h-[350px] lg:min-h-[480px]">
            {/* Bayangan oval di bawah makanan */}
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[75%] h-12 bg-[#3B2412]/40 rounded-[50%] blur-2xl" />

            <img
              src={FOOD_IMG}
              alt="Risol buatan Alyka Food"
              className="relative z-10 w-full h-[350px] md:h-[430px] object-contain drop-shadow-[0_25px_30px_rgba(60,30,10,0.35)]"
            />

            <Leaf className="absolute z-20 -right-6 top-[18%] w-20 md:w-28 rotate-[35deg] drop-shadow-md" />
            <Leaf className="absolute z-20 -right-4 bottom-[6%] w-24 md:w-32 -rotate-[25deg] drop-shadow-md" />

            <div
              className="absolute top-6 left-[8%] md:left-[12%] z-20 -rotate-[10deg] text-[#49372B] text-2xl md:text-3xl leading-tight"
              style={{ fontFamily: "'Caveat', 'Brush Script MT', cursive" }}
            >
              Manis
              <br />
              &amp; Lezat!
              <Sparks className="-left-6" />
              <Sparks className="-right-8" flip />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero