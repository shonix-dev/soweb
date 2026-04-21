document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");

  if (!menuButton || !menu) {
    return;
  }

  const closeMenu = () => {
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  };

  menuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  menu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
});
