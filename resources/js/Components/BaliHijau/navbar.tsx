
import { useState, useEffect } from "react"
import { Link } from "@inertiajs/react"
import { Leaf } from "lucide-react"

const navLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#statistik", label: "Statistik" },
  { href: "#edukasi", label: "Edukasi" },
  { href: "#program", label: "Program" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#kuis", label: "Kuis" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ["hero", "statistik", "edukasi", "program", "fasilitas", "kuis", "tips"]
      let current = "hero"
      
      const scrollPos = window.scrollY + 100 // Adjusted for better detection

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && scrollPos >= el.offsetTop) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 h-[72px] bg-[#0D2E1F]/92 backdrop-blur-md border-b border-[#90E293]/12 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_32px_rgba(0,0,0,0.3)]" : ""
      }`}
    >
      <Link href="#hero" className="flex items-center gap-2.5 no-underline">
        <div className="w-[38px] h-[38px] bg-[#25A863] rounded-[10px] grid place-items-center">
          <Leaf className="w-5 h-5 text-white" />
        </div>
        <span className="font-serif text-xl text-white tracking-tight">BaliHijau</span>
      </Link>

      <div className="hidden md:flex items-center gap-9">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative text-sm font-medium transition-colors duration-200 ${
              activeSection === link.href.slice(1)
                ? "text-white"
                : "text-white/75 hover:text-white"
            }`}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-[#90E293] rounded-sm transition-all duration-300 ${
                activeSection === link.href.slice(1) ? "w-full" : "w-0"
              }`}
            />
          </Link>
        ))}
      </div>

      <Link
        href="#kuis"
        className="bg-[#25A863] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-250 hover:bg-[#90E293] hover:text-[#0D2E1F] hover:scale-105"
      >
        Mulai Belajar
      </Link>
    </nav>
  )
}
