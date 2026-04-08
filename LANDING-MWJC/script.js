const btnTema = document.getElementById("btn-tema");
const iconoTema = document.getElementById("icono-tema");
const body = document.body;

btnTema.addEventListener("click", () => {
  body.classList.toggle("tema-claro");

  if (body.classList.contains("tema-claro")) {
    iconoTema.textContent = "dark_mode";
  } else {
    iconoTema.textContent = "light_mode";
  }
});
