const pengurus = [
  { nama: "[ARSHAVIN REKA ALFIANSYAH]", jabatan: "Ketua Kelas", tugas: "Koordinasi seluruh kegiatan kelas", icon: "⭐" },
  { nama: "[MOHAMAD ARDIKA FAUZI]", jabatan: "Wakil Ketua", tugas: "Menggantikan ketua saat berhalangan", icon: "📝" },
  { nama: "[ANGGI SHELVIA NINGRUM & GESANG ARUNDAYA]", jabatan: "Bendahara", tugas: "Mengelola keuangan dan kas kelas", icon: "💰" },
  { nama: "[MOHAMMAD RENGGA AJI SAPUTRA & ARINAYA ARTHALITA PRATAMI]", jabatan: "Sekretaris", tugas: "Administrasi dan dokumentasi kelas", icon: "📋" },
  { nama: "[SELURUH SISWA]", jabatan: "Ketua Keamanan", tugas: "Kebersihan dan ketertiban kelas", icon: "🛡️" },
  { nama: "[SMK PGRI 1 NGANJUK]]", jabatan: "SEKOLAH", tugas: "NAMA SEKOLAHAN", icon: "📚" },
  { nama: "[PAK YANTO ]", jabatan: "Ketua IT", tugas: "Media, teknologi, dan dokumentasi digital", icon: "💻" },
];

const siswa = [
  "AHMAD HABIB FADHIL MUKARROM", "AKHMAD BAYU PRATAMA", "ALEANDRA KENZIE ARDINATHA", "ALIF BRAMANTIO", "AMELIA DWI KURNIAWAN",
  "ANGGI SHELVIA NINGRUM", "ARDHAN FERDIANSYAH", "ARINAYA ARTHALITA PRATAMI", "ARSHAVIN REKA ALFIANSYAH", "ARVIAN YUSUF HARTANTO",
  "AUDHIRA MULY MUTIARA", "AZRIL RAHMAN PRATAMA", "BAYU SIGID PRASSETIYO", "DHIVO SANDHY PRATAMA", "FAJAR YUKANANTA",
  "FARDHAN BILLYAN ANGGARA PUTRA", "GESANG ARUNDAYA DEN PRASETYO", "GYCELLA WILLY CANDRA FAIRY", "HARIS ALFA ADINATA", " SYAHREZA YUSUF AL-WI",
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
      <h3>${p.nama}</h3>
      <p class="jabatan">${p.jabatan}</p>
      <p class="tugas">${p.tugas}</p>
    </div>
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

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

document.getElementById("stat-siswa").textContent = siswa.length;

renderPengurus();
renderSiswa(siswa);
initSearch();
initMenu();
