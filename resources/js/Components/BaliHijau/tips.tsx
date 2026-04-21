
import { useEffect, useRef, useState } from "react"
 // import Image from "next/image"
import { ShoppingBag, Droplets, Banana, Zap, Waves, Search, MapPin } from "lucide-react"

const tips = [
  {
    icon: ShoppingBag,
    name: "Bawa Tas Sendiri",
    desc: "Tolak kantong plastik sekali pakai. Tas anyaman Bali lebih keren & ramah lingkungan!",
    color: "text-[#25A863]",
    image: "/images/tas-anyaman.jpg",
    imageAlt: "Balinese woven bags from natural fibers in an Ubud art market, texture detail.",
  },
  {
    icon: Droplets,
    name: "Gunakan Tumbler",
    desc: "Hindari beli minuman kemasan sekali pakai. Bawa tumbler stainless kemanapun pergi.",
    color: "text-[#2A87ED]",
    image: "/images/tumbler-cafe.jpg",
    imageAlt: "Minimalist visual of a stainless steel tumbler with a bamboo lid in a minimalist Bali cafe, natural lighting.",
  },
  {
    icon: Banana,
    name: "Daun Pisang",
    desc: "Gunakan daun pisang sebagai wadah makanan — tradisi Bali yang ramah lingkungan!",
    color: "text-[#FF8D29]",
    image: "/images/daun-pisang.jpg",
    imageAlt: "Authentic Balinese lunch packaging using banana leaf (daun pisang) and small bamboo sticks (semat), soft lighting.",
  },
  {
    icon: Zap,
    name: "Hemat Energi",
    desc: "Cabut charger saat tidak digunakan. Kurangi e-waste dan konsumsi listrik berlebih.",
    color: "text-[#7B3FC4]",
    image: "/images/hemat-energi.jpg",
    imageAlt: "Foto asli pemasangan panel surya (PLTS Atap) pada bangunan di Bali untuk efisiensi energi.",
  },
  {
    icon: Waves,
    name: "Jaga Pantai",
    desc: "Ikuti beach cleanup atau minimal jangan buang sampah sembarangan di area pantai Bali.",
    color: "text-[#00BCBC]",
    image: "/images/jaga-pantai-bali.jpg",
    imageAlt: "Foto asli aksi nyata relawan Sungai Watch saat melakukan pembersihan sampah di area pantai Bali.",
  },
]

export function Tips() {
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
    <section id="tips" className="bg-white py-24 px-6 md:px-10 scroll-mt-[72px]" ref={sectionRef}>
      <div className="max-w-[1320px] mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-1.5 bg-[#E0F7E0] text-[#116842] text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 tracking-wide">
            <span>💡</span> Fakta & Tips Hari Ini
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-balance mb-4">
            Aksi Nyata
            <br />
            Setiap Hari
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mt-3 max-w-[560px]">
            Langkah kecil dari setiap orang berdampak besar bagi lingkungan Bali yang kita cintai.
          </p>
        </div>

        {/* Tips Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {tips.map((tip, i) => (
            <div
              key={i}
              className="bg-[#F3F4F6] rounded-2xl overflow-hidden text-center transition-all duration-300 cursor-default hover:scale-105 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              {tip.image && (
                <div className="h-[100px] relative overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.imageAlt || ""}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#F3F4F6] to-transparent" />
                </div>
              )}
              <div className={`p-6 ${tip.image ? 'pt-3' : ''}`}>
                <tip.icon className={`w-10 h-10 mx-auto mb-3 ${tip.color} ${tip.image ? '-mt-8 bg-white rounded-xl p-2 shadow-md' : ''}`} />
                <h3 className={`text-base font-bold mb-2 ${tip.color}`}>{tip.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
