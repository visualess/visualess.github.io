/*--------------
window.onload = function(){};
window.onload = function () {document.onkeyup = tecla;}
function tecla(even){var tec = even.keyCode;}
---------------------------
|| 
display,left,right,top,bottom
substr,substring,length,innerHTML
style,undefined,push();
confirm(mensaje);prompt(“Texto de la ventana”,”valor inicial caja”);
var.toUpperCase(); combierte a mayuscula var.toLowerCase();
var.charAt(posicion) , obtiene el carácter que se encuentra en la posición indicada:
setInterval(expresion, tiempo);
setTimeout(expresion, tiempo);
isNaN(valor); // devuelve si el valor es numerico o no
indexOf(cadena_buscada, indice); // Devuelve la posición de la primera ocurrencia de 'cadena_buscada' dentro de la cadena actual, a partir de la posición dada por 'indice'. Este último argumento es opcional y, si se omite, la busqueda comienza por el primer carácter de la cadena.
lastIndexOf(cadena_buscada, indice);
toLowerCase(); // Devuelve la cadena en minúsculas.
toUpperCase(); // Devuelve la cadena en minúsculas.
----Array-----
join(separador) // une los elementos de una arreglo con criterio de el separador
reverse() // Invierte el orden de los elementos del array.
----------------
document.getElementsByTagName();
document.getElementsByName();
document.getElementById();
onclick,ondblclick,onMouseOver,onMouseMove
----jQ-----------
mouseover,mouseout,click,mouseleave
evento.preventDefault();
$('').appendTo('');
$('').attr();
$('').each(function(i){});
$('').data();
$('').removeData();
$('').addClass();
$('').removeClass();
$('').toggleClass();
*/
$(function() {






function redondear(a,b){for (var i = 0; i < b; i++){a*=10;}a = Math.round(a);for (var i = 0; i < b; i++) {a/=10;}return a;}
function desimal(a){var a = "1";for (var i = 0; i < a; i++) {a+="0";}return caracterNumero(a);}


getId('iAcart').onclick = function() {getId('spanAcart').innerHTML = aCaracter();}
document.body.onmouseover = function(e){getId('getPosX').innerHTML = 'pX - ' + e.pageX;getId('getPosY').innerHTML = 'pY - ' + (e.pageY - getScroll());}
/*--------------------------------------------------------------*/
function aCaracter(a,b){var temp,sum = "";var c = ["qwertyuiopasdfghjklzxcvbnm","QWERTYUIOPASDFGHJKLZXCVBNM","0123456789"];if (a == undefined) {a=10;}for (var i = 0; i < a; i++) {if (b == undefined){temp = c[aNumero(2)];temp = temp[aNumero(temp.length - 1)];}else{do{temp = aNumero(2);if (temp == 0 && b.indexOf("q") != -1) {temp = c[temp];temp = temp[aNumero(temp.length - 1)];}else if(temp == 1 && b.indexOf("Q") != -1){temp = c[temp];temp = temp[aNumero(temp.length - 1)];}else if(temp == 2 && b.indexOf("1") != -1){temp = c[temp];temp = temp[aNumero(temp.length - 1)];}else{temp = -1;}}while(temp == -1);}sum += temp;}return sum;}
function aBooblean(){if (Math.random() > 0.5){return true;} else {return false;}}
function aNumero(a,b,c){var temp;if (b == undefined){b = a;a = 0;}do{temp = Math.random()*b;}while(a >= temp);if (c == undefined){temp=Math.round(temp);}else{temp = temp.toFixed(c);}return temp;}
function nCart(a){return a +"";}
function style(id,estilo){var valor = estilo.substring(estilo.indexOf(":") + 1),st = estilo.substr(0,estilo.indexOf(":")),Item = document.querySelector(id).style;if (st=="background" || st=="b"){Item.background = valor;}else if(st=="transform" || st=="t") {Item.transform = valor;}else if(st=="opacity" || st=="o"){Item.opacity = valor;}else if(st=="padding" || st=="p"){Item.padding = valor;}else if(st=="margin" || st=="m"){Item.margin = valor;}else if(st=="display" || st=="d"){Item.display = valor;}else if(st=="width" || st=="w"){Item.width = valor;}else if(st=="height" || st=="h"){Item.height = valor;}else{alt("Error al aplicar los estilos");}}
function setScroll(a,b) {if (a == undefined && b == undefined) {window.scroll(0,document.body.scrollHeight);} else {if (b == undefined) {window.scroll(0,a);} else {window.scroll(a,b);}}}
function getScroll() {return window.pageYOffset}
function getId(id){return document.getElementById(id)}
function nCaract(a){return a+"";}
function cNumero(a,b){if (b == undefined){return parseInt(a);} else {return parseFloat(a)}}
function CaractNumer(catart){catart +="";var ret = 0;var numer = '0123456789';for (var i = 0; i < catart.length; i++) {for (var j = 0; j < 10; j++){if (catart[i]==numer[j]){ret = (ret*10)+j;}}}return ret;}

});
