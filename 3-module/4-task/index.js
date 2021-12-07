function showSalary(users, age) {
  return users.filter (user=> user.age<=age).map(user=> `${user.name}, ${user.balance}`).join('\n');
}

/*
let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$1000.65",
  "picture": "https://placehold.it/32x32",
  "age": 46,
  "name": "silver Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user3 = {
  "balance": "$2000.65",
  "picture": "https://placehold.it/32x32",
  "age": 30,
  "name": "cuprum Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

// Массив пользователей
let users = [user1, user2, user3]

let result = showSalary(users, 30);
console.log(result);
*/