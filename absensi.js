const ABSENSI_URL =
  "https://script.google.com/macros/s/AKfycbzvt5ZQw4KPVV61DQJP6J1xpiHSW6pk7WemQzdTKIWC-6AFQvsQMjQm6C61gGwp5qvN/exec";

function initAbsensi() {
  const tanggalEl = document.getElementById("absensi-tanggal");
  const linkEl = document.getElementById("absensi-app");

  if (linkEl) {
    linkEl.href = ABSENSI_URL;
  }

  if (!tanggalEl) return;

  const now = new Date();
  tanggalEl.textContent = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

initAbsensi();
