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

  let isPlaying = false;

  // Require user interaction to start music
  const enableMusic = () => {
    bgMusic.play().then(() => {
      isPlaying = true;
      musicToggle.textContent = "🔊";
    }).catch(() => {
      console.warn("Playback failed. User gesture required.");
    });
  };

  // First user interaction triggers music
  document.addEventListener("click", enableMusic, { once: true });

  // Toggle button
  musicToggle.addEventListener("click", () => {
    if (isPlaying) {
      bgMusic.pause();
      isPlaying = false;
      musicToggle.textContent = "🔇";
    } else {
      bgMusic.play().then(() => {
        isPlaying = true;
        musicToggle.textContent = "🔊";
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const marquee = document.getElementById("marqueeContent");
  let scrollAmount = 0;

  function scrollGallery() {
    scrollAmount -= 1;
    marquee.style.transform = `translateX(${scrollAmount}px)`;

    // Reset scroll when it reaches halfway
    if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
      scrollAmount = 0;
    }

    requestAnimationFrame(scrollGallery);
  }

  scrollGallery();
});


const images = document.querySelectorAll("#marqueeContent img");

images.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "transform 0.3s ease";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});
  
