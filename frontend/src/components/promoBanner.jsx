import React from 'react'
import { Link } from 'react-router-dom'
import ActionButton from "../components/ActionButton";

const PromoBanner = () => {
  return (
    <section className="py-6 px-4 md:px-6">
      <div className="relative max-w-screen-xl mx-auto overflow-hidden rounded-[8px] bg-gradient-to-r from-[#FFF3DF] via-[#FCE3BB] to-[#F6CF93] shadow-[0_20px_50px_-25px_rgba(120,80,30,0.35)]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* Teks */}
          <div className="relative z-10 p-8 md:p-14">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2B1B12] leading-[1.08] mb-5">
              Healthy Choices
              <br />
              Delivered
            </h2>

            <p className="text-[#3E2F25] text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              Fresh, nutritious and delicious meals for a better you. Fresh ingredients, amazing taste, and convenient delivery.
            </p>

            <ActionButton to="/services">
              Order Healthy
            </ActionButton>
          </div>

          {/* Gambar: memudar ke kiri supaya menyatu dengan gradient */}
          <div className="relative h-64 md:h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000"
              alt="Fresh healthy salad bowl"
              loading="lazy"
              className="w-full h-full object-cover md:[mask-image:linear-gradient(to_right,transparent,black_35%)] [mask-image:linear-gradient(to_bottom,transparent,black_30%)]"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default PromoBanner