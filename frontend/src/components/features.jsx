import React from 'react'

const features = [
  {
    title: 'Pengiriman Cepat',
    description: 'Pesananmu diantar dengan cepat dan aman sampai depan pintu.',
    icon: (
      <path d="M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z" />
    ),
  },
  {
    title: 'Bahan Pilihan',
    description: 'Dibuat dari bahan berkualitas untuk rasa yang selalu terjaga.',
    icon: (
      <>
        <path d="M5 19c0-8 5-14 14-14 0 9-6 14-14 14z" />
        <path d="M5 19c3-4 6-7 10-9" />
      </>
    ),
  },
  {
    title: 'Pesan Mudah',
    description: 'Pesan menu favoritmu lewat WhatsApp, cukup beberapa langkah.',
    icon: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2.5" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    title: 'Pembayaran Aman',
    description: 'Pilihan pembayaran yang aman dan praktis untuk setiap pesanan.',
    icon: (
      <>
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
]

const Features = () => {
  return (
    <section className="py-6 px-4 md:px-6">
      <div className="max-w-screen-xl mx-auto px-2 md:px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#F0DFC0]">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4 lg:px-6 first:lg:pl-0 last:lg:pr-0">
              <span className="shrink-0 w-12 h-12 rounded-full bg-[#F4AE3D]/20 text-[#8B6040] flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {f.icon}
                </svg>
              </span>

              <div>
                <h3 className="font-semibold text-[#2B1B12]">{f.title}</h3>
                <p className="text-xs text-[#66564A] leading-relaxed mt-1">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features