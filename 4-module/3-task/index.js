function highlight(table) {
  let rows=table.rows;
  for (i=0; i<rows.length; i++){
   //  console.log(rows[i].cells[2]); 
  ////- Проставить класс `male/female` в зависимости от содержимого ячейки `Gender`    
    if ( rows[i].cells[2].textContent ==='m') {  
      rows[i].classList.add('male' ); 
    } else if  ( rows[i].cells[2].textContent ==='f') {  
      rows[i].classList.add('female' );  
    }
  
    
  //Добавить inline-стиль `style="text-decoration: line-through"`, если значение ячейки `Age` меньше 18.
  //li.style.textDecoration = 'line-through';
  if ( rows[i].cells[1].textContent <18) {  
    rows[i].style.textDecoration = 'line-through';
  }

 // - Проставить класс `available/unavailable` в зависимости от значения атрибута `data-available` у ячейки `Status`. Если её значение `true` - класс `available`, если её значение `false` - класс `unavailable`.

 //- Проставить атрибут `hidden`, если атрибута `data-available` нет вообще.

// как  добраться до атрибута ?
  let  available = rows[i].cells[3].getAttribute('data-available');
  //console.log(available); //null  true  false
  if (available==='true'){
    rows[i].classList.add('available'); 
  } else if (available==='false') {
    rows[i].classList.add('unavailable'); 
  }else if (available===null) {
    //rows[i].classList.add('hidden');  //  а как добаввить атрибут а не класс ???
    rows[i].hidden = true;
  }
    
}
}

