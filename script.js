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

// Mobile Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const menuOverlay = document.getElementById('menu-overlay');
  const menu = document.getElementById('menu');
  const iconHamburger = document.getElementById('icon-hamburger');
  const iconClose = document.getElementById('icon-close');

  if (!menuBtn || !menuOverlay || !menu || !iconHamburger || !iconClose) {
    console.warn("Missing navigation elements. Check your HTML IDs.");
    return;
  }

  const menuLinks = menu.querySelectorAll('a');

  menuBtn.addEventListener('click', () => {
    const isHidden = menuOverlay.classList.contains('hidden');

    if (isHidden) {
      menuOverlay.classList.remove('hidden');
      menu.classList.remove('hidden');
      iconHamburger.classList.add('hidden');
      iconClose.classList.remove('hidden');
    } else {
      menuOverlay.classList.add('hidden');
      menu.classList.add('hidden');
      iconHamburger.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  });

  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      menuOverlay.classList.add('hidden');
      menu.classList.add('hidden');
      iconHamburger.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuOverlay.classList.add('hidden');
      menu.classList.add('hidden');
      iconHamburger.classList.remove('hidden');
      iconClose.classList.add('hidden');
    });
  });
});

// FAQ Accordion Toggle
document.addEventListener('DOMContentLoaded', () => {
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const icon = button.querySelector('.toggle-icon');

      item.classList.toggle('active');
      icon.textContent = item.classList.contains('active') ? '−' : '+';
    });
  });
});

// Smooth Scroll to Top on Page Load
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});