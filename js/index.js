// Adiciona estrelas ao documento
function addStars() {
  const numStars = 100; // Número de estrelas desejado
  const container = document.querySelector(".stars");

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}vh`; // Posição vertical aleatória
    star.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
    star.style.animationDuration = `${Math.random() * 5 + 3}s`; // Duração aleatória da animação
    container.appendChild(star);
  }

  const numShootingStars = 5; // Número de estrelas cadentes desejado
  const shootingStarsContainer = document.querySelector(".shooting-stars");

  for (let i = 0; i < numShootingStars; i++) {
    const shootingStar = document.createElement("div");
    shootingStar.classList.add("shooting-star");
    shootingStar.style.top = `${Math.random() * 100}vh`; // Posição vertical aleatória
    shootingStar.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
    shootingStar.style.animationDuration = `${Math.random() * 3 + 1}s`; // Duração aleatória da animação
    shootingStarsContainer.appendChild(shootingStar);
  }
}

// Adiciona estrelas quando a página terminar de carregar
window.addEventListener("load", addStars);

// Função para iniciar a animação de digitação
function startTypingAnimation() {
  const typingElements = document.querySelectorAll(".typing-animation");
  typingElements.forEach((element) => {
    const text = element.textContent;
    element.innerHTML = ""; // Limpa o conteúdo do elemento
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i); // Adiciona cada caractere um por um
        i++;
      } else {
        clearInterval(typeTimer); // Para o timer quando o texto estiver completamente digitado
      }
    }, 100); // Ajuste a velocidade da digitação aqui (em milissegundos)
  });
}

// Inicia a animação quando a página terminar de carregar
window.addEventListener("load", startTypingAnimation);

