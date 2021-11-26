/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно  
 * your_string.indexOf('hello') > -1 // -1 если элемент не найден
 * if (! /^[a-zA-Z0-9]+$/.test(foo)) {
    // Validation failed
}
https://www.regular-expressions.info/javascript.html
if ( ! /^[a-zA-Z0-9а-яА-Я]+$/.test(name) || name==null || name.length<4 ) {return false;}
 */   
function isValid(name) {
 // для отдельного символа можно еще и так// if (name.indexOf(' ') > -1) {return false;}  
  return !!name && !name.includes(' ') && name.length >= 4
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();