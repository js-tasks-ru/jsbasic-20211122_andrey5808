function hideSelf() {
  //тут єто не нужно т.к. функция в самом html вызываеться 
  //document.addEventListener('DOMContentLoaded', function() {
  btn=document.querySelector(".hide-self-button"); 
  btn.onclick = function() {
    btn.hidden = true;// console.log ('click');
  }  
 // })
}
