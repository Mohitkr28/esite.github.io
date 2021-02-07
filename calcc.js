const k = document.getElementById('cal');
const f = document.getElementById('content');
const l = document.getElementById('gg');
const m = document.getElementById('ql');

function tog(){
  if ( k.innerText === "🞬") {
    k.innerText="☰";
    f.style.visibility="hidden";
  }
  else if ( k.innerText === "☰") {
    k.innerText ="🞬";
    f.style.visibility="visible";
  }
}
function togg(){
  if (  l.style.marginLeft ="-3000px") {
   
    l.style.marginLeft ="0px";
  }

  else if( l.style.marginLeft ="0px"){
      l.style.marginLeft ="-3000px";
  }
}


// else if ( k.innerText = "☰") {
//   k.innerText ="🞬";
// }
$(document).ready(function(){
   
  $('#content').load("./calculator.html");

});