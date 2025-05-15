const typingText = document.querySelector('.typing');
const words = [" Mahasiswa Sistem Informasi", " Web Developer", " System Analys"];
let index = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  currentWord = words[index];
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % words.length;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }
  setTimeout(type, 100);
}

document.addEventListener('DOMContentLoaded', type);

