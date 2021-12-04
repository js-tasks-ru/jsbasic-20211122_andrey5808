function sumSalary(salaries) {
  let salary = 0;
  for (key in salaries) {
    if (isFinite(salaries[key]) && !isNaN(salaries[key])) {
      salary += salaries[key];
      console.log(salary);
    }
  }
  return salary;
}

/*
//typeof salaries[key] == 'number';
isFinite(Infinity);  // false
isFinite(-Infinity); // false

    let salaries = {
      John: 1000,
      Ann: 1600,
      Pete: 1300,
      Bob: NaN,
      Peter: Infinity,
      Ivan: -Infinity,
      month: 'December',
      currency: 'USD',
      isPayed: false
    };

sumSalary(salaries);*/
