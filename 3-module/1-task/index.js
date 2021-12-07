function namify(users) {
  return users.map((user) => user.name);
}

/*
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

let names = namify(users); // ['Вася', 'Петя', 'Маша']   `${user.name}`
console.log(names);
*/