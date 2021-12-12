function makeFriendsList(friends) {
  const newUL = document.createElement('UL');  //
   let UI = friends.map((user) => '<li>'+user.firstName+' '+user.lastName+'</li>').join('') ; 
   console.log('UI равно: ' + UI);
    newUL.insertAdjacentHTML('beforeEnd', UI ) ; // в lesson_4  есть такой пример
   return document.body.insertBefore(newUL, document.body.lastChild);
 
}


/*
function makeFriendsListV2(friends) {
  const newUL = document.createElement('UL');  //
  for (let key in friends) {
    let friend = friends[key];
    console.log(friend);
    let newLi = friend.firstName + ' ' + friend.lastName; 
     console.log(newLi);
     newUL.append(newLi); // добавить к сущесвующему списку UL 
     // а что должна возвращать функция?
  }
//Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'. at index.html:25 
}*/
