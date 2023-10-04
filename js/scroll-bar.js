(function (){
/*createElement, createTextNode,
setAttribute, appendChild*/

/*----------------------
	variables
----------------------*/
var barArray = ["pBarLi1","pBarLi2","pBarLi3","pBarLi4","pBarLi5","pBarLi6","pBarLi7","pBarLi8","pBarLi9","pBarLi10"]
var PosCursorScroll;
var BoolScroll = false;
var PoScrollBar = 0;
var jjj = 0;
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
var contScroll = getScroll();

crearScrollBar();
estilosScrollBar();
eventos();

/*---------------------------
	contoladores y estucturas
----------------------------*/
function crearScrollBar(){
		var aLiSb = [];
		/*Creando etiquetas*/
		var sectionSb = document.createElement('section'),
			ulSb = document.createElement("ul"),
			scrollTop = document.createElement("i"),
			scrollTop_Top = document.createElement("i"),
			scrollBottom_Bottom = document.createElement("i"),
			scrollBottom = document.createElement("i");
		for (var i = 1; i < 11; i++) {
			var temp_alisb = document.createElement("li");
			temp_alisb.setAttribute("id","pBarLi"+i);aLiSb.push(temp_alisb)
		}/*Asignando los identificadores*/
		sectionSb.setAttribute('id','scrollBar');
		ulSb.setAttribute("id","progressBar");
		scrollTop.setAttribute("id","scrollTop");scrollTop.setAttribute("class","fa fa-sort-up");
		scrollTop_Top.setAttribute("id","scrollTop_Top");scrollTop_Top.setAttribute("class","fa fa-angle-double-up");
		scrollBottom_Bottom.setAttribute("id","scrollBottom_Bottom");scrollBottom_Bottom.setAttribute("class","fa fa-angle-double-down");
		scrollBottom.setAttribute("id","scrollBottom");scrollBottom.setAttribute("class","fa fa-sort-down");
		/*Agregando los emelemtos al DOM del doumento*/
		document.body.appendChild(sectionSb);
		var sSb = document.getElementById('scrollBar');
		sSb.appendChild(scrollTop);
		sSb.appendChild(scrollTop_Top);
		sSb.appendChild(ulSb);
		sSb.appendChild(scrollBottom_Bottom);
		sSb.appendChild(scrollBottom);
		for (var i = 0; i < aLiSb.length; i++) {
			document.getElementById('progressBar').appendChild(aLiSb[i]);
		}
}
function estilosScrollBar(){
		Item = getId('scrollBar');
			Item.style.display= "flex";
			Item.style.flexDirection= "column";
			Item.style.alignItems= "center";
			Item.style.position= "fixed";
			Item.style.height="164px";
			Item.style.width= "20px";
			Item.style.top= "calc(50% - 82px)";
			Item.style.right= "0";
			Item.style.transition= "all .2s";
		Item = document.querySelector("#progressBar");
			Item.style.listStyle ="none";
	    	Item.style.display = "flex";
	    	Item.style.flexDirection = "column";
	    	Item.style.margin = "auto";
	    	Item.style.padding = "0";
	    for (var i = 1; i < 11; i++) {
		Item = document.getElementById("pBarLi"+i);
			Item.style.width = "15px";
	    	Item.style.height = "4px";
	    	Item.style.background = "black";
	    	Item.style.margin = "3px";
	    	Item.style.opacity = ".3";
	    	Item.style.transition = "opacity .7s";
	    }
}
function eventos(){
	getId('scrollBar').onmousedown = function(e) {
		PosCursorScroll = e.pageY - getScroll();
		BoolScroll = true;
		moverScrollBar(e);
		moverScroll();
	}
	getId('body').onmouseup = function(){
		soltarScrollBar();
	}
	getId('scrollTop').onclick = function (){
		setScroll(getScroll() - 40);
	}
	getId('scrollBottom').onclick = function () {
		setScroll(getScroll() + 40);
	}
	getId('scrollTop_Top').onclick = function (){
		setScroll(0);
	}
	getId('scrollBottom_Bottom').onclick = function () {
		setScroll();
	}
	document.onmouseover = function(e){
		moverScrollBar(e);
	}
	window.onscroll = () =>{
		getId('getScroll').innerHTML = "s - " + getScroll();
		animarScrollBar();
		ProgresoBarScroll();
	}
}

/*------------------------------
Funciones del scroll .....
------------------------------*/

function soltarScrollBar(){
	BoolScroll = false;
	PosCursorScroll = 0;
	jjj = 0;
	style("#scrollBar","t:translateY(0px)");
}
function moverScrollBar(e){
	if (BoolScroll){
		var temp = e.pageY - getScroll();
		if (PosCursorScroll<temp){
			document.getElementById("scrollBar").style.transform = "translateY("+ (temp - PosCursorScroll) +"px)";
			jjj = 1;
		} else {
			document.getElementById("scrollBar").style.transform = "translateY(-"+ (PosCursorScroll - temp) +"px)";
			jjj = 2;
		}
		if (PosCursorScroll==temp){
			jjj=0;
		}
	}
}
function moverScroll(){
	if (BoolScroll){
		if (jjj!=0) {
			if (jjj==1){
				setScroll(getScroll()+20);
			} else {
				setScroll(getScroll()-20);
			}
		}
		setTimeout(function() {moverScroll();}, 100);
	}
}
function ProgresoBarScroll(){
	let progress = (window.pageYOffset / totalPageHeight) * 10;progress = Math.round(progress);
	var a ;
	for (var i = 0; i < 10; i++) {
		getId(barArray[i]).style.opacity = .3;
	}
	for (var j = 0; j < progress; j++) {
		getId(barArray[j]).style.opacity = "1";
	}
}

function animarScrollBar() {
	if (contScroll > getScroll()){
		getId('scrollTop').style.transform = "scale(1.5)";
		getId('scrollBottom').style.transform = "scale(1)";
	} else {
		getId('scrollTop').style.transform = "scale(1)";
		getId('scrollBottom').style.transform = "scale(1.5)";
	}contScroll = getScroll();
}



/*------------------------
Funciones esternas ...
-------------------------*/
function style(id,estilo){var valor = estilo.substring(estilo.indexOf(":") + 1),st = estilo.substr(0,estilo.indexOf(":")),Item = document.querySelector(id).style;if (st=="background" || st=="b"){Item.background = valor;}else if(st=="transform" || st=="t") {Item.transform = valor;}else if(st=="opacity" || st=="o"){Item.opacity = valor;}else if(st=="padding" || st=="p"){Item.padding = valor;}else if(st=="margin" || st=="m"){Item.margin = valor;}else if(st=="display" || st=="d"){Item.display = valor;}else if(st=="width" || st=="w"){Item.width = valor;}else if(st=="height" || st=="h"){Item.height = valor;}else{alt("Error al aplicar los estilos");}}
function setScroll(a,b) {if (a == undefined && b == undefined) {window.scroll(0,document.body.scrollHeight);} else {if (b == undefined) {window.scroll(0,a);} else {window.scroll(a,b);}}}
function getScroll() {return window.pageYOffset}
function getId(id){return document.getElementById(id)}
})();
