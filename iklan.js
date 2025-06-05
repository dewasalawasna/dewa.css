
  // Buat elemen video iklan
  const iklanVideo = document.createElement('video');
  iklanVideo.src = "https://vps.carikode.com/video/iklan.mp4";
  iklanVideo.style.position = "absolute";
  iklanVideo.style.top = "0";
  iklanVideo.style.left = "0";
  iklanVideo.style.width = "800px";
  iklanVideo.style.height = "400px";
  iklanVideo.style.zIndex = "9999";
  iklanVideo.style.display = "none";
  iklanVideo.controls = false;
  iklanVideo.autoplay = false;
  iklanVideo.muted = false;

  // Tambahkan ke dalam container video
  const videoContainer = document.querySelector(".anime-video-container");
  videoContainer.style.position = "relative";
  videoContainer.appendChild(iklanVideo);

  // Fungsi untuk menampilkan iklan
  function tampilkanIklan() {
    iklanVideo.style.display = "block";
    iklanVideo.play();

    // Sembunyikan video utama
    const iframe = videoContainer.querySelector("iframe");
    iframe.style.display = "none";

    // Setelah iklan selesai, kembalikan video utama
    iklanVideo.onended = function () {
      iklanVideo.style.display = "none";
      iframe.style.display = "block";
    };
  }

  // Atur timer untuk setiap 5 menit (300000 ms)
  setInterval(tampilkanIklan, 300000); // 5 menit



  // Tunggu sampai DOM siap
  document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.querySelector(".anime-video-container");

    // Buat elemen <img> untuk watermark
    const watermark = document.createElement("img");
    watermark.src = "https://i.postimg.cc/T3QPKr39/105156.png";
    watermark.alt = "Watermark";
    watermark.style.position = "absolute";
    watermark.style.top = "10px";
    watermark.style.right = "10px";
    watermark.style.width = "80px";
    watermark.style.opacity = "0.6";
    watermark.style.zIndex = "1000";
    watermark.style.pointerEvents = "none";

    // Pastikan container video punya posisi relatif
    videoContainer.style.position = "relative";

    // Tambahkan watermark ke dalam container video
    videoContainer.appendChild(watermark);
  });

