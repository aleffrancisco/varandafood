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

const tel = document.getElementById("tel");
const lpre = "https://wa.me/55";
const lpos =
  "?text=Parab%C3%A9ns!%20Voc%C3%AA%20ganhou%20um%20a%C3%A7a%C3%AD%20do%20Varanda%20Food!%20Nos%20siga%20no%20instagram%20e%20fique%20ligado(a)%20nas%20nossas%20promo%C3%A7%C3%B5es%20semanais.%20https://www.instagram.com/varandafoodjanga/";

const btn = document.getElementById("button");
const bte = document.getElementById("bte");

btn.addEventListener("click", () => {
  console.log(lpre + tel.value + lpos);
  bte.href = lpre + tel.value + lpos;
  bte.style.display === "flex"
    ? (bte.style.display = "none")
    : (bte.style.display = "flex");
});

/*var nome = prompt("Qual é o seu nome?");
  alert("Olá " + nome + ", prazer em conhecê-lo!");*/
