const sun = document.querySelector('.icon_sun');
const hearts = document.querySelectorAll('.icon_heart');
const searchInput = document.getElementById('searchInput');
const articleContainers = document.querySelectorAll('.article_container');

sun.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Trocar a imagem do sol para a lua e vice-versa
  sun.src = document.body.classList.contains('dark') ? '/assets/Images/Moon.svg' : '/assets/Images/SunDim.svg';
});

hearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('filled');
    // Trocar a imagem do coração para preenchido e vice-versa
    heart.src = heart.classList.contains('filled') ? '/assets/Images/HeartFilled.svg' : '/assets/Images/Heart.svg';
  });
});

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  articleContainers.forEach((articleContainer) => {
    const articleText = articleContainer.querySelector('.article_text').textContent.toLowerCase();

    if (articleText.includes(searchTerm)) {
      articleContainer.style.display = 'flex';
    } else {
      articleContainer.style.display = 'none';
    }
  });
});

articleContainers.forEach((articleContainer) => {
  articleContainer.addEventListener('click', () => {
    // Adiciona ou remove a classe 'selected' quando o card é clicado
    articleContainer.classList.toggle('selected');
  });
});