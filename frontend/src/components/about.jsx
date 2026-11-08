import React from 'react'
import ActionButton from '../components/ActionButton'
import bolen from '../assets/images/bolen.png'

const stats = [
  { value: '2020', label: 'Awal ide usaha' },
  { value: '2022', label: 'Kembali aktif' },
  { value: '4+', label: 'Jenis camilan' },
]

const About = () => {
  return (
    <section className="px-4 md:px-6 py-6">
      <div className="max-w-screen-xl mx-auto px-2 md:px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_auto] items-center gap-8 lg:gap-12">

          {/* Gambar */}
          <div className="flex items-center justify-center h-64 md:h-[300px] rounded-[8px] bg-gradient-to-br from-[#FFF6E6] to-[#F9DDAE] overflow-hidden">
            <img
              src={bolen}
              alt="Camilan buatan Alyka Food"
              loading="lazy"
              className="w-full h-full object-contain p-4 drop-shadow-[0_20px_25px_rgba(60,30,10,0.35)]"
            />
          </div>

          {/* Teks */}
          <div>
            <p className="text-[11px] tracking-[0.35em] font-medium text-[#2B1B12] mb-4">
              CERITA KAMI
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B1B12] leading-tight mb-4">
              Dari Langkah Kecil,
              <br />
              Jadi Perjalanan
            </h2>

            <p className="text-[#3E2F25] text-sm md:text-base leading-relaxed mb-6 max-w-md">
              Alyka Food berawal dari Camp Nasional program beasiswa pada 2020. Dengan semangat “Snack Everywhere”, kami ingin menemani setiap momenmu dengan camilan yang menyenangkan.
            </p>

            <ActionButton to="/about">
              Selengkapnya
            </ActionButton>
          </div>

          {/* Statistik */}
          <div className="flex lg:flex-col gap-6 lg:gap-0 lg:divide-y divide-[#F0DFC0] lg:border-l border-[#F0DFC0] lg:pl-10">
            {stats.map((s) => (
              <div key={s.label} className="flex-1 lg:py-5 first:lg:pt-0 last:lg:pb-0">
                <p className="font-serif text-3xl font-bold text-[#2B1B12]">{s.value}</p>
                <p className="text-xs text-[#66564A] mt-1">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About