/*
  File ini FILE LOGIKA — tidak perlu diedit oleh guru/admin konten.
  Tugasnya: mengambil data dari berita.js, lalu menampilkannya
  ke halaman secara otomatis dalam bentuk kartu "mading digital".
*/

function renderBerita() {
  // 1. Cari tempat/wadah kosong di HTML tempat berita akan dimasukkan
  const papan = document.getElementById("papan-mading");
  if (!papan) return;

  // 2. Kosongkan dulu isinya (jaga-jaga)
  papan.innerHTML = "";

  // 3. Untuk SETIAP item di daftarBerita (dari berita.js), buat satu kartu
  daftarBerita.forEach(function (item) {
    const kartu = document.createElement("article");
    kartu.className = "note";

    kartu.innerHTML = `
      <span class="pin"></span>
      <span class="date mono">${item.tanggal}</span>
      <h3>${item.judul}</h3>
      <p>${item.ringkasan}</p>
      <span class="tag">${item.kategori}</span>
    `;

    papan.appendChild(kartu);
  });
}

// Menu mobile (buka/tutup navigasi di layar HP)
function setupMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navList = document.getElementById("navList");
  if (!menuBtn || !navList) return;

  menuBtn.addEventListener("click", () => navList.classList.toggle("open"));
  navList.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navList.classList.remove("open"))
  );
}

// Jalankan semuanya begitu halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  renderBerita();
  setupMenu();
});
