
function variable_local(edad) {
  //scope local
  var resultado; //var se puede usar la variable en cualquier parte de la función
  if (edad >= 18) {
    resultado = "Es mayor de edad";
  }else {
    resultado = "Es menor de edad";
  }
  console.log(resultado);
}

function variable_local2(edad) {
  let resultado; // Si se utiliza de esta manera, se hace referencia al scope global
  if (edad >= 18) {
    resultado = "Es mayor de edad"; //let solo se puede utilizar en la estructura que esta declarada
  }else {
    resultado = "Es menor de edad";
  }
  console.log(resultado);
}
//variable_local();
variable_local2()
