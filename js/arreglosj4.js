//  //Crear un arreglo vacio donde se pueda ingresar los datos de tres motoviajeros
function arreglosej4(){
 const rpm=[]
    const moto1={
        nombre:prompt('¿Cual es tu nombre?'),
        linea:prompt('¿Cual es la linea de tu motocicleta?'),
        placa:prompt('¿Cual es la placa de tu motocicleta?')

    };
    const moto2={
        nombre:prompt('¿Cual es tu nombre?'),
        linea:prompt('¿Cual es la linea de tu motocicleta?'),
        placa:prompt('¿Cual es la placa de tu motocicleta?')

    };
    const moto3={
        nombre:prompt('¿Cual es tu nombre?'),
        linea:prompt('¿Cual es la linea de tu motocicleta?'),
        placa:prompt('¿Cual es la placa de tu motocicleta?')

    };
 
 //crear arreglo vacio,tres objetos (objeto 3 de primero, objeto 1 de tecero,objeto 2 de segundo)
 //tomare el anterior(rpm)
 rpm.unshift(moto3);
 rpm.push(moto2);
 rpm.push(moto1);
 //con esto se cumple ambos ejercicios
 console.table(rpm);
}
//------------------------------finejercicio1forma---------------------------------
 //---------------------------------------------------------------------------------
 //aqui abajo esta la otra forma en la que se inserta objetos en un arreglo
//  const rpm=[
//     {
//         nombre:prompt('¿Cual es tu nombre?'),
//         linea:prompt('¿Cual es la linea de tu motocicleta?'),
//         placa:prompt('¿Cual es la placa de tu motocicleta?')

//     },
//     {
//         nombre:prompt('¿Cual es tu nombre?'),
//         linea:prompt('¿Cual es la linea de tu motocicleta?'),
//         placa:prompt('¿Cual es la placa de tu motocicleta?')

//     },
//     {
//         nombre:prompt('¿Cual es tu nombre?'),
//         linea:prompt('¿Cual es la linea de tu motocicleta?'),
//         placa:prompt('¿Cual es la placa de tu motocicleta?')

//     }
    
  
//  ];

//  console.table(rpm)
//------------------------------finejercicio2forma---------------------------------
//--------------------------------------------------------------------------
// const nombres =['Camilo','Cristian','Wilman','Daniel','Yecid','Alvaro','Luis','Aldair'];
// const  [nombre1,...demas]=nombres;
// console.table(nombres);
//-------------------------------------------------------------------------
// const nombres =['Camilo','Cristian','Wilman','Daniel','Yecid','Alvaro','Luis','Aldair'];
// const [nombre1, ,nombre2, ,nombre4, , ,nombre5]=nombres;
// console.log(nombre2);
// console.log(nombre4);
// console.table(nombre5);