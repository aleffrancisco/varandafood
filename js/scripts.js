const form = document.querySelector(".cadastro");
const title = document.querySelector(".title");

const mostrar = function () {
  form.style.display === "flex"
    ? (form.style.display = "none")
    : (form.style.display = "flex");

  title.style.display === "none"
    ? (title.style.display = "flex")
    : (title.style.display = "none");
};
