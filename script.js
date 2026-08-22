const pengurus = [
  { nama: "[ARSHAVIN REKA ALFIANSYAH]", jabatan: "Ketua Kelas", tugas: "Koordinasi seluruh kegiatan kelas", icon: "⭐" },
  { nama: "[MOHAMAD ARDIKA FAUZI]", jabatan: "Wakil Ketua", tugas: "Menggantikan ketua saat berhalangan", icon: "📝" },
  { nama: "[ANGGI SHELVIA NINGRUM & GESANG ARUNDAYA]", jabatan: "Bendahara", tugas: "Mengelola keuangan dan kas kelas", icon: "💰" },
  { nama: "[MOHAMMAD RENGGA AJI SAPUTRA & ARINAYA ARTHALITA PRATAMI]", jabatan: "Sekretaris", tugas: "Administrasi dan dokumentasi kelas", icon: "📋" },
  { nama: "[SELURUH SISWA]", jabatan: "Ketua Keamanan", tugas: "Kebersihan dan ketertiban kelas", icon: "🛡️" },
  { nama: "[SMK PGRI 1 NGANJUK]", jabatan: "Sekolah", tugas: "Nama sekolahan", icon: "📚" },
  { nama: "[PAK YANTO]", jabatan: "Ketua IT", tugas: "Media, teknologi, dan dokumentasi digital", icon: "💻" },
];

const sosialMedia = [
  {
    nama: "Linktree",
    deskripsi: "Semua link kelas kami",
    url: "https://linktr.ee/exonecotctkjone",
    icon: "🔗",
    warna: "#10b981",
  },
  {
    nama: "Instagram",
    deskripsi: "@exonecotctkjone",
    url: "https://www.instagram.com/exonecotctkjone",
    icon: "📸",
    warna: "#e4405f",
  },
  {
    nama: "TikTok",
    deskripsi: "@exonecotctkjone",
    url: "https://www.tiktok.com/@exonecotctkjone",
    icon: "🎵",
    warna: "#010101",
  },
  {
    nama: "WhatsApp",
    deskripsi: "Grup kelas XI TKJ 1",
    url: "",
    icon: "💬",
    warna: "#25d366",
  },
];

const siswa = [
  "AHMAD HABIB FADHIL MUKARROM", "AKHMAD BAYU PRATAMA", "ALEANDRA KENZIE ARDINATHA", "ALIF BRAMANTIO", "AMELIA DWI KURNIAWAN",
  "ANGGI SHELVIA NINGRUM", "ARDHAN FERDIANSYAH", "ARINAYA ARTHALITA PRATAMI", "ARSHAVIN REKA ALFIANSYAH", "ARVIAN YUSUF HARTANTO",
  "AUDHIRA MULY MUTIARA", "AZRIL RAHMAN PRATAMA", "BAYU SIGID PRASSETIYO", "DHIVO SANDHY PRATAMA", "FAJAR YUKANANTA",
  "FARDHAN BILLYAN ANGGARA PUTRA", "GESANG ARUNDAYA DEN PRASETYO", "GYCELLA WILLY CANDRA FAIRY", "HARIS ALFA ADINATA", "SYAHREZA YUSUF AL-WI",
  "M.ASRORUR RIJAL", "MOHAMAD ARDIKA FAUZI", "MOHAMMAD DANU RIFKI ARIZONA", "MOHAMMAD RENGGA AJI SAPUTRA", "MOHAMMAD SULTON ARDIANSYAH",
  "MOHAMMAD WAHYU RAMADHAN", "MUHAMMAD GALIH SETYAWAN", "MUHAMMAD MAZDA ALVINO ARDIAN", "MUHAMMAD RIZKI NUR AFANDI", "NANDA SETIA DERMAWAN",
  "NAZWA ZAHRA WIJAYA", "NINDY AWANG SWASTIKA PUTRI", "NURRITA ROHMAH", "RAFFLI ABI NANDA", "VINO WILLY ARDIANSYAH",
  "BIMA ALFATHIR",
];

function renderPengurus() {
  const grid = document.getElementById("pengurus-grid");
  grid.innerHTML = pengurus.map(p => `
    <div class="pengurus-card">
      <div class="avatar">${p.icon}</div>
      <div class="pengurus-card-body">
        <h3>${p.nama}</h3>
        <p class="jabatan">${p.jabatan}</p>
        <p class="tugas">${p.tugas}</p>
      </div>
    </div>
  `).join("");
}

function renderSosialMedia() {
  const grid = document.getElementById("sosmed-grid");
  const aktif = sosialMedia.filter(item => item.url);

  if (!aktif.length) {
    grid.innerHTML = `<p class="sosmed-empty">Belum ada link sosial media. Tambahkan di file script.js</p>`;
    return;
  }

  grid.innerHTML = aktif.map(item => `
    <a
      href="${item.url}"
      class="sosmed-card"
      target="_blank"
      rel="noopener noreferrer"
      style="--sosmed-color: ${item.warna}"
      aria-label="Buka ${item.nama}"
    >
      <div class="sosmed-icon">${item.icon}</div>
      <div class="sosmed-body">
        <h3>${item.nama}</h3>
        <p>${item.deskripsi}</p>
      </div>
      <span class="sosmed-arrow" aria-hidden="true">↗</span>
    </a>
  `).join("");
}

function renderSiswa(list) {
  const grid = document.getElementById("siswa-grid");
  grid.innerHTML = list.map((nama, i) => `
    <div class="siswa-card" data-nama="${nama.toLowerCase()}">
      <div class="siswa-no">${i + 1}</div>
      <div class="siswa-nama">${nama}</div>
    </div>
  `).join("");
}

function initSearch() {
  const input = document.getElementById("search-siswa");
  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    document.querySelectorAll(".siswa-card").forEach(card => {
      const nama = card.dataset.nama;
      card.classList.toggle("hidden", query && !nama.includes(query));
    });
  });
}

function setMenuOpen(open) {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  const overlay = document.querySelector(".nav-overlay");

  toggle.classList.toggle("open", open);
  links.classList.toggle("open", open);
  overlay.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
  overlay.setAttribute("aria-hidden", !open);
  document.body.style.overflow = open ? "hidden" : "";
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  const overlay = document.querySelector(".nav-overlay");

  toggle.addEventListener("click", () => {
    setMenuOpen(!links.classList.contains("open"));
  });

  overlay.addEventListener("click", () => setMenuOpen(false));

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setMenuOpen(false));
  });
}

function initBottomNav() {
  const sections = ["beranda", "struktur", "pengurus", "anggota", "kontak"];
  const navItems = document.querySelectorAll(".bottom-nav-item");

  function updateActive() {
    let current = sections[0];
    const scrollY = window.scrollY + 120;

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = id;
    });

    navItems.forEach(item => {
      item.classList.toggle("active", item.dataset.section === current);
    });
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();
}

document.getElementById("stat-siswa").textContent = siswa.length;

renderPengurus();
renderSosialMedia();
renderSiswa(siswa);
initSearch();
initMenu();
initBottomNav();
