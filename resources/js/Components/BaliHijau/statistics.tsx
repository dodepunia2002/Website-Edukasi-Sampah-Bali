
import { useEffect, useRef, useState } from "react";
 // import Image from "next/image";
import { Trash2, Leaf, Recycle } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const statsCards = [
  {
    icon: Trash2,
    value: "1,25 Juta",
    unit: "Ton / Tahun",
    badge: "Total",
    desc: "Timbulan sampah di Provinsi Bali berdasarkan data SIPSN 2024. Rata-rata harian mencapai 3.436 ton.",
    color: "green",
    image: "/images/tpa-suwung.jpg",
    imageAlt:
      "Documentary photo of immensely large garbage piles at TPA Suwung Denpasar, Bali, representing waste overload, documentary lighting.",
  },
  {
    icon: Leaf,
    value: "65%",
    unit: "Sampah Organik",
    badge: "Organik",
    desc: "Persentase tertinggi adalah sampah organik — sisa makanan, daun, dan sisa kebun.",
    color: "orange",
    image: "/images/composting-banjar.jpg",
    imageAlt:
      "Traditional Balinese community composting activity in a banjar village using organic waste, natural lighting, documentary style.",
  },
  {
    icon: Recycle,
    value: "35%",
    unit: "Plastik & Lainnya",
    badge: "Anorganik",
    desc: "Plastik mendominasi sampah anorganik (17,25%), sisanya logam, kertas, dan lainnya.",
    color: "blue",
    image: "/images/kuta-plastic-waste.jpg",
    imageAlt:
      "Documentary photo of a plastic waste wave on Kuta beach, Bali, due to monsoon pollution, dramatic lighting, environmental crisis realism.",
  },
];

const progressItems = [
  { label: "Sisa Makanan & Organik", pct: 65, color: "#25A863" },
  { label: "Plastik", pct: 17.25, color: "#2A87ED" },
  { label: "Kertas & Karton", pct: 8, color: "#FF8D29" },
  { label: "Lainnya (Logam, Kaca, B3)", pct: 9.75, color: "#6B7280" },
];

const chartData = [
  { name: "Organik", value: 65, color: "#25A863" },
  { name: "Plastik", value: 17.25, color: "#2A87ED" },
  { name: "Kertas", value: 8, color: "#FF8D29" },
  { name: "Lainnya", value: 9.75, color: "#6B7280" },
];

const colorMap = {
  green: {
    bg: "bg-[#E0F7E0]",
    border: "border-[#90E293]",
    text: "text-[#116842]",
  },
  orange: {
    bg: "bg-[#FFF3E4]",
    border: "border-[#FFB870]",
    text: "text-[#FF8D29]",
  },
  blue: {
    bg: "bg-[#E4F0FF]",
    border: "border-[#90BCFF]",
    text: "text-[#2A87ED]",
  },
};

export function Statistics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="statistik"
      className="bg-white py-24 px-6 md:px-10 scroll-mt-[72px]"
      ref={sectionRef}
    >
      <div className="max-w-[1320px] mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-1.5 bg-[#E0F7E0] text-[#116842] text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 tracking-wide">
            <span>📊</span> Data SIPSN 2024
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-balance">
            Kondisi Sampah
            <br />
            di Bali
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mt-3 max-w-[560px]">
            Fakta dan angka terkini seputar pengelolaan sampah di Pulau Dewata.
            Data resmi dari Sistem Informasi Pengelolaan Sampah Nasional.
          </p>
        </div>

        {/* Stats Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-7 mt-16 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {statsCards.map((card, i) => {
            const colors = colorMap[card.color as keyof typeof colorMap];
            return (
              <div
                key={i}
                className={`${colors.bg} border-[1.5px] ${colors.border} rounded-3xl overflow-hidden transition-all duration-300 cursor-default hover:scale-[1.04] hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(37,168,99,0.22)]`}
              >
                {/* Card Image */}
                <div className="h-[140px] relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-[#116842]">
                    {card.badge}
                  </div>
                </div>

                <div className="p-7">
                  <card.icon className={`w-10 h-10 ${colors.text} mb-3`} />
                  <div
                    className={`text-5xl font-extrabold leading-none ${colors.text}`}
                  >
                    {card.value}
                  </div>
                  <div className={`text-xl font-bold mt-1 ${colors.text}`}>
                    {card.unit}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2.5 leading-relaxed">
                    {card.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Section */}
        <div
          className={`mt-16 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h3 className="text-xl font-bold mb-7">Komposisi Sampah Bali</h3>
            {progressItems.map((item, i) => (
              <div key={i} className="mb-6">
                <div className="flex justify-between mb-2 text-sm font-medium">
                  <span>{item.label}</span>
                  <span className="font-bold" style={{ color: item.color }}>
                    {item.pct}%
                  </span>
                </div>
                <div className="h-3 bg-[#F3F4F6] rounded-md overflow-hidden">
                  <div
                    className="h-full rounded-md transition-all duration-1500 ease-in-out"
                    style={{
                      width: isVisible ? `${item.pct}%` : "0%",
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Donut Chart */}
          <div className="flex flex-col items-center justify-center gap-5 w-full h-full relative">
            {isVisible && isMounted && (
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                      animationDuration={1500}
                      animationBegin={200}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: any) => `${value}%`}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>

                {/* Center text for donut chart */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -mt-10">
                  <span className="text-2xl font-extrabold text-[#116842]">
                    Sampah
                  </span>
                  <span className="text-sm text-muted-foreground">Bali</span>
                </div>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-3 w-full">
              {chartData.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-medium text-muted-foreground">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
