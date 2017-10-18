var i=0;
var imgs=['1.png','2.png','3.png','4.png','5.png','6.png'];
var il=imgs.length;
var go=true;
var x;

function s(){
	x=setInterval(function(){show(i+=1);},1000);
}

function d(){
	clearInterval(x);
}

function load(){
	document.getElementById("img").src="imgs/"+imgs[1];
	s();
}

function prev(){
	d();
	go=false;
	show(i-=1);
}

function start(){
	if(go){go=false;d();}else{go=true;s();}
}

function next(){
	d();
	go=false;
	show(i+=1);
}

function show(a){
	if(a<0 || i<0){i=il-1;}
	if(a>il-1 || i>il-1){i=0;}
	document.getElementById("img").src="imgs/"+imgs[i];
	
	console.log(i);
}