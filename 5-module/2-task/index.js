function toggleText() {
  
    elem=document.querySelector(".toggle-text-button"); 
    elem.onclick = function() {
      txt=document.getElementById('text');
      //это тоже хороший вариант с дополнительным CSS .hidden{display: none;}  но тест не проходит // txt.classList.toggle('hidden');  
      //console.log ('click');
     // if ( txt.style.display == "none")  {txt.style.display = ""}/* ""єто то же что сброс к первоначальному состоянию https://learn.javascript.ru/styles-and-classes#element-style*/  /* можно и так "block"*/ 
     // else  txt.style.display = "none";
      
      if ( txt.hidden == true)  {txt.hidden = false}/* ""єто то же что сброс к первоначальному состоянию https://learn.javascript.ru/styles-and-classes#element-style*/  /* можно и так "block"*/ 
      else  txt.hidden = true;
      

    }  
   
}
