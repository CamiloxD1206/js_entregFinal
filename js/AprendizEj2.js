//Registrar las notas de 3 aprendices
//(la primera nota equivaldra al 20% al igual que la segunda y la tercer nota equivaldra al 60% de la nota final) 
//posteriormente calcular su promedio(nota final)
//---------------------------------Aprendiz1-------------------------------------------------------
function aprendizej2(){
alert("INGRESE LAS NOTAS DE LOS APRENDICES");
let a =prompt("Nombre y apellidos del aprendiz");
console.log(`NOTAS DE APRENDICES CTPI 2023`);
console.log(`${a}`);
let primeraNotaEstudiante1=parseFloat(prompt("Primera nota"));
let segundaNotaEstudiante1=parseFloat(prompt("Segunda nota"));
let terceraNotaEstudiante1=parseFloat(prompt("Tercera nota"));
console.log(`${primeraNotaEstudiante1}\n${segundaNotaEstudiante1}\n${terceraNotaEstudiante1}`);
let promedioNotaaprendiz1=(primeraNotaEstudiante1*0.20+segundaNotaEstudiante1*0.20+terceraNotaEstudiante1*0.60);
console.log(`La nota final del estudiantes ${a} es ${promedioNotaaprendiz1}`);
//--------------------------------  Aprendiz2-----------------------------------------------
let b =prompt("Nombre y apellidos del aprendiz");
console.log(`${b}`);
let primeraNotaEstudiante2=parseFloat(prompt("Primera nota"));
let segundaNotaEstudiante2=parseFloat(prompt("Segunda nota"));
let terceraNotaEstudiante2=parseFloat(prompt("Tercera nota"));
console.log(`${primeraNotaEstudiante2}\n${segundaNotaEstudiante2}\n${terceraNotaEstudiante2}`);
let promedioNotaaprendiz2=(primeraNotaEstudiante2*0.20+segundaNotaEstudiante2*0.20+terceraNotaEstudiante2*0.60);
console.log(`La nota final del estudiantes ${b} es ${promedioNotaaprendiz2}`);
//-----------------------------Aprendiz3--------------------------------------------------


let c =prompt("Nombre y apellidos del aprendiz");
console.log(`${c}`);
let primeraNotaEstudiante3=parseFloat(prompt("Primera nota"));
let segundaNotaEstudiante3=parseFloat(prompt("Segunda nota"));
let terceraNotaEstudiante3=parseFloat(prompt("Tercera nota"));
console.log(`${primeraNotaEstudiante3}\n${segundaNotaEstudiante3}\n${terceraNotaEstudiante3}`);
let promedioNotaaprendiz3=(primeraNotaEstudiante3*0.20+segundaNotaEstudiante3*0.20+terceraNotaEstudiante3*0.60);
console.log(`La nota final del estudiantes ${c} es ${promedioNotaaprendiz3}`);
}
//-------------------------------finalejercicio---------------------------------------------------