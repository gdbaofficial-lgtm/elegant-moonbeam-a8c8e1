const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

// COLLAPSIBLE PLAYERS CATEGORIES
document.addEventListener('DOMContentLoaded', function() {
  const categoryHeaders = document.querySelectorAll('.category-header');
  
  categoryHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      const content = document.getElementById(category + '-content');
      const icon = this.querySelector('.category-icon');
      
      // Toggle active class
      this.classList.toggle('active');
      content.classList.toggle('active');
      
      // Update player count visibility
      updatePlayerCount(category);
    });
  });
  
  // Function to update player count
  function updatePlayerCount(category) {
    const content = document.getElementById(category + '-content');
    const playerCards = content.querySelectorAll('.player-card');
    const countElement = document.querySelector(`[data-category="${category}"] .player-count`);
    const playerCount = playerCards.length;
    const emptyState = content.querySelector('.empty-state');
    
    if (playerCount > 0) {
      countElement.textContent = playerCount + ' Player' + (playerCount > 1 ? 's' : '');
      emptyState.style.display = 'none';
    } else {
      countElement.textContent = '0 Players';
      emptyState.style.display = 'block';
    }
  }
  
  // Initialize all categories
  categoryHeaders.forEach(header => {
    const category = header.getAttribute('data-category');
    updatePlayerCount(category);
  });
});
