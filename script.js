// Optional: Add interactivity or animations using JavaScript
// For example, you can make the flower grow on hover
const flower = document.querySelector('.flower');

flower.addEventListener('mouseenter', () => {
  flower.style.transform = 'scale(1.2)';
});

flower.addEventListener('mouseleave', () => {
  flower.style.transform = 'scale(1)';
});
