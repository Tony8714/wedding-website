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

// Scroll to Top on Page Load
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 0);
});