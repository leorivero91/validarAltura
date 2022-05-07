rotulo.innerHTML = "Ingrese la altura de la persona";

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
  let alturaPermitida: number = 1.3;
  let alturaPersona: number = Number(altura.value);

  if (alturaPersona >= alturaPermitida) {
    console.log(
      "La persona puede subir al juego,cumple con la altura",
      alturaPersona
    );
  } else {
    console.log(
      "La persona no puede subir al juego,no cumple con la altura",
      alturaPermitida
    );
  }
});
