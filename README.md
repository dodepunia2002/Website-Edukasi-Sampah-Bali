# 🌿 Bali Hijau - Website Edukasi Sampah Bali

Bali Hijau adalah sebuah platform web edukatif interaktif yang didedikasikan untuk meningkatkan kesadaran masyarakat Bali terhadap pentingnya pengelolaan sampah yang baik dan benar. Dirancang dengan pendekatan UI/UX modern, website ini menawarkan informasi komprehensif mulai dari jenis-jenis sampah, lokasi fasilitas pengolahan, hingga kuis interaktif yang menguji pengetahuan lingkungan.

![Bali Hijau Banner](public/images/hero-rice-terraces.jpg)

## 🔥 Fitur Utama

- **📚 Edukasi Golongan Sampah**
  Penjelasan detail mengenai tiga kategori utama sampah: Organik, Anorganik, dan Bahan Berbahaya dan Beracun (B3) beserta cara penanganannya.
- **📊 Visualisasi Data Statistik Interaktif**
  Integrasi grafis (Chart) dinamis berbasis data SIPSN (Sistem Informasi Pengelolaan Sampah Nasional) terbaru yang menunjukkan komposisi sampah di Bali.
- **📍 Direktori Fasilitas Pengolahan**
  Navigasi terintegrasi Google Maps untuk menemukan Bank Sampah dan fasilitas TPS3R (Tempat Pengolahan Sampah Reduce, Reuse, Recycle) terdekat.
- **💡 Gaya Hidup & Tips Minim Sampah**
  Panduan praktis dan aksi nyata penerapan 3R bagi perorangan maupun rumah tangga.
- **🧠 Kuis Interaktif Ramah Lingkungan**
  Sistem kuis dinamis untuk menguji pemahaman pengunjung mengenai pemilahan dan pengolahan sampah, lengkap dengan sistem skor instan.

## 💻 Tech Stack

Proyek ini dibangun secara *Full-Stack* dengan stack teknologi modern terkini:

- **Backend:** Laravel 11 (PHP 8.2+) dengan database **SQLite**
- **Sistem Render:** Inertia.js (Bridges the Backend & Frontend smoothly)
- **Frontend:** React 18, TypeScript, dan shadcn/ui components
- **Styling:** Tailwind CSS v4 & Framer Motion (untuk animasi yang mulus)
- **Data Viz:** Recharts
- **Build Tool:** Vite

## 🚀 Panduan Instalasi Lokal

Untuk menjalankan aplikasi ini secara lokal di komputer Anda:

### Persyaratan Sistem
- PHP >= 8.2 & Composer
- Node.js (v18+) & NPM

### Langkah-langkah

1. **Clone Repositori ini**
   ```bash
   git clone https://github.com/dodepunia2002/Website-Edukasi-Sampah-Bali.git
   cd Website-Edukasi-Sampah-Bali
   ```

2. **Instal Dependensi Backend & Frontend**
   ```bash
   composer install
   npm install
   ```

3. **Konfigurasi Environment (.env)**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
   *(Secara bawaan, aplikasi berjalan dengan basis data SQLite tanpa konfigurasi rumit)*

4. **Siapkan Database & Jalankan Migrasi**
   ```bash
   php artisan migrate
   ```

5. **Jalankan Aplikasi!**
   Buka dua terminal (*split terminal*) di IDE Anda dan jalankan:
   ```bash
   # Terminal 1 (Menjalankan server Laravel di http://localhost:8000)
   php artisan serve

   # Terminal 2 (Menjalankan Vite untuk mem-build React & Tailwind secara live)
   npm run dev
   ```

6. Kunjungi `http://localhost:8000` di peramban (browser) Anda.

## 👨‍💻 Kontributor

Proyek ini dikembangkan oleh [dodepunia2002](https://github.com/dodepunia2002). 
Dibuat sebagai inisiatif *"Green Technology"* untuk mendukung kebersihan dan kelestarian alam Bali! 🌴

---
<p align="center">
  Dibuat dengan ❤️ untuk Bali yang lebih asri.
</p>
