
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import aboutAlyka from "../assets/images/about-alyka.jpg";


const journey = [
  {
    number: "01",
    year: "2020",
    title: "The Beginning",
    description:
      "AlykaFood mulai dirintis melalui pengalaman mengikuti kegiatan Camp Nasional dari salah satu program beasiswa. Momen tersebut menjadi awal munculnya ide dan semangat untuk membangun sebuah usaha kuliner.",
  },
  {
    number: "02",
    year: "2022",
    title: "Growing Together",
    description:
      "Setelah melalui masa perintisan, AlykaFood kembali aktif pada tahun 2022. Kami mulai mengembangkan produk, memperkenalkan usaha kepada pelanggan, dan membangun perjalanan bisnis secara bertahap.",
  },
];

const commitments = [
  {
    icon: "🍪",
    title: "Quality",
    description:
      "Terus berupaya menghadirkan produk yang menarik dengan memperhatikan kualitas.",
  },
  {
    icon: "💛",
    title: "Happiness",
    description:
      "Menghadirkan camilan yang dapat menemani momen menyenangkan bersama orang tersayang.",
  },
  {
    icon: "🌱",
    title: "Growth",
    description:
      "Terus belajar, berinovasi, dan berkembang menjadi usaha yang lebih baik.",
  },
];

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFFCF5] text-[#38251C]">

        {/* ================= HERO SECTION ================= */}
         <section className="px-6 pt-24 pb-20 md:px-16 md:pt-28 md:pb-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
 
            {/* Hero Text */}
            <div>
              <p className="mb-5 text-sm font-semibold tracking-[5px] text-[#C88B32]">
                GET TO KNOW US
              </p>

              <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
                Our Story,
                <span className="block text-[#D99A36]">
                  Our Passion.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
                Berawal dari sebuah kesempatan sederhana, tumbuh menjadi
                perjalanan usaha yang penuh cerita. Selamat datang di
                AlykaFood, tempat setiap camilan menghadirkan kebahagiaan.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#D99A36]" />

                <p className="font-semibold tracking-wider text-[#A56B22]">
                  SNACK EVERYWHERE
                </p>
              </div>
            </div>

            {/* Hero Image */}
<div className="relative">
  <div className="absolute inset-0 rotate-6 rounded-[45%] bg-[#F9DDAA]" />

  <div className="relative rounded-[40px] bg-[#FCE9C9] p-5 shadow-xl md:p-8">
    <img
      src={aboutAlyka}
      alt="AlykaFood Products"
      className="h-[320px] w-full rounded-[30px] object-cover md:h-[420px]"
    />

    <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-5 shadow-lg">
      <p className="text-3xl font-bold text-[#D99A36]">
        2020
      </p>
      <p className="text-xs text-gray-500">
        Where our story began
      </p>
    </div>
  </div>
</div>

          </div>
        </section>


        {/* ================= ABOUT US SECTION ================= */}
        <section className="bg-[#FFF3DF] px-6 py-20 md:px-16">
          <div className="mx-auto max-w-5xl text-center">

            <p className="mb-4 text-sm font-semibold tracking-[5px] text-[#C88B32]">
              ABOUT ALYKAFOOD
            </p>

            <h2 className="mb-8 font-serif text-3xl font-bold md:text-5xl">
              More Than Just{" "}
              <span className="text-[#D99A36]">Snacks</span>
            </h2>

            <div className="space-y-5 text-base leading-8 text-gray-700 md:text-lg">
              <p>
                AlykaFood pertama kali hadir pada tahun 2020, berawal dari
                pengalaman mengikuti kegiatan Camp Nasional yang
                diselenggarakan melalui salah satu program beasiswa.
                Siapa sangka, sebuah kegiatan yang awalnya menjadi ruang
                untuk belajar, bertemu orang baru, dan mengembangkan diri
                justru menjadi titik awal lahirnya sebuah ide usaha di
                bidang kuliner.
              </p>

              <p>
                Dari pengalaman tersebut, muncul ketertarikan untuk
                mengembangkan usaha makanan ringan yang tidak hanya
                menawarkan produk, tetapi juga menghadirkan pengalaman
                menikmati camilan yang menyenangkan.
              </p>

              <p>
                Setelah melalui tahap awal perintisan, pada tahun 2022
                AlykaFood kembali aktif dan terus berproses hingga saat ini.
                Berawal dari langkah sederhana, kami berupaya membangun
                usaha yang mampu menghadirkan berbagai pilihan camilan
                untuk menemani beragam momen pelanggan.
              </p>
            </div>

          </div>
        </section>


        {/* ================= JOURNEY SECTION ================= */}
        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl">

            {/* Section Heading */}
            <div className="mb-14 text-center">
              <p className="mb-4 text-sm font-semibold tracking-[5px] text-[#C88B32]">
                OUR JOURNEY
              </p>

              <h2 className="font-serif text-3xl font-bold md:text-5xl">
                Every Journey Has{" "}
                <span className="text-[#D99A36]">a Beginning</span>
              </h2>

              <p className="mt-4 text-gray-500">
                Setiap langkah kecil memiliki cerita dan makna tersendiri.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid gap-8 md:grid-cols-2">

              {journey.map((item) => (
                <div
                  key={item.year}
                  className="rounded-3xl border border-[#F4E6D0] bg-white p-8 shadow-sm transition hover:shadow-lg"
                >
                  <div className="mb-5 flex items-center gap-4">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF0D4] text-2xl font-bold text-[#D99A36]">
                      {item.number}
                    </div>

                    <div>
                      <p className="text-2xl font-bold text-[#D99A36]">
                        {item.year}
                      </p>

                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>
                    </div>

                  </div>

                  <p className="leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}

              {/* Present */}
              <div className="rounded-3xl bg-[#FBE8C7] p-8 md:col-span-2 md:p-10">
                <div className="flex flex-col items-center gap-6 md:flex-row">

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white text-3xl">
                    ❤️
                  </div>

                  <div>
                    <p className="mb-2 text-2xl font-bold text-[#B77924]">
                      Today & Beyond
                    </p>

                    <h3 className="mb-3 font-serif text-2xl font-bold">
                      Still Growing, Still Serving Happiness.
                    </h3>

                    <p className="leading-7 text-gray-700">
                      Hingga saat ini, AlykaFood terus berproses dan
                      berkembang dengan semangat menghadirkan berbagai
                      pilihan camilan. Kami percaya bahwa perjalanan ini
                      bukan hanya tentang membangun bisnis, tetapi juga
                      tentang menciptakan pengalaman dan kebahagiaan
                      melalui setiap produk yang kami hadirkan.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ================= OUR COMMITMENT SECTION ================= */}
        <section className="bg-[#FFF3DF] px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl text-center">

            <p className="mb-4 text-sm font-semibold tracking-[5px] text-[#C88B32]">
              WHAT WE BELIEVE
            </p>

            <h2 className="mb-5 font-serif text-3xl font-bold md:text-5xl">
              Our Commitment
            </h2>

            <p className="mx-auto mb-12 max-w-2xl leading-7 text-gray-600">
              Bagi kami, makanan bukan sekadar sesuatu yang dinikmati,
              tetapi juga bagian dari kebahagiaan, kebersamaan, dan
              cerita dalam keseharian.
            </p>

            {/* Commitment Cards */}
            <div className="grid gap-7 sm:grid-cols-3">

              {commitments.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="mb-4 text-4xl">
                    {item.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= CLOSING SECTION ================= */}
        <section className="px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">

            <p className="mb-5 text-sm font-semibold tracking-[5px] text-[#C88B32]">
              A LITTLE BITE, A LOT OF HAPPINESS
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
              Made with Love,
              <span className="block text-[#D99A36]">
                Shared with Happiness.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Kami percaya bahwa setiap usaha besar selalu dimulai
              dari langkah kecil. Terima kasih telah menjadi bagian
              dari perjalanan AlykaFood.
            </p>

            <a
              href="/menu"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F4AE3D] px-8 py-4 font-semibold text-[#38251C] shadow-md transition hover:bg-[#DE982A]"
            >
              Explore Our Menu
              <span className="text-xl">→</span>
            </a>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
};

export default AboutUs;
