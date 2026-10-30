/* Interações leves do portfólio */
const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open", !isOpen);
    const label = menuButton.querySelector(".sr-only");
    if (label) label.textContent = isOpen ? "Abrir menu" : "Fechar menu";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
      const label = menuButton.querySelector(".sr-only");
      if (label) label.textContent = "Abrir menu";
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menuButton.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
      menuButton.querySelector(".sr-only").textContent = "Abrir menu";
      menuButton.focus();
    }
  });
}

/* Links provisórios não devem levar o visitante a uma página inexistente. */
document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Substitua este link pelo endereço real do seu perfil antes de publicar o portfólio.");
  });
});
