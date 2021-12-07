function camelize(str) {
 return  arr = str
    .split('-')
    .map( (word, index) => { if(index==0) {return word;
                            } else { return word.charAt(0).toUpperCase() + word.slice(1);} } )
    .join('');
  //console.log(arr);
}

//camelize('background-color-solor-dolor')=='backgroundColorSolorDolor';
//camelize('list-style-image') == 'listStyleImage';
//camelize('-webkit-transition') == 'WebkitTransition';


/*
function camelize2(str) {
return  arr = str
    .split('-')
    .map( (word, index) => index==0? word : word.charAt(0).toUpperCase() + word.slice(1) )
    .join('');
  console.log(arr);
}

camelize2('background-color-solor-dolor')=='backgroundColorSolorDolor';
camelize2('list-style-image') == 'listStyleImage';
camelize2('-webkit-transition') == 'WebkitTransition';
*/
/*
function camelize3(str) {
  let arr = [];
  arr = str.split('-');
  console.log(arr);
  let itemUp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    itemUp = itemUp + arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    // console.log(itemUp);
  }
  console.log(itemUp);
  return itemUp;
}

camelize3('background-color-solor-dolor') == 'backgroundColorSolorDolor';
camelize3('list-style-image') == 'listStyleImage';
camelize3('-webkit-transition') == 'WebkitTransition';
*/
