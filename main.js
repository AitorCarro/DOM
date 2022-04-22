// Afegeix al div de tipus "resultado" el valor de l'edat de Bea
const chicas = document.querySelectorAll("tr[sexo='mujer']>td");
    const bea = document.getElementsByClassName("resultado")[0].innerHTML = chicas[3].innerHTML;


/*---------------------------------------------------------*/

// Afegeix al div de tipus "resultado" el valor de l'edat de Bea i el de Aitor separats per comes
 const chicos = document.querySelectorAll("tr[sexo='hombre']>td");
    const beAitor = document.getElementsByClassName("resultado")[0].innerHTML =
        chicas[2].innerHTML + " " + chicas[3].innerHTML + " , " + chicos[0].innerHTML + " " + chicos[1].innerHTML;


/*---------------------------------------------------------*/

// Treure un any a l'edat de totes les dones

        for (i = 0; i < chicas.length; i++) {
            if (parseInt(chicas[i].innerHTML)) {
                edad = chicas[i].innerHTML - 1;
                chicas[i].innerHTML = edad;
                console.log(chicas[i - 1].innerHTML + " , su edad modificada es: " + edad);
            }
        }

/*---------------------------------------------------------*/

// Posar a resultat el nom dels menors d'edad

        const personas = document.querySelectorAll("tr>td");
        const menores = [];
    
        for (j = 0; j < personas.length; j++) {
            if (parseInt(personas[j].innerHTML)) {
                if (personas[j].innerHTML < 18) {
                    menores.push(personas[j - 1].innerHTML);
                    menores.push(personas[j].innerHTML);
                }
            }
        }
        console.log(menores);
        document.getElementsByClassName("resultado")[0].innerHTML =
            "Nombre y edad de los menores: " + menores;

/*---------------------------------------------------------*/

// Actualitzar la dada "media" i "acum" allà on toqui

    // const mediaEdad = 0;
    // const personas2 = document.querySelectorAll("tr>td");
    // const media = personas2.length / 2;

    // for (i = 0; i < personas2.length; i++) {
    //     if (parseInt(personas2[i].innerHTML)) {
    //         mediaEdad += parseInt(personas2[i].innerHTML);
    //     }
    // }

    // const acumulador = document.querySelector('[dato="acum"]');
    // acumulador.innerHTML = mediaEdad;
    // console.log(mediaEdad);
    // mediaEdad = mediaEdad / media;
    // const edMedia = document.querySelector('[dato="media"]');
    // edMedia.innerHTML = mediaEdad;

/*---------------------------------------------------------*/

// Afegeix un registre nou

const nuevoRegistro = document.createElement("tr");
nuevoRegistro.setAttribute("sexo", "hombre");

// Añado el nuevo registro con  su nombre
const nuevoElemento = document.createElement("td");
const textoNombre = document.createTextNode("Guillem");
nuevoElemento.appendChild(textoNombre);
// Añado el nuevo registro con su edad
const nuevaPersona = document.createElement("td");
const nuevaEdad = document.createTextNode("28");
nuevaPersona.appendChild(nuevaEdad);
//Lo adjunto a la tabla
nuevoRegistro.appendChild(nuevoElemento);
nuevoRegistro.appendChild(nuevaPersona);

//Adunto la fila a la tabla
const table = document.getElementsByTagName("table");
table[0].appendChild(nuevoRegistro);

/*---------------------------------------------------------*/

//Concatenar la dada "media" i "acum" allà on toqui, amb les noves dades

personas1 = document.querySelectorAll("tr>td");
    mediaEdad = 0;
    cantidad = personas1.length / 2;

    for (i = 0; i < personas1.length; i++) {
        if (parseInt(personas1[i].innerHTML)) {
            mediaEdad += parseInt(personas1[i].innerHTML);
        }
    }

    acum2 = document.querySelector('[dato="acum"]');
    acum2.innerHTML = mediaEdad; 

    mediaEdad = mediaEdad / cantidad;

    media2 = document.querySelector('[dato="media"]');
    media2.innerHTML = mediaEdad;

/*---------------------------------------------------------*/

// Mostrar per consola el contingut del div que te un id que comença per "je"
const empiezaJe = document.querySelector("[id^=je]");
console.log(empiezaJe.innerHTML);

/*---------------------------------------------------------*/

//Mostrar per consola el contingut del div que te un id que acaba per "fe"
const acabaFe = document.querySelector("[id$=fe]");
console.log(acabaFe.innerHTML);

/*---------------------------------------------------------*/

//Crea un botó que, quan es clicki,  ens mostri una pantalla informativa amb una llista de departaments.
    const botonDepartamentos = document.createElement("button");
    const boton = document.createTextNode("Lista de Departamentos");
    botonDepartamentos.appendChild(boton);
    document.body.appendChild(botonDepartamentos);

    botonDepartamentos.addEventListener("click", () => {
        const departamentos = document.querySelectorAll("tr[data-departament]");
        const listaDep = [];

        for (const departamento of departamentos) {
            if (!listaDep.includes(departamento.dataset.departament)) {
                listaDep.push("\n" + departamento.dataset.departament);
            }
        }

        const tituloDepartamentos = document.createElement("H7");
        const textoDepartamentos = document.createTextNode(
            "Departamentos: " + listaDep
        );
        tituloDepartamentos.appendChild(textoDepartamentos);
        document.body.appendChild(tituloDepartamentos);
    });

/*---------------------------------------------------------*/

//Crea un botó que, quan es clicki,  ens mostri una pantalla informativa l’antiguitat mitja de totes les persones de la llista.
const btnAntiguedad = document.createElement("button");
const medAntiguo = document.createTextNode("Media Antigüedad");
btnAntiguedad.appendChild(medAntiguo);
document.body.appendChild(btnAntiguedad);
btnAntiguedad.addEventListener("click", () => {
    let mediaAntiguedad = 0;
    let antiguedad = document.querySelectorAll("tr[data-entrada-empresa]");

    for (const entrada of antiguedad) {
        mediaAntiguedad += parseInt(entrada.dataset.entradaEmpresa);
    }
    alert(
        "La media de antigüedad es: " + mediaAntiguedad / antiguedad.length
    );
});

/*---------------------------------------------------------*/

// function edades(){
//     const entrenador1 =  document.getElementById("entrenador1");
//     const entrenador1edad = entrenador1.dataset.edad;
//     const entrenador2 =  document.getElementById("entrenador2");
//     const entrenador2edad = entrenador2.dataset.edad;
//     const entrenador3 =  document.getElementById("entrenador3");
//     const entrenador3edad = entrenador3.dataset.edad;
//     const entrenador4 =  document.getElementById("entrenador4");
//     const entrenador4edad = entrenador4.dataset.edad;
//     const entrenador5 =  document.getElementById("entrenador5");
//     const entrenador5edad = entrenador5.dataset.edad;

//     entrenador1.innerHTML = entrenador1.innerHTML + ", edad: " + entrenador1edad;
//     entrenador2.innerHTML = entrenador2.innerHTML + ", edad: " + entrenador2edad;
//     entrenador3.innerHTML = entrenador3.innerHTML + ", edad: " + entrenador3edad;
//     entrenador4.innerHTML = entrenador4.innerHTML + ", edad: " + entrenador4edad;
//     entrenador5.innerHTML = entrenador5.innerHTML + ", edad: " + entrenador5edad;

//     const mediaEdad = (parseInt(entrenador1edad)+parseInt(entrenador2edad)+parseInt(entrenador3edad)+parseInt(entrenador4edad)+parseInt(entrenador5edad)) / 5;
//     const mostrarMedia = document.getElementById("mostrarMedia");
//     mostrarMedia.innerHTML = "La media de edad es de: " + mediaEdad;
// }


/*---------------------------------------------------------*/

// function cambioColor() {
//   const nombre =  document.querySelector(".jaime");
//   nombre.style.color = "red";
// }

// function remove() {
//   const element = document.querySelector(".alumno3");
//   element.remove();
// }


/*---------------------------------------------------------*/

// document.querySelector(".ejemplo").style.backgroundColor = "blue";

// document.querySelector(".ejemplo1").style.fontSize = 25 + "px";


// const nodeList = document.querySelectorAll(".alumnos");
// for (i = 0; i < nodeList.length; i++) {
//   if (i % 2 == 0) {
//     nodeList[i].style.backgroundColor = "red";
//   } else {
//     nodeList[i].style.backgroundColor = "green";
//   }
// }

/*---------------------------------------------------------*/


// function myFunction() {
//   const list = document.getElementsByTagName("li");

//   for (i = 0; i < list.length; i++) {
//     if (i % 2 == 0) {
//       list[i].innerHTML = "Hola, yo soy Juan";
//     } else {
//       list[i].innerHTML = "Hola, yo soy José";
//     }
//   }
// }

// const element = document.getElementById("prueba");
// element.style.color = "red";

// function cambioColor() {
//   const x = document.querySelectorAll(".example");
  
//   for (i = 0; i < x.length; i++) {
//     if (i % 2 == 0) {
//       x[i].style.backgroundColor = "red";
//     } else {
//       x[i].style.backgroundColor = "blue";
//     }
//   }
// }

// const y = document.getElementById("myDIV1");
// const nodes = document.getElementsByClassName("personas");
// document.getElementById("demo").innerHTML = nodes.length;


/*---------------------------------------------------------*/



// function tamaño() {
//   var x = document.createElement("STYLE");
//   var t = document.createTextNode("p {font: 30px Arial;}");
//   x.appendChild(t);
//   document.head.appendChild(x);
//   }

// function imagen() {
//   document.body.style.backgroundColor = "#f3f3f3";
//   document.body.style.backgroundImage = "url('http://assets.stickpng.com/images/584a9b3bb080d7616d298777.png')";
// }


// function color() {
//   var x = document.getElementById("titulo").style.color;
//   document.getElementById("demo").innerHTML = x;
// }




/*---------------------------------------------------------*/



// document.addEventListener("click", function(){
//   document.getElementById("demo").innerHTML = "Que esperabas?";
// });

// document.addEventListener("mousemove", myFunction);

// function myFunction() {
//   document.getElementById("demo1").innerHTML = Math.random();
// }

// function eliminarControlador() {
//   document.removeEventListener("mousemove", myFunction);
// }


/*---------------------------------------------------------*/





//  const input = document.querySelector('input');
// const log = document.getElementById('log');

// input.addEventListener('keydown', logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }

// const button = document.querySelector('button');

// button.addEventListener('click', event => {
//   button.textContent = `Contador: ${event.detail}`;
// });