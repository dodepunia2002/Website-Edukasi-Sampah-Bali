import { Navbar } from "@/Components/BaliHijau/navbar"
import { Hero } from "@/Components/BaliHijau/hero"
import { Statistics } from "@/Components/BaliHijau/statistics"
import { Education } from "@/Components/BaliHijau/education"
import { Programs } from "@/Components/BaliHijau/programs"
import { Facilities } from "@/Components/BaliHijau/facilities"
import { Quiz } from "@/Components/BaliHijau/quiz"
import { Tips } from "@/Components/BaliHijau/tips"
import { Footer } from "@/Components/BaliHijau/footer"
import { Head } from "@inertiajs/react"

export default function BaliHijauPage() {
  return (
    <>
      <Head title="Edukasi Sampah Bali" />
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Statistics />
        <Education />
        <Programs />
        <Facilities />
        <Quiz />
        <Tips />
        <Footer />
      </main>
    </>
  )
}
