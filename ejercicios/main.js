
function CallMenu(){
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares \r\n 9. calcular edad \r\n 10. calcular menor \r\n 11. calcular bono de antiguedad\r\n 12. calcular sueldo por año \r\n 13. calcular alumnos aprobados \r\n 14. calcular focos \r\n 15. calcular si puede votar")
    );
    if (isNaN(nro_ejercicio)){
        alert("porfavor ingresa valores numericos");
    }else{
        MenuEjercicios(nro_ejercicio)
    }
}

function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 = parseFloat(prompt("ingrese el valro 1 a sumar:"));
            let valor2 = parseFloat(prompt("ingrese el valro 2 a sumar:"));
            alert(ej1_sumarValores(valor1,valor2));
          break;

        case 2  :
            let ex1 = parseFloat(prompt("ingrese la primera nota:"));
            let ex2 = parseFloat(prompt("ingrese la segunda nota:"));
            let ex3 = parseFloat(prompt("ingrese la tercera nota:"));
            let ex4 = parseFloat(prompt("ingrese la cuarta nota:"));
            alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4))
      break;

      case 3 :
      let base_rect =  parseFloat(prompt("ingrese la base del recatngulo"));     
      let altura_rect =  parseFloat(prompt("ingrese la altura del recatngulo"));
      alert(ej3_CalcularAreaReactangulo(base_rect,altura_rect))
      break;

     case 4 :
      let base = parseFloat(prompt("ingrese la base del rectangulo"));
      let altura =parseFloat(prompt("ingrese laaltura"));
      alert(ej4_CalcularAreaTriangulo(base,altura))

      break;

      case 5 :
        let radio = parseFloat(prompt("ingrese radio del circulo"));
        alert(ej5_CalcularRadioCircul(radio))
        break;

      case 6:
        let salario_hora= parseFloat(prompt("ingrese el salario x hora"));
        let horas = parseFloat(prompt("ingrese la horas trabajadas"));
        alert(ej6_CalcularSalario(salario_hora,horas)) 
          break;

      case 8 :
        let cantidadSoles = parseFloat(prompt("ingrese la cantidad de soles"));
        alert(ej8_convertirDolares(cantidadSoles));
        break;

      case 9 :
        let fechaNacimiento = parseInt(prompt("Ingrese el año de nacimiento"));
        alert(ej9_calcularEdad(fechaNacimiento));
        break;

        case 10 :
          let nombrePersona1 = (prompt("Ingrese el nombre de la primera persona"));
          let edadPersona1 = parseInt(prompt("Ingrese la edad de la 1ra persona"));
          let nombrePersona2 = (prompt("Ingrese el nombre de la segunda persona"));
          let edadPersona2 = parseInt(prompt("Ingrese la edad de la 2da persona"));
          let nombrePersona3 = (prompt("Ingrese el nombre de la tercera persona"));
          let edadPersona3 = parseInt(prompt("Ingrese la edad de la 3ra persona"));
          alert(ej10_nombreEdad(nombrePersona1,edadPersona1,nombrePersona2,edadPersona2,nombrePersona3,edadPersona3));
          break;
      
        case 11 :
          let bono = parseInt(prompt("ingrese la cantidad de años trabajados"));
          alert(ej11_calculoBono(bono));
          break;

          case 12 :
            let sueldo = parseInt(prompt("ingrese el sueldo del trabajador"));
            alert(ej12_calculoSueldo(sueldo));
            break;
  
            case 13 :
              let cantidad = parseInt(prompt("ingrese la cantidad de alumnos"));
              alert(ej13_calculoAprobados(cantidad));
              break;

      case 14:
        let  nro_focos = parseInt (prompt("ingrese el numero de focos:"))
        alert(ej14_CalcularColorFocos(nro_focos));
        break;

        case 15 :
              let edad = parseInt(prompt("ingrese la edad de la persona"));
              alert(ej15_puedeVotar(edad));
              break;



    }

}

// este es un comentario---------------------------------------------------------------------------

function ej1_sumarValores(a,b){
    if(isNaN(a) || isNaN(b)){
        return" porfavor ingrese valores";
    }else{
        return a + b;
    }
}

function ej2_calcularPromedio(ex1,ex2,ex3,ex4){
    if(isNaN (ex1) || isNaN(ex2)|| isNaN(ex3) || isNaN(ex4)){
        return "porfavor ingresa valores";
    } else{
        return (ex1 + ex2 + ex3 + ex4) /4 ;
    }
    
}

function ej3_CalcularAreaReactangulo(base_rect,altura_rect){
    if(isNaN(base_rect) || isNaN(altura_rect) ){
        return "ingresa valores numericos"
    } else{
        return "el area del rectangulo es :" +base_rect * +altura_rect;
    }

}


function ej4_CalcularAreaTriangulo(base,altura){
    if(isNaN(base) || isNaN(altura) ){
        return "ingresa valores numericos"
    } else{
        return "el area del traiangulo es :" + (base * altura) /2 ;
    }

}

function ej5_CalcularRadioCirculo(radio){
    if(isNaN(radio)){
        return "ingrese el radio"
    }else{
        const pi = 3.14
        return "el area del circulo es :" + pi * (radio * radio)
    }
}

function ej6_CalcularSalario(salario, horas) {
    let resultado = "";
    let limite = 40;
    if (isNaN(salario) || isNaN(horas)) {
      return "Por favor ingrese valores numericos";
    } else {
      if (horas > limite) {
        resultado =
          "Solo se pagaran " +
          limite +
          " horas semanales. Su salario es : " +
          salario * limite;
      } else if (horas > 0 && horas <= limite) {
        resultado = "Su salario es :" + salario * horas;
      }
      return resultado;
    }

    
  }

  function ej14_CalcularColorFocos(nro_focos) {
    let focos = [];
    let verde = 0;
    let blanco = 0;
    let rojo = 0;
    if (isNaN(nro_focos)) {
      return "Por favor ingrese valores numericos";
    } else {
      for (let index = 0; index < nro_focos; index++) {
        let color = prompt("Ingrese el color del foco : ");
        focos.push({ color: color });
      }
  
      for (var property in focos) {
        switch (focos[property].color) {
          case "verde":
            verde++;
            break;
          case "blanco":
            blanco++;
            break;
          case "rojo":
            rojo++;
            break;
          default:
            break;
        }
      }
      return (
        "Color de Focos Verdes : " +
        verde +
        " - Rojos : " +
        rojo +
        " - Blancos : " +
        blanco
      );
    }
  }

  function ej8_convertirDolares(soles){
    if (isNaN(soles)){
      return "ponga la cantidad de soles"
    }
    else {
      return "la cantidad de dolares es" , soles/3.9;
    }
  }

  function ej9_calcularEdad(fecha){
    
    if (isNaN(fecha)){
      return "ponga la fecha de su nacimiento"
    }
    else {
      edadFinal = 2022 - fecha;
      return "la edad de la persona es " + edadFinal;
    }
  }

  function ej10_nombreEdad(nom1,edad1,nom2,edad2,nom3,edad3,){
    if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) {
      return "le falta agregar alguna edad"
    }
    else{
   let array_edad = [edad1,edad2,edad3];
   let array_nombre = [nom1,nom2,nom3];
   let menor = edad1;
   for (let i = 0; i<=array_edad.length; i++) {
    if (array_edad[i]<menor){
      menor = array_edad[i]
      nombre_menor  = array_nombre[i]
    }
  }
  
    return " la edad menor es " + menor + " y se llama " + nombre_menor;
   
  }
}

function ej11_calculoBono(años) {
  let bono =0;
  if (isNaN(años) || años<=0){
    return "ponga la cantidad de años"
  }
  else if(años<=5){
      bono = años*100;
    }
  
    else {
      bono = 1000;
    }
    return" el bono sera de " +  bono;
}

function ej12_calculoSueldo(sueldo){
  if (isNaN(sueldo)){
    return "ponga el sueldo"
  }
  else {
 let arraySueldo =[sueldo];
 for ( let i=1;i<=5;i++){
  sueldo = sueldo*1.1;
  arraySueldo.push(Math.round(sueldo));
 }
 return " los sueldos son " + arraySueldo + " y el ultimo sueldo es " + arraySueldo[arraySueldo.length-1];
}
}

function ej13_calculoAprobados(cantidad){
  if (isNaN(cantidad)){
    return "ponga la cantidad de alumnos"
  }
  else {
    let aprobados = 0;
    let desaprobados = 0;
    arrayNotas = []
    for ( let i=1; i<=cantidad; i++){
    let nota = parseFloat(prompt("Ingrese la nota del " + i + " alumno"))
    arrayNotas.push(nota);
    }
    for (let j=0;j<=arrayNotas.length-1;j++){
      if(arrayNotas[j]<11){
        desaprobados+=1;
      }
      else {
        aprobados+=1;
      }
    }
    return "la cantidad de aprobados es " + aprobados + " y la cantidad de desaprobados es " + desaprobados;
}
}

function ej15_puedeVotar(edad){
  if (isNaN(edad)){
    return "ponga la edad"
  }
  else {
    if ( edad<18){
      return "no puede votar"
    }
    else {
      return " si puede votar"
    }
}
}
