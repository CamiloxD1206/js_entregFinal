// // Crear un ciclo(for)que me permita registrar 3  motoviajeros
function forej5(){
const rpm=[]
console.log('Lista de usuarios activos');
//-------------------------(for)---------------------------------
for(i=1;i<=3;i++){
    const Datos={
        nombre:prompt(`¿Cual es tu nombre?`),
        apellido:prompt(`¿Cual es tu apellido?`),
    };
    rpm.push(Datos);
   };
   console.table(rpm);
}

//---------------------finejercicio/for1------------------------------------
//----------------------foreach----------------------------------------------

// const rpm=[
//    {
//     nombre:prompt('¿Cual es tu nombre?'),
//     apellido:prompt('¿Cual es tu apellido?'),
//    }
// ];

// rpm.forEach(function(Camilo,index,arreglo){
//     console.table(rpm);
// }
// );
//------------------------------finejerciciofor2---------------------------------

//------------------------------------------------------------------------
// const numero=[2,4,6,8,10]
// numero.forEach(function(operacion,index,arreglo){
//     console.table(operacion + 2)
    
// });
