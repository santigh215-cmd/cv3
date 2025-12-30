document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const bloques = document.querySelectorAll(".bloque");

  bloques.forEach((bloque, index) => {
    bloque.style.opacity = "0";
    bloque.style.transform = "translateY(30px)";
    bloque.style.transition = "all 0.7s ease";

    setTimeout(() => {
      bloque.style.opacity = "1";
      bloque.style.transform = "translateY(0)";
    }, index * 180);
  });
});

// Efecto hover dinámico
const tarjetas = document.querySelectorAll(".bloque");
tarjetas.forEach(t => {
  t.addEventListener("mouseenter", () => {
    t.style.boxShadow = "0 10px 25px rgba(106,13,173,0.25)";
  });

  t.addEventListener("mouseleave", () => {
    t.style.boxShadow = "none";
  });
});
