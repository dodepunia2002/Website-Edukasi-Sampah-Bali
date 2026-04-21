
import { Link } from "@inertiajs/react"
import { Leaf } from "lucide-react"

const socialLinks = ["Instagram", "Facebook", "Twitter", "YouTube"]

const footerLinks = {
  program: [
    { label: "Bank Sampah", href: "#program" },
    { label: "TPS3R", href: "#program" },
    { label: "Komposting Desa", href: "#program" },
    { label: "Bali Clean Ocean", href: "#program" },
  ],
  edukasi: [
    { label: "Jenis Sampah", href: "#edukasi" },
    { label: "Cara Memilah", href: "#edukasi" },
    { label: "Daur Ulang", href: "#edukasi" },
    { label: "Infografis", href: "#edukasi" },
  ],
  kontak: [
    { label: "dinhub@baliprov.go.id", href: "mailto:dinhub@baliprov.go.id" },
    { label: "Telp: (0361) 234567", href: "tel:+620361234567" },
    { label: "Jl. Bypass Ngurah Rai", href: "#" },
    { label: "Denpasar, Bali 80227", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0D2E1F] text-white py-20 px-6 md:px-10">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20 pb-12 border-b border-white/10">
          {/* Brand Section */}
          <div className="lg:pr-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-[#25A863] rounded-2xl grid place-items-center shadow-[0_8px_20px_rgba(37,168,99,0.25)]">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif text-3xl font-medium tracking-tight">BaliHijau</span>
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-8 max-w-[280px]">
              Platform edukasi dan pengelolaan sampah untuk Bali yang lebih hijau, bersih, dan
              lestari bagi generasi mendatang.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <button
                  key={social}
                  aria-label={`Ikuti BaliHijau di ${social}`}
                  className="px-4 py-2 rounded-full bg-white/8 text-white/70 text-xs font-medium border border-white/10 transition-all hover:bg-white/15 hover:text-white"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="text-base font-bold text-white mb-4">Program</h4>
              {footerLinks.program.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-[#90E293]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-4">Edukasi</h4>
              {footerLinks.edukasi.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-[#90E293]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-4">Kontak</h4>
              {footerLinks.kontak.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-[#90E293]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-white/35">
          <span>2024 BaliHijau. Didukung oleh Dinas Lingkungan Hidup Provinsi Bali</span>
          <span className="mt-2 sm:mt-0">Dibuat dengan ❤️ untuk Bali</span>
        </div>
      </div>
    </footer>
  )
}
