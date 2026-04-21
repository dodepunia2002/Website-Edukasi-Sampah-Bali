
import { useEffect, useRef, useState } from "react"
 // import Image from "next/image"
import { Building2, Recycle, Waves, Sprout, ArrowRight } from "lucide-react"

const programs = [
  {
    icon: Building2,
    name: "Bank Sampah",
    status: "Aktif",
    statusColor: "bg-[#25A863]/20 text-[#90E293]",
    borderColor: "border-[#25A863]/30",
    desc: "Kumpulkan sampah yang bisa ditukar dengan uang atau produk. 1.000+ unit aktif di seluruh Bali.",
    stats: [
      { value: "1.000+", label: "Unit Aktif", color: "text-[#90E293]" },
      { value: "45rb+", label: "Peserta", color: "text-[#90E293]" },
    ],
    btnColor: "bg-[#25A863]",
    image: "/images/bank-sampah.jpg",
    imageAlt: "Balinese residents in Banjar Dahlia, Peguyangan, waste bank during a waste weighing community activity, realistic lighting.",
  },
  {
    icon: Recycle,
    name: "TPS3R Bali",
    status: "Berkembang",
    statusColor: "bg-[#00BCBC]/20 text-[#00BCBC]",
    borderColor: "border-[#00BCBC]/30",
    desc: "Tempat Pengelolaan Sampah Terpadu Reduce, Reuse, Recycle di tingkat desa seluruh Bali.",
    stats: [
      { value: "124", label: "Unit Aktif", color: "text-[#00BCBC]" },
      { value: "32rb+", label: "Peserta", color: "text-[#00BCBC]" },
    ],
    btnColor: "bg-[#00BCBC]",
    image: "/images/tps3r-bali.jpg",
    imageAlt: "Foto asli fasilitas TPS3R di Desa Keliki, Gianyar, Bali yang menggunakan energi surya sebagai percontohan nasional.",
  },
  {
    icon: Waves,
    name: "Bali Clean Ocean",
    status: "Aktif",
    statusColor: "bg-[#2A87ED]/20 text-[#90BCFF]",
    borderColor: "border-[#2A87ED]/30",
    desc: "Program pembersihan sampah laut & pesisir pantai bersama nelayan lokal dan wisatawan.",
    stats: [
      { value: "52", label: "Pantai", color: "text-[#90BCFF]" },
      { value: "18rb+", label: "Relawan", color: "text-[#90BCFF]" },
    ],
    btnColor: "bg-[#2A87ED]",
    image: "/images/beach-cleanup.jpg",
    imageAlt: "Action photo of beach cleanup in Kedonganan, Bali, volunteers filling large plastic bags with waste, documentary style, community activism.",
  },
  {
    icon: Sprout,
    name: "Komposting Desa",
    status: "Baru",
    statusColor: "bg-[#FF8D29]/20 text-[#FF8D29]",
    borderColor: "border-[#FF8D29]/30",
    desc: "Pengolahan sampah organik jadi kompos di tingkat banjar. Program berbasis komunitas lokal.",
    stats: [
      { value: "214", label: "Banjar", color: "text-[#FF8D29]" },
      { value: "28rb+", label: "Peserta", color: "text-[#FF8D29]" },
    ],
    btnColor: "bg-[#FF8D29]",
    image: "/images/komposting-desa-alt.jpg",
    imageAlt: "Foto asli kegiatan pembuatan kompos organik oleh komunitas lokal di Desa Adat Cemenggaon, Bali.",
  },
]

export function Programs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="program" className="bg-[#0D2E1F] text-white py-24 px-6 md:px-10 scroll-mt-[72px]" ref={sectionRef}>
      <div className="max-w-[1320px] mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-1.5 bg-[#90E293]/15 text-[#90E293] text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 tracking-wide">
            <span>🏆</span> Inisiatif Nyata
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-white text-balance">
            Program Aktif
            <br />
            di Bali
          </h2>
          <p className="text-white/60 text-base leading-relaxed mt-3 max-w-[560px]">
            Berbagai inisiatif nyata untuk menjaga Bali tetap bersih dan berkelanjutan bagi generasi
            mendatang.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {programs.map((program, i) => (
            <div
              key={i}
              className={`bg-white/6 border ${program.borderColor} rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer relative hover:scale-105 hover:-translate-y-1.5 hover:bg-white/10 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)]`}
            >
              {/* Program Image */}
              {program.image && (
                <div className="h-[120px] relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.imageAlt || ""}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0D2E1F] to-transparent" />
                </div>
              )}
              
              <div className="p-7 pt-4">
                <div
                  className={`inline-block text-[11px] font-bold px-3 py-1.5 rounded-full ${program.statusColor} mb-4`}
                >
                  ● {program.status}
                </div>

                <div className={`text-4xl text-center mb-4 ${program.image ? '-mt-10' : ''}`}>
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-[#0D2E1F] grid place-items-center ${program.image ? 'border-4 border-[#0D2E1F] shadow-lg' : ''}`}>
                    <program.icon className="w-8 h-8 text-white/90" />
                  </div>
                </div>

              <h3 className="text-lg font-bold text-white text-center mb-2.5">{program.name}</h3>
                <p className="text-sm text-white/65 leading-relaxed text-center mb-5">
                  {program.desc}
                </p>

                <div className="flex gap-3 mb-5">
                  {program.stats.map((stat, j) => (
                    <div key={j} className="flex-1 bg-white/8 rounded-xl p-3 text-center">
                      <div className={`text-sm font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-[10px] text-white/50 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <button
                  className={`block text-center py-3 px-4 rounded-full text-sm font-semibold text-white ${program.btnColor} w-full transition-all duration-250 hover:brightness-110 hover:scale-[1.03]`}
                >
                  Ikut Program <ArrowRight className="inline w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
