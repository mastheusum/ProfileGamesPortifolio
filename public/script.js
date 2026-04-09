const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    alert('Mais detalhes sobre o projeto em breve!');
  });
});
