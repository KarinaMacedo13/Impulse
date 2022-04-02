//lili: boton pasar de vista1 a vista2
const viewContainer = document.querySelector(".viewContainer");
const viewContainer2 = document.querySelector(".viewContainer2");
const yesBtn = document.getElementById("yesBtn");
yesBtn.addEventListener("click", () => {
  viewContainer.style.display = "none";
  viewContainer2.style.display = "block";
});
const notBtn = document.getElementById("notBtn");
notBtn.addEventListener("click", () => {
  console.log("notBtn");
});
//lili: boton pasar de vista2 a vista3
const viewContainer3 = document.querySelector(".viewContainer3");
const solicitarBtn = document.getElementById("solicitar");
solicitarBtn.addEventListener("click", () => {
  viewContainer2.style.display = "none";
  viewContainer3.style.display = "block";
});
//lili: boton pasar de vista3 a vista4
const viewContainer4 = document.querySelector(".viewContainer4");
const bbvaBtn = document.getElementById("bbva");
bbvaBtn.addEventListener("click", () => {
  viewContainer3.style.display = "none";
  viewContainer4.style.display = "block";
});

//lili: boton pasar de vista4 a vista5
const viewContainer5 = document.querySelector(".viewContainer5");
const noCumpleBtn = document.getElementById("noCumple");
noCumpleBtn.addEventListener("click", () => {
  viewContainer4.style.display = "none";
  viewContainer5.style.display = "block";
});

//boton empezar que va al menu de opciones
const btnIn = document.getElementById("btnIn");
btnIn.addEventListener("click", () => {
  document.querySelector(".menu").style.display = "none";
  document.querySelector(".menu_Third2").style.display = "block";
  document.querySelector(".contentZero").style.display = "block";
  const label = document.getElementById("labelname").value;
  console.log(label);
  const nameWelcome = document.getElementById("nameWelcome");
  nameWelcome.innerHTML = "¡Hola " + label + "!";
  const pers = document.getElementById("pers");
  pers.innerHTML =
    label + " ingresa, busca solicitar su primer crédito educativo.";
});

//option a la sgt pagina
const next = document.getElementById("next");
next.addEventListener("click", () => {
  document.querySelector(".contentZero").style.display = "none";
  document.querySelector(".contentOne").style.display = "block";
});

const btnInPrest = document.getElementById("btnInPrest");
btnInPrest.addEventListener("click", () => {
  document.querySelector(".contentOne").style.display = "none";
  document.querySelector(".viewContainerMain").style.display = "block";
});
