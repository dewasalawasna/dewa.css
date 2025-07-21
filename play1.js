<script>
document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('videoPlayer');
    const adOverlay = document.getElementById('adOverlay');
    const adVideo = document.getElementById('adVideo');
    const closeAdBtn = document.getElementById('closeAdBtn');
    const lowerThird = document.getElementById('lowerThird');
    const episodeTitle = document.getElementById('episodeTitle');
    const episodeButtonsContainer = document.getElementById('episodeButtons');
    const downloadBtn = document.getElementById('downloadBtn');
    const manualDownloadPopup = document.getElementById('manualDownloadPopup');
    const manualDownloadLink = document.getElementById('manualDownloadLink');

    const episodes = window.episodes || [];
    let currentEpisode = episodes[0];
    
    const defaultTimeLimit = 600; // 10 menit
    let currentLimit = defaultTimeLimit;
    let episodeIndex = 1;

    function loadEpisode(episode, index) {
        // Hapus semua tombol aktif
        document.querySelectorAll('.episode-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Tandai tombol yang aktif
        episodeButtonsContainer.children[index].classList.add('active');

        // Set video source dan judul
        videoPlayer.src = episode.url;
        episodeTitle.textContent = episode.title;

        // Reset timer
        currentEpisode = episode;
        episodeIndex = 1;
        currentLimit = defaultTimeLimit;
        videoPlayer.play();
    }

    // Tampilkan episode pertama saat load
    if (currentEpisode) {
        videoPlayer.src = currentEpisode.url;
        episodeTitle.textContent = currentEpisode.title;
    }

    // Buat tombol-tombol episode
    episodes.forEach((ep, idx) => {
        const btn = document.createElement('button');
        btn.textContent = idx + 1;
        btn.classList.add('episode-button');
        if (idx === 0) btn.classList.add('active');
        btn.addEventListener('click', () => loadEpisode(ep, idx));
        episodeButtonsContainer.appendChild(btn);
    });

    // Hentikan video saat melewati batas waktu
    videoPlayer.addEventListener('timeupdate', () => {
        if (videoPlayer.currentTime >= currentLimit) {
            videoPlayer.pause();
            alert("Waktu menonton episode ini telah habis.");
        }
    });

    // Tombol Download langsung
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentEpisode && currentEpisode.url) {
            manualDownloadLink.href = currentEpisode.url;
            manualDownloadPopup.style.display = 'block';
        } else {
            alert('Link download tidak tersedia.');
        }
    });

    // Salin link ke clipboard
    window.copyToClipboard = function () {
        manualDownloadLink.select();
        document.execCommand('copy');
        alert('Link telah disalin ke clipboard!');
    };

    // Tutup popup download manual
    closeAdBtn.addEventListener('click', () => {
        manualDownloadPopup.style.display = 'none';
    });
});
</script>
