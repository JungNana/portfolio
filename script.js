// Simple lightbox: clicking a gallery image opens it full-size in a dialog.
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.gallery a').forEach((link) => {
  link.addEventListener('click', (event) => {
    // Old browsers without <dialog>: just open the image in a new tab.
    if (typeof lightbox.showModal !== 'function') { link.target = '_blank'; return; }
    event.preventDefault();
    lightboxImg.src = link.getAttribute('href');
    lightboxImg.alt = link.querySelector('img').alt;
    lightbox.showModal();
  });
});

// Close on the × button, on clicking the image/backdrop, or with Esc (built-in).
lightbox.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('close', () => { lightboxImg.src = ''; });
