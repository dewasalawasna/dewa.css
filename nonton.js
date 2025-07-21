<script>
let currentViewers = Math.floor(Math.random() * (3000 - 350 + 1)) + 350;

function formatNumber(number) {
  return number.toLocaleString('id-ID');
}

function updateViewerCounter() {
  const counterElement = document.getElementById('counter-success');
  if (!counterElement) return;

  const change = Math.floor(Math.random() * 26) + 5; // antara 5–30
  const direction = Math.random() < 0.5 ? -1 : 1;

  currentViewers += change * direction;

  // Batas minimum dan maksimum
  if (currentViewers < 350) currentViewers = 350;
  if (currentViewers > 3000) currentViewers = 3000;

  counterElement.textContent = formatNumber(currentViewers) + ' sedang menonton';
}

updateViewerCounter();
setInterval(updateViewerCounter, 5000);
</script>
