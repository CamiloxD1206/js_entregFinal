// rpm 3 objetos
//darle datos a objetos con prompt(cada objeto minimo 5)
//mostrar obejtos y resumen de viaje
//----------------------------------------------------------------------------------
function registroej3(){
alert('coloca tus datos personales motoviajero')
let motoviajero={
    nombre:prompt('Cual es tu nombre?'),
    apellido:prompt('Cual es tu apellido?'),
    edad:prompt('cual es tu edad'),
    id:prompt('Cual tu tipo y numero identificacion?'),
    nacionalidad:prompt('Cual es tu nacionalidad?')

  
};
console.log(motoviajero)
alert('coloca los datos de la ruta que realizaste')
let ruta={
    
    nombreruta:prompt('nombre de tu ruta'),
    kilometros:parseFloat(prompt('Cuantos km tiene la ruta?')),
    puntodepartida:prompt('punto de partida'),
    puntodellegada:prompt('punto de llegada'),
    paradas:prompt('donde te detuviste?')
};
console.log(ruta)
alert('Coloca los datos que se te piden a continuacion para el aparatado de presupuesto')
let presupuesto={
    
    hospedaje:parseFloat(prompt('cuanto gastate en hopedaje')),
    alimentacion:parseFloat(prompt('cuanto gastate en alimentacion')),
    recreacion:parseFloat(prompt('cuanto gastate en recreacion')),
    manteninimiento:parseFloat(prompt('cuanto gastate en mantenimiento')),
    combustible:parseFloat(prompt('cuanto gastate en combustible'))
};
console.log(presupuesto);
console.log("Resumen de tu ruta");
console.log("AQUI TIENES EL VALOR UNITARIO DE TUS GASTOS");
console.log(`hospedaje $${presupuesto.hospedaje}`);
console.log(`alimentacion $${presupuesto.alimentacion}`);
console.log(`recreacion $${presupuesto.recreacion}`);
console.log(`mantenimiento $${presupuesto.manteninimiento}`);
console.log(`combustible $${presupuesto.combustible}`);

console.log("AQUI TIENES EL TOTAL DE TUS GATOS EN RUTA")
let totalpresupuesto= (presupuesto.hospedaje + presupuesto.alimentacion + presupuesto.recreacion + presupuesto.manteninimiento + presupuesto.combustible);
console.log(`$${totalpresupuesto}COP`);
console.log(`el motoviajero ${motoviajero.nombre} de ${motoviajero.edad} años de edad,identificado con ${motoviajero.id} recorrio un total de ${ruta.kilometros}Km en la ruta ${ruta.puntodepartida}-${ruta.puntodellegada},tuvo paradas en ${ruta.paradas} gasto un total de $${totalpresupuesto}COP durante todo el trayecto`);
}
//----------------------------------finejercicio--------------------------------
