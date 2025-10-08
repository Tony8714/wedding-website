// --- Mobile hamburger menu ---
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Close the menu when any link inside is clicked
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// --- Countdown Timer ---
const weddingDate = new Date('December 10, 2025 14:00:00').getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById('countdown-section').innerHTML = '<div class="text-3xl font-bold text-pink-700">🎉 Happily Married!</div>';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(mins).padStart(2, '0');
  document.getElementById('seconds').textContent = String(secs).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);


// Background Music Autoplay with Toggle
document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");
  
    if (!bgMusic || !musicToggle) return;
  
    // Try autoplay
    bgMusic.play().catch(() => {
      document.addEventListener(
        "click",
        () => {
          bgMusic.play();
        },
        { once: true }
      );
    });
  
    // Toggle Play / Pause
    musicToggle.addEventListener("click", () => {
      if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = "🔊";
      } else {
        bgMusic.pause();
        musicToggle.textContent = "🔇";
      }
    });
  });

  // Slideshow
  const marqueeContainer = document.getElementById('marqueeContainer');
  const marqueeContent = document.getElementById('marqueeContent');

  let scrollAmount = 0;

  function marqueeScroll() {
    scrollAmount += 0.5; // speed of scrolling
    if (scrollAmount >= marqueeContent.scrollWidth / 2) {
      scrollAmount = 0; // reset for seamless loop
    }
    marqueeContainer.scrollLeft = scrollAmount;
    requestAnimationFrame(marqueeScroll);
  }

  marqueeScroll();
  
