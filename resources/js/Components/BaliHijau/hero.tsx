import { Link } from "@inertiajs/react"
import { BookOpen, Gamepad2, Trash2, Recycle, Leaf, Building2 } from "lucide-react"

const heroStats = [
  { icon: Trash2, value: "3.400", label: "Ton Sampah/Hari" },
  { icon: Recycle, value: "14", label: "Program Aktif" },
  { icon: Leaf, value: "65%", label: "Sampah Organik" },
  { icon: Building2, value: "1.000+", label: "Bank Sampah" },
]

const pills = [
  { icon: "🌿", text: "Alam Lestari" },
  { icon: "♻️", text: "Daur Ulang" },
  { icon: "🏖️", text: "Pantai Bersih" },
  { icon: "🌊", text: "Laut Terjaga" },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-[72px] flex items-center relative overflow-hidden scroll-mt-[72px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-rice-terraces.jpg"
          alt="Panoramic aerial photo of Tegalalang Rice Terraces, Ubud, Bali, during golden hour. Luminous, vibrant emerald green, professional photography, widescreen, extremely detailed."
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0D2E1F]/90 via-[#1a4d2e]/85 to-[#0d3d20]/90" />
      </div>
      
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-[#25A863] rounded-full blur-[80px] opacity-[0.18] -right-[100px] -top-[100px]" />
        <div className="absolute w-[400px] h-[400px] bg-[#00BCBC] rounded-full blur-[80px] opacity-[0.18] right-[200px] -bottom-[50px]" />
        <div className="absolute w-[300px] h-[300px] bg-[#90E293] rounded-full blur-[80px] opacity-[0.18] -left-[80px] bottom-[100px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(144,226,147,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full relative z-10">
        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#25A863]/15 border border-[#25A863]/30 px-4 py-2 rounded-full text-sm text-[#90E293] font-semibold mb-7 animate-fade-slide-up">
            <span>🌊</span> Bali Bebas Sampah 2025
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tighter animate-fade-slide-up delay-100">
            Bersama Kita
            <br />
            Jaga <em className="not-italic text-[#90E293] drop-shadow-[0_0_20px_rgba(144,226,147,0.3)]">Bali</em>
            <br />
            Tetap Lestari
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mt-6 max-w-[520px] animate-fade-slide-up delay-200">
            Platform edukasi pengelolaan sampah di Bali. Pelajari cara memilah, mendaur ulang, dan
            berkontribusi untuk lingkungan yang lebih baik.
          </p>

          <div className="flex gap-4 mt-10 animate-fade-slide-up delay-300">
            <Link
              href="#edukasi"
              className="inline-flex items-center gap-2 bg-[#25A863] text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-250 shadow-[0_8px_32px_rgba(37,168,99,0.35)] hover:bg-[#90E293] hover:text-[#0D2E1F] hover:scale-105 hover:shadow-[0_12px_40px_rgba(37,168,99,0.5)]"
            >
              <BookOpen className="w-5 h-5" /> Mulai Belajar
            </Link>
            <Link
              href="#kuis"
              className="inline-flex items-center gap-2 bg-white/12 text-white px-8 py-4 rounded-full text-base font-semibold border border-white/20 transition-all duration-250 hover:bg-white/20 hover:scale-105"
            >
              <Gamepad2 className="w-5 h-5" /> Ikut Kuis
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 animate-fade-slide-up delay-400">
            {heroStats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/7 border border-[#90E293]/15 rounded-2xl p-5 backdrop-blur-[10px]"
              >
                <stat.icon className="w-6 h-6 text-[#90E293] mb-1.5" />
                <div className="text-3xl font-extrabold text-white leading-none">{stat.value}</div>
                <div className="text-[11px] text-white/55 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative animate-fade-slide-up delay-200">
          <div className="bg-white/7 border border-[#90E293]/20 rounded-3xl p-8 backdrop-blur-md animate-float">
            <div className="w-full h-[300px] rounded-2xl relative overflow-hidden">
              <img
                src="/images/nusa-dua-beach.jpg"
                alt="Visual visualization of clear, clean, and unpolluted Nusa Dua beach in Bali, soft lighting, environmental beauty visualization."
                className="object-cover w-full h-full"
              />
              <div className="absolute top-3 left-3 bg-[#25A863]/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                Nusa Dua / Sanur
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white/70 text-[10px] px-3 py-2">
                Pantai Bersih Nusa Dua, Bali
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-5">
              {pills.map((pill, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-[#90E293]/25 text-[#90E293] text-sm font-medium px-4 py-2 rounded-full"
                >
                  {pill.icon} {pill.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
