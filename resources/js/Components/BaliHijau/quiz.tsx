
import { useState, useEffect, useRef } from "react"
import { Gamepad2, Trophy, Medal, ChevronLeft, ChevronRight, Check, X, Award } from "lucide-react"

const questions = [
  {
    q: "Manakah yang BUKAN termasuk sampah yang bisa didaur ulang langsung di bank sampah Bali?",
    opts: [
      "A. Botol plastik PET",
      "B. Baterai bekas kendaraan",
      "C. Kardus dan kertas koran",
      "D. Kaleng aluminium bekas",
    ],
    correct: 1,
    expCorrect:
      "Benar! Baterai bekas adalah sampah B3 (Bahan Berbahaya & Beracun). Harus dibawa ke drop point B3 resmi — BUKAN bank sampah biasa.",
    expWrong:
      "Kurang tepat! Jawaban yang benar adalah B. Baterai bekas adalah sampah B3 yang harus dibawa ke tempat penanganan khusus, bukan bank sampah biasa.",
  },
  {
    q: "Berapa persen komposisi sampah organik dari total sampah yang dihasilkan Bali setiap harinya?",
    opts: ["A. 45%", "B. 55%", "C. 65%", "D. 75%"],
    correct: 2,
    expCorrect:
      "Benar! 65% sampah Bali adalah organik (sisa makanan, daun, dll). Ini peluang besar untuk komposting di tingkat banjar!",
    expWrong:
      "Kurang tepat! Jawaban benar adalah C. 65% sampah Bali adalah organik. Data ini penting untuk strategi pengelolaan sampah Bali.",
  },
  {
    q: "Program apa yang memungkinkan warga Bali menukarkan sampah dengan uang atau produk?",
    opts: ["A. TPS3R", "B. Bali Clean Ocean", "C. Komposting Desa", "D. Bank Sampah"],
    correct: 3,
    expCorrect:
      "Benar! Bank Sampah adalah program di mana warga bisa menyetor sampah dan mendapatkan uang atau produk. Sudah ada 1.000+ unit di Bali!",
    expWrong:
      "Kurang tepat! Jawaban benar adalah D. Bank Sampah. Program ini memungkinkan warga 'menabung' sampah dan mendapat manfaat ekonomi langsung.",
  },
  {
    q: "Apa kepanjangan dari TPS3R dalam program pengelolaan sampah di Bali?",
    opts: [
      "A. Tempat Pembuangan Sampah Resmi Rapi",
      "B. Tempat Pengelolaan Sampah Reduce Reuse Recycle",
      "C. Tempat Pengolahan Sumber Sampah Rumah",
      "D. Tata Pengelolaan Sampah Resmi Regional",
    ],
    correct: 1,
    expCorrect:
      "Benar! TPS3R = Tempat Pengelolaan Sampah Reduce, Reuse, Recycle. Di Bali sudah ada 124 unit aktif di berbagai desa.",
    expWrong:
      "Kurang tepat! TPS3R = Tempat Pengelolaan Sampah Reduce, Reuse, Recycle. Ini adalah fasilitas pengolahan sampah terpadu di tingkat desa.",
  },
  {
    q: "Berapa ton sampah yang dihasilkan Bali setiap harinya menurut data terkini?",
    opts: ["A. 1.200 ton", "B. 2.100 ton", "C. 3.400 ton", "D. 5.000 ton"],
    correct: 2,
    expCorrect:
      "Benar! Bali menghasilkan sekitar 3.400 ton sampah per hari dari berbagai sumber — rumah tangga, pariwisata, dan industri. Angka yang sangat besar!",
    expWrong:
      "Kurang tepat! Bali menghasilkan 3.400 ton sampah per hari. Angka ini menjadi alasan mengapa edukasi pengelolaan sampah sangat penting di Bali.",
  },
]

const leaderboard = [
  { rank: "🥇", name: "Wayan Arta", badge: "Eco Master", score: 1240 },
  { rank: "🥈", name: "Made Dewi", badge: "Recycle Pro", score: 1180 },
  { rank: "🥉", name: "Kadek Surya", badge: "Green Star", score: 1090 },
]

export function Quiz() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [answered, setAnswered] = useState<boolean[]>(new Array(questions.length).fill(false))
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    new Array(questions.length).fill(-1)
  )
  const [showCertModal, setShowCertModal] = useState(false)

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

  const answerQuestion = (idx: number) => {
    if (answered[currentQ]) return

    const newAnswered = [...answered]
    newAnswered[currentQ] = true
    setAnswered(newAnswered)

    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[currentQ] = idx
    setSelectedAnswers(newSelectedAnswers)

    if (idx === questions[currentQ].correct) {
      setTotalScore((prev) => prev + 100)
    }
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1)
    } else {
      setShowCertModal(true)
    }
  }

  const prevQuestion = () => {
    if (currentQ > 0) {
      setCurrentQ((prev) => prev - 1)
    }
  }

  const q = questions[currentQ]
  const isCorrect = selectedAnswers[currentQ] === q.correct

  return (
    <>
      <section id="kuis" className="bg-[#F6FCF7] py-24 px-6 md:px-10 scroll-mt-[72px]" ref={sectionRef}>
        <div className="max-w-[1320px] mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-1.5 bg-[#E0F7E0] text-[#116842] text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 tracking-wide">
              <Gamepad2 className="w-3.5 h-3.5" /> Uji Pengetahuan
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-balance">
              Kuis Edukasi
              <br />
              Interaktif
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mt-3 max-w-[560px]">
              Jawab soal-soal seputar pengelolaan sampah di Bali dan kumpulkan poin untuk jadi Eco
              Warrior!
            </p>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10 mt-14 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Quiz Panel */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="bg-[#116842] p-7">
                <div className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Gamepad2 className="w-5 h-5" /> Kuis Edukasi Sampah Bali
                </div>
                <div className="text-sm text-white/75 mt-1.5">
                  Uji pengetahuanmu tentang pengelolaan sampah di Bali!
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Soal {currentQ + 1} dari {questions.length}
                  </span>
                  <span className="text-xs font-bold text-[#25A863]">
                    <Trophy className="w-3.5 h-3.5 inline mr-1" />
                    {totalScore} poin
                  </span>
                </div>

                <div className="h-2 bg-[#F3F4F6] rounded-full mb-7 overflow-hidden">
                  <div
                    className="h-full bg-[#25A863] rounded-full transition-all duration-500"
                    style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                  />
                </div>

                <div className="bg-[#F6FCF7] rounded-2xl p-5 mb-6">
                  <div className="text-[11px] font-bold text-[#25A863] mb-1.5 tracking-wide">
                    SOAL 0{currentQ + 1}
                  </div>
                  <div className="text-base font-semibold leading-relaxed">{q.q}</div>
                </div>

                <div className="flex flex-col gap-3">
                  {q.opts.map((opt, i) => {
                    let classes =
                      "flex items-center gap-3.5 p-4 rounded-xl border-2 border-[#F3F4F6] bg-white cursor-pointer text-base font-medium transition-all duration-250 text-left w-full"

                    if (answered[currentQ]) {
                      if (i === q.correct) {
                        classes =
                          "flex items-center gap-3.5 p-4 rounded-xl border-2 border-[#25A863] bg-[#E6F9EC] text-[#116842] cursor-default text-base font-medium text-left w-full"
                      } else if (i === selectedAnswers[currentQ]) {
                        classes =
                          "flex items-center gap-3.5 p-4 rounded-xl border-2 border-[#E94242] bg-[#FFE9E9] text-[#E94242] cursor-default text-base font-medium text-left w-full"
                      } else {
                        classes =
                          "flex items-center gap-3.5 p-4 rounded-xl border-2 border-[#F3F4F6] bg-white cursor-default opacity-50 text-base font-medium text-left w-full"
                      }
                    } else {
                      classes +=
                        " hover:border-[#25A863] hover:bg-[#E0F7E0] hover:translate-x-1"
                    }

                    return (
                      <button
                        key={i}
                        className={classes}
                        onClick={() => answerQuestion(i)}
                        disabled={answered[currentQ]}
                      >
                        <span
                          className={`w-8 h-8 rounded-full grid place-items-center text-xs font-bold shrink-0 transition-all ${
                            answered[currentQ] && i === q.correct
                              ? "bg-[#25A863] text-white"
                              : answered[currentQ] && i === selectedAnswers[currentQ]
                              ? "bg-[#E94242] text-white"
                              : "bg-[#F3F4F6]"
                          }`}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {answered[currentQ] && i === q.correct && (
                          <Check className="w-5 h-5 text-[#25A863]" />
                        )}
                        {answered[currentQ] &&
                          i === selectedAnswers[currentQ] &&
                          i !== q.correct && <X className="w-5 h-5 text-[#E94242]" />}
                      </button>
                    )
                  })}
                </div>

                {answered[currentQ] && (
                  <div
                    className={`mt-5 p-4 rounded-xl text-sm leading-relaxed animate-fade-slide-up ${
                      isCorrect
                        ? "bg-[#E6F9EC] border border-[#90E293] text-[#116842]"
                        : "bg-[#FFE9E9] border border-[#FFB0B0] text-[#B91C1C]"
                    }`}
                  >
                    {isCorrect ? (
                      <Check className="inline w-4 h-4 mr-1.5" />
                    ) : (
                      <X className="inline w-4 h-4 mr-1.5" />
                    )}
                    {isCorrect ? q.expCorrect : q.expWrong}
                  </div>
                )}

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={prevQuestion}
                    className="flex-1 py-3.5 px-4 rounded-full bg-[#F3F4F6] text-muted-foreground text-sm font-semibold transition-all hover:bg-[#E5E7EB]"
                  >
                    <ChevronLeft className="inline w-4 h-4 mr-1" /> Sebelumnya
                  </button>
                  <button
                    onClick={nextQuestion}
                    className="flex-2 py-3.5 px-4 rounded-full bg-[#25A863] text-white text-sm font-bold transition-all shadow-[0_4px_20px_rgba(37,168,99,0.3)] hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(37,168,99,0.45)]"
                  >
                    {currentQ < questions.length - 1 ? (
                      <>
                        Selanjutnya <ChevronRight className="inline w-4 h-4 ml-1" />
                      </>
                    ) : (
                      "Selesai!"
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-6">
              {/* Score Card */}
              <div className="bg-[#116842] rounded-3xl p-7 flex items-center gap-5">
                <Trophy className="w-11 h-11 text-[#FFD700]" />
                <div>
                  <div className="text-sm text-white/70 mb-1">Skor Kamu</div>
                  <div className="text-4xl font-extrabold text-white">{totalScore} poin</div>
                  <div className="text-sm text-[#90E293] mt-1">
                    <Medal className="inline w-4 h-4 mr-1" />
                    Terus semangat, Eco Warrior!
                  </div>
                </div>
              </div>

              {/* Leaderboard */}
              <div className="bg-white rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <div className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Medal className="w-5 h-5 text-[#FFD700]" /> Top Peserta Kuis Bali
                </div>

                {leaderboard.map((player, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#25A863]/7 mb-2"
                  >
                    <span className="text-lg w-7">{player.rank}</span>
                    <span className="text-sm font-semibold flex-1">{player.name}</span>
                    <span className="text-[11px] font-semibold bg-[#E0F7E0] text-[#116842] px-2.5 py-1 rounded-full">
                      {player.badge}
                    </span>
                    <span className="text-sm font-bold text-[#25A863]">{player.score}</span>
                  </div>
                ))}

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#E0F7E0] border border-[#90E293] mt-2">
                  <span className="text-lg w-7">👤</span>
                  <span className="text-sm font-semibold flex-1">Kamu</span>
                  <span className="text-[11px] font-semibold bg-[#E0F7E0] text-[#116842] px-2.5 py-1 rounded-full">
                    Eco Learner
                  </span>
                  <span className="text-sm font-bold text-[#25A863]">{totalScore}</span>
                </div>
              </div>

              {/* Certificate Card */}
              <div className="bg-[#0D2E1F] rounded-3xl p-6 flex flex-col gap-3.5">
                <div className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#FFD700]" /> Bagikan Pencapaianmu!
                </div>
                <p className="text-sm text-white/65 leading-relaxed">
                  Selesaikan semua soal dan dapatkan sertifikat digital sebagai Eco Warrior Bali!
                </p>
                <button
                  onClick={() => setShowCertModal(true)}
                  className="bg-[#25A863] text-white py-3.5 px-6 rounded-full text-sm font-bold transition-all shadow-[0_4px_20px_rgba(37,168,99,0.4)] hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(37,168,99,0.5)]"
                >
                  <Award className="inline w-4 h-4 mr-1.5" /> Ambil Sertifikat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {showCertModal && (
        <div
          className="fixed inset-0 bg-black/60 z-2000 grid place-items-center backdrop-blur-md"
          onClick={() => setShowCertModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-10 max-w-[480px] w-[90%] text-center animate-fade-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-6xl mb-5">🎖️</div>
            <h3 className="font-serif text-2xl mb-3">Sertifikat Eco Warrior Bali</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-7">
              {totalScore >= 500
                ? `Selamat! Kamu telah mendapatkan ${totalScore} poin dan berhak mendapatkan sertifikat Eco Warrior Bali!`
                : `Selesaikan semua 5 soal kuis untuk mendapatkan sertifikat digital Eco Warrior Bali! Skor kamu saat ini: ${totalScore} poin.`}
            </p>
            <button
              onClick={() => setShowCertModal(false)}
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
