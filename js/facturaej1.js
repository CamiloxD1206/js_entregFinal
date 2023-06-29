//Realizar una factura de compra donde se puedan registrar:nombre,apellido,documento,nacionalidad
// 3 productos,en la factura se debe de mostrar valor unitario de cada producto,subtota,a ese subtotal agregarle un iva de 19%
//un descuento de 10%,su total a pagar y un resumen con los datos del motoviajero 
//----------------------------------------------------------------------------------------------------
function Facturaej1(){

alert('Responde las siguientes preguntas para generar tu factura de compra')
console.log('FACTURA MERCADO ADSO');
let nombre=prompt('¿Cual es tu nombre?');
let apellido=prompt('¿Cual es tu apellido?');
let id=prompt('¿Cual es tu tipo de identificacion?(CC)/(TI)/(CE)');
let numid=prompt('Digita tu numero de cedula');
alert('DIGITA LOS ARTICULOS QUE PIENSAS COMPRAR');
let Nproducto1=prompt('Nombre producto 1');
let producto1=parseFloat(prompt('Valor producto 1'));
let Nproducto2=prompt('Nombre producto 2');
let producto2=parseFloat(prompt('Valor producto 2'));
let Nproducto3=prompt('Nombre producto 3');
let producto3=parseFloat(prompt('Valor producto 3'));
console.log('VALOR UNITARIO')
console.log(`${Nproducto1} ${producto1}`);
console.log(`${Nproducto2} ${producto2}`);
console.log(`${Nproducto3} ${producto3}`);
let subTotal=(producto1+producto2+producto3);
console.log(`subtotal ${subTotal}`);
let iva=(subTotal*0.19);
console.log(`IVA ${iva}`);
let descuento=(subTotal* 0.10);
console.log(`DESCUENTO DE ${descuento} `);
let total=(subTotal+iva-descuento);
console.log(`EL VALO TOTAL QUE DEBE DE PAGAR EL/LA  SEÑOR/A ${nombre} ${apellido} IDENTIFICADO CON ${id} ${numid} ES DE $${total}COP`);
}
//------------------------------finejercicio---------------------------------



