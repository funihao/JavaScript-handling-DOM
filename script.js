const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btn = document.querySelector("button");
const resultado = document.querySelector("#result");

btn.addEventListener("click", sumaInputValues);

function sumaInputValues(event) {
  const suma = input1.value + input2.value;
  resultado.innerText = "La suma es: " + suma;
}
