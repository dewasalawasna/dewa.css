
// Menampilkan popup manual download dengan link
function showManualDownloadPopup(link) {
  const popup = document.getElementById('manualDownloadPopup');
  const input = document.getElementById('manualDownloadLink');
  if (popup && input) {
    input.value = link;
    popup.style.display = 'block';
  }
}

// Menyalin link manual ke clipboard
function copyToClipboard() {
  const input = document.getElementById('manualDownloadLink');
  if (!input) return;

  input.select();
  input.setSelectionRange(0, 99999); // Android/iOS support
  document.execCommand('copy');

  alert('Link telah disalin!');
}

// Ganti iframe pemutar dan judul episode saat tombol diklik
function gantiIframe(judul, link, buttonElement) {
  const iframe = document.getElementById('frameEpisode');
  const judulEl = document.getElementById('judulEpisode');
  const buttons = document.querySelectorAll('.episode-grid button');

  if (iframe && judulEl && buttonElement) {
    judulEl.innerText = judul;
    iframe.src = link;

    // Hapus semua kelas 'active'
    buttons.forEach(btn => btn.classList.remove('active'));

    // Tambahkan kelas 'active' ke tombol yang sedang diklik
    buttonElement.classList.add('active');

    // Jika ada array adLinks, buka tab baru dengan salah satu link acak
    if (typeof adLinks !== 'undefined') {
      const randomAd = adLinks[Math.floor(Math.random() * adLinks.length)];
      window.open(randomAd, '_blank');
    }
  }
}
