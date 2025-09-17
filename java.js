// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollBtn.className = 'scroll-to-top';
document.body.appendChild(scrollBtn);

scrollBtn.style.display = 'none';
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollBtn.style.transition = 'opacity 0.3s';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '32px';
scrollBtn.style.right = '32px';
scrollBtn.style.zIndex = '999';
scrollBtn.style.background = '#ff9800';
scrollBtn.style.color = '#fff';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.width = '48px';
scrollBtn.style.height = '48px';
scrollBtn.style.fontSize = '1.5rem';
scrollBtn.style.boxShadow = '0 2px 8px rgba(44,62,80,0.13)';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.opacity = '0.85';
scrollBtn.onmouseover = () => scrollBtn.style.opacity = '1';
scrollBtn.onmouseout = () => scrollBtn.style.opacity = '0.85';