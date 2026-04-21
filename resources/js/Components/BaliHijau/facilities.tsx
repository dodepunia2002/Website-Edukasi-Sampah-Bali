
import { useEffect, useRef, useState } from "react"
import { MapPin, Navigation, Map } from "lucide-react"

export function Facilities() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"bank" | "tps">("bank")

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
    <section id="fasilitas" className="bg-[#F8FAFC] py-24 px-6 md:px-10 scroll-mt-[72px]" ref={sectionRef}>
      <div className="max-w-[1320px] mx-auto">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-1.5 bg-[#E4F0FF] text-[#2A87ED] text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 tracking-wide">
            <span>📍</span> Lokasi Nyata
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-balance mb-4">
            Temukan Fasilitas Terdekat
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-[640px] mx-auto">
            Cari lokasi Bank Sampah atau TPS3R (Tempat Pengolahan Sampah Reuse, Reduce, Recycle) terdekat dari lokasi Anda di Bali.
          </p>
        </div>

        <div
          className={`max-w-[900px] mx-auto mt-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Tabs */}
          <div className="flex p-1.5 bg-white rounded-2xl shadow-sm border border-slate-100 mb-8 w-fit mx-auto">
            <button
              onClick={() => setActiveTab("bank")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "bank"
                  ? "bg-[#25A863] text-white shadow-md shadow-[#25A863]/20"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <MapPin className="w-4 h-4" /> Bank Sampah
            </button>
            <button
              onClick={() => setActiveTab("tps")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "tps"
                  ? "bg-[#00BCBC] text-white shadow-md shadow-[#00BCBC]/20"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Map className="w-4 h-4" /> TPS3R Bali
            </button>
          </div>

          {/* Map Container */}
          <div className="bg-white rounded-3xl p-3 md:p-5 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden group">
            
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-slate-100 relative">
              {/* Overlay Loader */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 z-0">
                <div className="w-8 h-8 border-4 border-[#25A863]/30 border-t-[#25A863] rounded-full animate-spin" />
              </div>

              <iframe
                title="Google Maps Fasilitas Sampah Bali"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${
                  activeTab === "bank" ? "bank+sampah+terdekat+bali" : "tps3r+bali"
                }&t=&z=11&ie=UTF8&iwloc=&output=embed`}
                className="relative z-10 w-full h-full rounded-xl"
              />
            </div>

            {/* Action Buttons */}
            <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-20 flex gap-3">
              <a
                href={`https://www.google.com/maps/search/${
                  activeTab === "bank" ? "bank+sampah+terdekat+bali" : "tps3r+bali"
                }`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-xl"
              >
                <Navigation className="w-4 h-4" /> Buka di Maps
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
