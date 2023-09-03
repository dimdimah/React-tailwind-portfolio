const links = document.querySelectorAll(".link-hover");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "#868686";
  });

  link.addEventListener("mouseleave", () => {
    link.style.background = "";
    link.style.color = "#010101";
  });
});
