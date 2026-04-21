
import { useEffect, useRef, useState } from "react"
 // import Image from "next/image"
import { Leaf, CupSoda, Newspaper, Battery, ArrowRight } from "lucide-react"

const wasteTypes = [
  {
    type: "organic",
    icon: Leaf,
    name: "Sampah Organik",
    tag: "Mudah Didaur Ulang",
    color: {
      bg: "bg-[#E0F7E0]",
      text: "text-[#116842]",
      border: "border-[#25A863]",
      btn: "bg-[#25A863]",
      bullet: "text-[#25A863]",
    },
    items: ["Sisa makanan & dapur", "Daun & ranting pohon", "Kotoran hewan ternak"],
    tip: "Jadikan kompos! Ubah sampah dapur jadi pupuk alami untuk sawah dan kebun.",
    image: "/images/composting-banjar.jpg",
    imageAlt: "Traditional Balinese community composting activity in a banjar village using organic waste, natural lighting, documentary style.",
  },
  {
    type: "plastik",
    icon: CupSoda,
    name: "Sampah Plastik",
    tag: "Perlu Pemilahan Khusus",
    color: {
      bg: "bg-[#E4F0FF]",
      text: "text-[#2A87ED]",
      border: "border-[#2A87ED]",
      btn: "bg-[#2A87ED]",
      bullet: "text-[#2A87ED]",
    },
    items: [
      "Botol plastik PET/HDPE",
      "Kantong plastik sekali pakai",
      "Kemasan makanan & minuman",
    ],
    tip: "Cuci bersih & kumpulkan ke bank sampah terdekat agar bisa didaur ulang.",
    image: "/images/sampah-plastik.jpg",
    imageAlt: "Foto asli pemilahan sampah botol plastik di fasilitas EcoBali, Tibubeneng, Bali.",
  },
  {
    type: "kertas",
    icon: Newspaper,
    name: "Sampah Kertas",
    tag: "Mudah Didaur Ulang",
    color: {
      bg: "bg-[#FFF3E4]",
      text: "text-[#FF8D29]",
      border: "border-[#FF8D29]",
      btn: "bg-[#FF8D29]",
      bullet: "text-[#FF8D29]",
    },
    items: ["Koran & majalah bekas", "Kardus & dus kemasan", "Kertas HVS & fotokopi"],
    tip: "Pisahkan dari sampah basah agar tidak rusak dan bisa masuk lini daur ulang.",
    image: "/images/sampah-kertas.jpg",
    imageAlt: "Foto asli pemilahan tumpukan kardus dan kertas daur ulang di Bank Sampah Bali.",
  },
  {
    type: "b3",
    icon: Battery,
    name: "Sampah B3",
    tag: "Berbahaya",
    color: {
      bg: "bg-[#FFE4E4]",
      text: "text-[#E94242]",
      border: "border-[#E94242]",
      btn: "bg-[#E94242]",
      bullet: "text-[#E94242]",
    },
    items: ["Baterai & aki kendaraan", "Lampu TL & neon bekas", "Oli, cat, & bahan kimia"],
    tip: "JANGAN buang sembarangan! Antar ke drop point B3 resmi — bahaya untuk tanah & air.",
    image: "/images/b3-hazardous-waste.jpg",
    imageAlt: "Professional studio close-up photo of hazardous household B3 waste: used batteries, fluorescent lamps, and empty paint cans, realistic lighting.",
  },
]

interface ModalContent {
  icon: string
  title: string
  desc: string
}

const modalContents: Record<string, ModalContent> = {
  organic: {
    icon: "🍃",
    title: "Sampah Organik",
    desc: "Sampah organik seperti sisa makanan, daun, dan kotoran hewan sangat mudah dikomposkan. Di Bali, program Komposting Desa sudah ada di 214 banjar. Kompos hasil olahan bisa dipakai untuk pupuk sawah dan perkebunan!",
  },
  plastik: {
    icon: "🥤",
    title: "Sampah Plastik",
    desc: "Plastik membutuhkan 400-1000 tahun untuk terurai. Di Bali, 17% sampah adalah plastik. Bawa ke Bank Sampah terdekat — 1.000+ unit tersebar di seluruh Bali. Botol PET, galon, dan ember plastik punya nilai jual kembali!",
  },
  kertas: {
    icon: "📰",
    title: "Sampah Kertas",
    desc: "Kertas dapat didaur ulang hingga 7 kali! Pisahkan kertas bersih dari sampah basah. Kardus, koran, dan kertas HVS bekas bisa dijual ke bank sampah atau langsung ke pengepul kertas di kotamu.",
  },
  b3: {
    icon: "⚠️",
    title: "Sampah B3 (Berbahaya)",
    desc: "Baterai, lampu TL, oli, dan cat mengandung zat beracun yang bisa mencemari tanah dan air. JANGAN buang di tempat sampah biasa! Bawa ke Drop Point B3 resmi. Di Bali, cek lokasi drop point di website DLHK Provinsi Bali.",
  },
}

export function Education() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [activeModal, setActiveModal] = useState<ModalContent | null>(null)

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

  const openModal = (type: string) => {
    setActiveModal(modalContents[type])
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setActiveModal(null)
  }

  return (
    <>
      <section id="edukasi" className="bg-[#F6FCF7] py-24 px-6 md:px-10 scroll-mt-[72px]" ref={sectionRef}>
        <div className="max-w-[1320px] mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-1.5 bg-[#E0F7E0] text-[#116842] text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 tracking-wide">
              <span>♻️</span> Kenali Sampahmu
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-balance">
              Jenis-Jenis
              <br />
              Sampah
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mt-3 max-w-[560px]">
              Pahami cara memilah dan mendaur ulang setiap jenis sampah dengan benar agar Bali tetap
              bersih.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {wasteTypes.map((waste, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl border-2 ${waste.color.border} transition-all duration-300 cursor-pointer relative overflow-hidden hover:scale-105 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] group`}
              >
                {/* Card Image */}
                {waste.image && (
                  <div className="h-[120px] relative overflow-hidden">
                    <img
                      src={waste.image}
                      alt={waste.imageAlt || ""}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-white to-transparent" />
                  </div>
                )}
                
                <div className="p-7 pt-4">
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br ${waste.color.bg} to-transparent pointer-events-none`}
                  />

                  <div
                    className={`w-[72px] h-[72px] ${waste.color.bg} rounded-2xl grid place-items-center mx-auto mb-5 relative z-10 ${waste.image ? '-mt-12 border-4 border-white shadow-lg' : ''}`}
                  >
                    <waste.icon className={`w-9 h-9 ${waste.color.text}`} />
                  </div>

                <h3 className={`text-lg font-bold text-center mb-2 ${waste.color.text} relative z-10`}>
                  {waste.name}
                </h3>

                <div
                  className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-full ${waste.color.bg} ${waste.color.text} mx-auto mb-4 w-full text-center relative z-10`}
                >
                  {waste.tag}
                </div>

                <ul className="space-y-0 relative z-10">
                  {waste.items.map((item, j) => (
                    <li
                      key={j}
                      className={`text-sm text-muted-foreground py-1.5 flex items-center gap-2 border-b border-black/5`}
                    >
                      <span className={`text-base font-bold ${waste.color.bullet}`}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-3.5 p-3 rounded-xl text-xs leading-relaxed ${waste.color.bg} ${waste.color.text} relative z-10`}
                >
                  💡 {waste.tip}
                </div>

                <button
                    onClick={() => openModal(waste.type)}
                    className={`block text-center mt-4 py-3 px-4 rounded-full text-sm font-semibold text-white ${waste.color.btn} w-full transition-all duration-250 hover:brightness-110 hover:scale-[1.03] relative z-10`}
                  >
                    Pelajari Lebih <ArrowRight className="inline w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && activeModal && (
        <div
          className="fixed inset-0 bg-black/60 z-2000 grid place-items-center backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl p-10 max-w-[480px] w-[90%] text-center animate-fade-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-6xl mb-5">{activeModal.icon}</div>
            <h3 className="font-serif text-2xl mb-3">{activeModal.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-7">
              {activeModal.desc}
            </p>
            <button
              onClick={closeModal}
              className="bg-[#25A863] text-white px-8 py-3.5 rounded-full text-base font-bold transition-all duration-250 hover:scale-105"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  )
}
