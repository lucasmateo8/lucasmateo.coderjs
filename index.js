let numero = Number(prompt("Ingrese un número para saber sus productos"));
if(numero === 0 ) {
    alert ("el numero debe ser distinto de 0");
} else {
    for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  alert(`${numero} x ${i} = ${resultado}`);

}

}
