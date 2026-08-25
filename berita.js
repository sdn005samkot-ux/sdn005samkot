/*
  =====================================================================
  FILE INI ISINYA DAFTAR BERITA / KEGIATAN SEKOLAH.
  Guru / admin CUKUP EDIT FILE INI SAJA untuk update website.
  Tidak perlu menyentuh file index.html, style.css, atau script.js.

  CARA MENAMBAH BERITA BARU:
  1. Copy salah satu blok { ... } di bawah (dari tanda { sampai },)
  2. Tempel di PALING ATAS daftar (baris paling atas = tampil pertama)
  3. Ganti isi tanggal, judul, ringkasan, dan kategori
  4. Jangan hapus tanda kurung kurawal { } , koma di akhir, dan tanda kutip " "
  5. Simpan file, lalu commit & push (atau "Commit changes" di GitHub)

  CARA MENGHAPUS BERITA:
  - Hapus satu blok { ... } miliknya secara utuh (termasuk koma setelahnya)

  KATEGORI yang tersedia: "Prestasi", "Kegiatan", "Pengumuman"
  (boleh diganti dengan kategori lain, tapi pakai kategori yang konsisten)
  =====================================================================
*/

const daftarBerita = [
  {
    tanggal: "25 Agt 2026",
    judul: "Contoh judul berita — ganti dengan berita terbaru Anda",
    ringkasan: "Tulis ringkasan singkat 1-2 kalimat tentang kegiatan atau pengumuman ini.",
    kategori: "Pengumuman"
  },
  {
    tanggal: "18 Agt 2026",
    judul: "Tim Jurnalistik juarai lomba mading digital tingkat kabupaten",
    ringkasan: "Ekskul jurnalistik meraih Juara 1 dengan konsep liputan kegiatan sekolah berbasis website.",
    kategori: "Prestasi"
  },
  {
    tanggal: "10 Agt 2026",
    judul: "Upacara HUT RI ke-81 berlangsung khidmat",
    ringkasan: "Seluruh siswa dan guru mengikuti upacara bendera di lapangan utama sekolah.",
    kategori: "Kegiatan"
  },
  {
    tanggal: "02 Agt 2026",
    judul: "Pelatihan literasi digital untuk guru TIK",
    ringkasan: "Guru pembina media sekolah mengikuti workshop pengelolaan konten & publikasi online.",
    kategori: "Pengumuman"
  }
];
