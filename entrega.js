
// clase 1

// const edad=parseInt(prompt("¿Eres mayor de edad? Ingrese su edad"));
// alert("Mi edad es " + edad);



// clase 2

// const nombreUsuario=prompt("Ingrese su Usuario");

// const clave=prompt("Ingrese su clave personal");

// if ((nombreUsuario == "gonzah" || nombreUsuario == "Gonzah") && clave == "gonzahervalejo") {
   
//     alert("Bienvenido GonzaH");
// }

// else {

//     alert ("Intruso");
// }



// clase 3

// turnos

// for (let i = 1; i <=10; i++) {
// let ingresarNombre = (prompt("Igresar nombre"));
// console.log( "Tienes " +i+ " personas adelante " +ingresarNombre);
// }

// let i = false;
// do{
//     console.log("No hay mas turnos");

// } 



// clase 4

// let bienvenido = (prompt("Bienvenido, que producto desea? 1)soquete  2)Medias  3)Deportivas. Ingrese un numero"));

// function medias (bienvenido){


// if (bienvenido == 1) {

//     alert ("Se añadio soquete");
// }

// else if (bienvenido == 2) {

//     alert ("Se añadio Medias");

// }

// else if (bienvenido == 3) {

//     alert ("Se añadio Deportivas");
// }

// else {

//     alert ("No coincide");
// }
// }

// clase 5 objetos


class Medias {

    calcular (nombre, precio) {
    
        this.nombre = nombre;
        this.precio = precio;
    
    }
    
    getSaleInfo(){

        return (this.nombre + "cuesta" + this.precio);
    }
     

}

    const medias1 = new Medias ("soquete", 200);
    const medias2 = new Medias ("deportivas", 250);
    const medias3 = new Medias ("largas", 300);

alert (medias1.getSaleInfo());
alert (medias2.getSaleInfo());
alert (medias3.getSaleInfo());
    

    
    







