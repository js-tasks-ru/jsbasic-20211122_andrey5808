function initCarousel() {
  const arrowRight=document.querySelector('.carousel__arrow_right');
  const arrowLeft=document.querySelector('.carousel__arrow_left');
    
  
  arrowRight.addEventListener('click', arrowRightClicker);
  arrowLeft.addEventListener('click', arrowLeftClicker);
 
  const slide=document.querySelector('.carousel__inner') ;  //  .firstElementChild    .children[0]

   
 
  
  let slideCounter=1;
  arrowLeft.style.display = "none"; //по умолчанию левая кнопка должна быть скрыта т.к. мы на первом слайде 
  

  function arrowRightClicker() {
    arrowLeft.style.display = "";
    
    if ( slideCounter<4)  {arrowRight.style.display = "";
    slide.style.transform += `translateX( -${slide.offsetWidth}px)` ;
    slideCounter++;
    console.log ('slideCounter='+slideCounter);
      } 
      if ( slideCounter>=4)   {arrowRight.style.display = "none"}; 
   
  }  
 
  function arrowLeftClicker() {
      arrowRight.style.display = "";
   
    if ( slideCounter>1)  {arrowLeft.style.display = "";
    slide.style.transform += `translateX( ${slide.offsetWidth}px)` ;  
    slideCounter--;
    console.log ('slideCounter='+slideCounter);
      }   
      if ( slideCounter<=1)   {arrowLeft.style.display = "none"}; 
   

  }  



}
