
    document.addEventListener("DOMContentLoaded", () => {
    // Checa se ocorreu um evento de click no hamburguer manu
    const navbarBurger = document.querySelector(".navbar-burger");
    navbarBurger.addEventListener("click", () => {
  
        // Troca pela classe "is-active" no "navbar-burger" e no "navbar-menu"
        navbarBurger.classList.toggle("is-active");
        const navbarMenu = document.querySelector(".navbar-menu");
        navbarMenu.classList.toggle("is-active");
  
    });
  });
