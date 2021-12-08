let calculator = {
  read(x,y) {
    this.a=x; //=+prompt("введите число а:","0");
    this.b=y;//=+prompt("введите число а:","0");
  },

   sum() {return this.a+this.b},

   mul() {return this.a*this.b},
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально


//calculator.read(3, 5);
//console.log(calculator.sum()); // 8
//console.log(calculator.mul()); // 15