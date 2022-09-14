// function ert(){
// alert("Yükleniyor...(2 Haftaya)")
//   window.location.href = "http://127.0.0.1:5501/result.html";
// }
const arttır = document.querySelector(".arttır")
const azalt = document.querySelector(".azalt")
const sayı = document.querySelector(".sayı")
const sayı1 = document.querySelector(".sayı1")
let orta = 0;
let orta1 = 0;
sayı.innerText = orta;
sayı1.innerText = orta1;

function er() {
 sayı.innerText++;
  
}
function er1() {
  
  sayı1.innerText++;
}
function e() {
    if (sayı.innerText == 0) {
      sayı.innerText = 0;
    } else {
      sayı.innerText--;
    }



}
function e1() {
if (sayı1.innerText == 0) {
  sayı1.innerText = 0;
} else {
  sayı1.innerText--;
}
}
