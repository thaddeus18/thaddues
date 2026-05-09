// Background music - Auto play on load and loop continuously
const bgMusic = document.getElementById('bg-music');

// Auto-play music when page loads
window.addEventListener('load', () => {
  // Attempt to play music automatically
  const playPromise = bgMusic.play();

  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Music is playing successfully
      console.log('Background music started');
    }).catch(() => {
      // Autoplay failed due to browser restrictions
      console.log('Autoplay blocked by browser');
    });
  }
});

// Floating hearts effect on click
document.addEventListener('click', (e) => {
  const heart = document.createElement('span');
  heart.textContent = '💗';
  heart.style.position = 'absolute';
  heart.style.left = e.pageX + 'px';
  heart.style.top = e.pageY + 'px';
  heart.style.fontSize = Math.random() * 30 + 20 + 'px';
  heart.style.animation = 'floatHeart 2s linear';
  heart.style.opacity = 0.8;
  document.getElementById('floating-hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
});

// Typing effect in Birthday Wish section
const text = "My wish for you, mahal, is that life greets you gently—as if the universe itself is making room for your dreams to bloom one by one. I hope your heart never runs out of wonder, that your days become filled with little kinds of magic, and that wherever you go, love and light follow you as naturally as moonlight follows the night. And when the world feels too heavy, I hope you always remember that you are deeply cherished—not only by me, but by every soul lucky enough to witness your beautiful existence. 💗";
const typingText = document.getElementById('typing-text');
let index = 0;

function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}
window.addEventListener('scroll', () => {
  const wishSection = document.getElementById('wish');
  const rect = wishSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100 && typingText.textContent === '') {
    type();
  }
});

// Reason cards click to reveal
document.querySelectorAll('.reason-card').forEach(card => {
  card.addEventListener('click', function(e) {
    e.stopPropagation();
    const message = this.getAttribute('data-reveal');
    this.setAttribute('data-message', message);
    this.classList.toggle('revealed');
  });
});

// Photo cards flip to reveal memories
document.querySelectorAll('.photo-card').forEach(card => {
  card.addEventListener('click', function(e) {
    e.stopPropagation();
    const message = this.getAttribute('data-message');
    const memoryText = this.querySelector('.memory-text');
    this.classList.toggle('flipped');
    if (this.classList.contains('flipped')) {
      memoryText.textContent = message;
    } else {
      memoryText.textContent = '';
    }
  });
});

// Surprise gift modal functionality
const surpriseGift = document.getElementById('surprise-gift');
const surpriseModal = document.getElementById('surprise-modal');
const closeSurprise = document.querySelector('.close-surprise');

surpriseGift.addEventListener('click', () => {
  surpriseModal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

closeSurprise.addEventListener('click', () => {
  surpriseModal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close modal when clicking outside the content
surpriseModal.addEventListener('click', (e) => {
  if (e.target === surpriseModal) {
    surpriseModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
