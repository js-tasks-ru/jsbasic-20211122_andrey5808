function initCarousel() {
  const arrowRight=document.querySelector('.carousel__arrow_right');
  const arrowLeft=document.querySelector('.carousel__arrow_left');
    
  
  arrowRight.addEventListener('click', arrowRightClicker);
  arrowLeft.addEventListener('click', arrowLeftClicker);
 
  const slide=document.querySelector('.carousel__inner') ;  //  .firstElementChild    .children[0]

  //document.querySelector('.carousel__inner').offsetWidth  //document.querySelector('.carousel__inner').children.length;
 
  maxSlide=slide.children.length; // 4 слайда
  let slideCounter=0;
  arrowLeft.style.display = "none"; //по умолчанию левая кнопка должна быть скрыта т.к. мы на первом слайде 
  

  function arrowRightClicker() {
    arrowLeft.style.display = "";
    
    if ( slideCounter<maxSlide)  {arrowRight.style.display = "";
    slideCounter++;
    slide.style.transform =  `translateX( -${slideCounter * slide.offsetWidth}px)` ;     
    //console.log ('slideCounter='+slideCounter);
      } 
      if ( slideCounter>=maxSlide-1)   {arrowRight.style.display = "none"}; 
   
  }  
 
  function arrowLeftClicker() {
      arrowRight.style.display = "";
   
    if ( slideCounter>0)  {arrowLeft.style.display = "";
    slideCounter--;
    slide.style.transform =  `translateX( -${slideCounter * slide.offsetWidth}px)` ;     
    //console.log ('slideCounter='+slideCounter);
      }   
      if ( slideCounter==0)   {arrowLeft.style.display = "none"}; 
   

  }
}
