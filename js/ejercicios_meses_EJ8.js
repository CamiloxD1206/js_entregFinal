function ejercicio8 (){
//numero de dias
let enero = 31;
let febrero=28;
let marzo=31;
let abril=30;
let mayo=31;
let junio=30;
let julio=31;
let agosto=31;
let septiembre=30;
let octubre=31;
let noviembre=30;
let diciembre=31;
//prompt
mes=parseInt(prompt('elige un numero del 1 al 12 correspondiente al mes que deseas'));
//meses
let invierno='enero,febreo y marzo';
let primavera='abril y mayo';
let verano='junio,julio y agosto';
let otoño='septiembre,octubre,noviembre,diciembre';
//ifs
if(mes==1){
alert(`el mes es enero su numero de dias es ${enero} y esta en la estacion invierno se encuentra dentro de los meses de inivierno ${invierno}`);
}else if(mes==2){
    alert(`el mes es febreo su numero de dias es ${febrero} y esta en la estacion invierno se encuentra dentro de los meses de inivierno ${invierno}`);
}else if(mes==3){
    alert(`el mes es marzo su numero de dias es ${marzo} y esta en la estacion invierno se encuentra dentro de los meses de inivierno ${invierno}`);
}else if(mes==4){
    alert(`el mes es abril su numero de dias es ${abril} y esta en la estacion primavera se encuentra dentro de los meses de primavera ${primavera}`);
}else if(mes==5){
    alert(`el mes es mayo su numero de dias es ${mayo} y esta en la estacion primavera se encuentra dentro de los meses de primavera ${primavera}`);
}else if(mes==6){
    alert(`el mes es junio su numero de dias es ${junio} y esta en la estacion verano se encuentra dentro de los meses de verano ${verano}`);
}else if(mes==7){
    alert(`el mes es julio su numero de dias es ${julio} y esta en la estacion verano verano se encuentra dentro de los meses de verano ${verano}`);
}else if(mes==8){
    alert(`el mes es agosto su numero de dias es ${agosto} y esta en la estacion verano verano se encuentra dentro de los meses de verano ${verano}`);
}else if(mes==9){
    alert(`el mes es septiembre su numero de dias es ${septiembre} y esta en la estacion otoño verano se encuentra dentro de los meses de otoño ${otoño}`);
}else if(mes==10){
    alert(`el mes es octubre su numero de dias es ${octubre} y esta en la estacion otoño se encuentra dentro de los meses de otoño ${otoño}`);
}else if(mes==11){
    alert(`el mes es noviembre su numero de dias es ${noviembre} y esta en la estacion otoño se encuentra dentro de los meses de otoño ${otoño}`);
}else if(mes==12){
    alert(`el mes es diciembre su numero de dias es ${diciembre} y estas en temporada navideña se encuentra dentro de los meses de otoño ${otoño}`);
}
else{
    alert('numero equivocado');
}
//inviero de enero a abril
//primavera marzo a junio
//verano de julio a octubre
//otoño de noviembre y diciembrwe

//36:50
}