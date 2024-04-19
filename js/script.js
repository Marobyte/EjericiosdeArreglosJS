document.addEventListener('DOMContentLoaded', function () {
// PRIMER EJERCICIO
    // se captura el submit
    document.getElementById('formulario').addEventListener('submit', function (event) {
        event.preventDefault();
        //se traen los datos del html
        let inputCantidad = document.getElementById('cantidad').value;
        let resultado = crear_arreglo(inputCantidad);
        alert(resultado)
        document.getElementById('cantidad').value = "";
    })
    //funcion para crear el arrego
    function crear_arreglo(inputCantidad) {

        let arreglo = [1]; // el primer elemento
        // se multiplica cada valor del arreglo por el doble del anterior
        for (let i = 1; i < inputCantidad; i++) {
            arreglo.push(arreglo[i - 1] * 2)
        }

        //se retorna el arreglo
        return arreglo;



    }
// SEGUNDO EJERCICIO
    //se captura el segundo submit
    document.getElementById('form-array').addEventListener('submit', function (event2) {
        event2.preventDefault();
        //se trae el resultado obtenido en la funcion
        
        
        let res = mayorArray()
        //se muestra por consola el resultado
        alert("El Valor mayor de este arreglo es : " + res);
        document.getElementById('resultado1').innerHTML = numeros;
        


    });
    // se crea una funcion
    function mayorArray() {
        // se insertan en un array 10 numeros aleatorios
        var numeros = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))
        // se muestran en un div los valores de forma aleatoria

        document.getElementById('resultado1').innerHTML = numeros;


        // el valor más grande del array:
        let max = 0;

        // Recorres el valor del array «numeros»:
        for (let numero of numeros) {

            // Evalúa si «max» es menor que «numero» para almacenar
            // en él el número más grande hasta el momento:
            if (max < numero)
                max = numero;
        }

        return max;
        // Muestra en la consola el valor numérico más grande del Array:

    }
// TERCER EJERCICIO
    // se toma el evento del tercer submit
    document.getElementById('form-dia').addEventListener('submit', function (event3) {
        event3.preventDefault();

        let numeroDia = document.getElementById('numeroDia').value;
        //se trae el resultado de la function
        if ((numeroDia >= 8) || (numeroDia == 0) || (numeroDia == "")){
            alert("Debe Ingresar un Numero entre 1 y 7")
            return
        }
        else {
            //se muestra el resultado por consola

            let resu = saberDia(numeroDia)
            alert("El Dia Correspondiente al numero es : " + resu);
            document.getElementById('numeroDia').value = "";
        }
    });


    //funcion de saber que dia es segun el numero
    function saberDia(numeroDia) {
        // se guarda el dato ingresado por el usuaruio desde el html

        // se guardan los valores en el arreglo
        const arregloDias = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO'];
        //se retorna el dia y se resta 1 porque el arreglo siempre comienza en cero
        return arregloDias[numeroDia - 1];

    }
// CUARTO EJERCICIO
    document.getElementById('form-buscarDato').addEventListener('submit', function (event4) {
        event4.preventDefault();

        buscarDato()


    });

    function buscarDato() {
        let inputDato = document.getElementById('Dato').value;

        let arreglo = Array(100).fill().map(function() {return Math.floor(Math.random() * 100)});

        for (let i = 1; i <= 100; i++) { 
              console.log(i); 
            } 

        let datoEncontrado = arreglo.find(element => element == inputDato);

        console.log(arreglo) // 11

    }

// QUINTO EJERCICIO
    document.getElementById('form-ordenar').addEventListener('submit', function (event5) {
        event5.preventDefault();

        desordenarArray()

        document.getElementById('desorden').innerHTML = array;

    });
    function desordenarArray() {
        //se desordena el array
        array.sort(() => Math.random() - 0.5);

    }
    //se muestra un array de 20 valores
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];



})

function ordenar() {
    //aqui hago una comparacion ya que para ordenarlo segun la documentacion dice que cuando una función de comparación es usada, los números se ordenan correctamente ya sean números o strings numericos.
    array.sort((a, b) => {
        // si la comparacion retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes.
        if (a == b) {
            return 0;
        }
        // si la comparacion resulta ser mayor a 0 quiere decir que 'b' es mayor que 'a' osea situa a b en un indice menor que a
        //reglas del compareFunction si la compracion resulta ser a menor que 0  es decir se sitúa 'a' en un indice menor que 'b'. Es decir, 'a' viene primero.
        if (a < b) {
            return -1;
        }
        return 1;
    });

    document.getElementById('orden').innerHTML = array;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


