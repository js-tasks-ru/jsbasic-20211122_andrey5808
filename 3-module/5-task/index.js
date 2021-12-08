function getMinMax(str) {
  let arrMin = str.split(' ').filter(item=> !isNaN(item)).reduce((a,b)=>Math.min(a,b), Infinity);
  let arrMax = str.split(' ').filter(item=> !isNaN(item)).reduce((a,b)=>Math.max(a,b), -Infinity);
   return  result = {
    min: arrMin,
    max: arrMax 
   }
};
  



/*
///////////// версия 2 без  reduce
function getMinMax2(str) {
  let arr = str.split(' ').filter(item=> !isNaN(item) ) ;
  let min = Math.min.apply(null, arr);  
  let max = Math.max.apply(null, arr);
  return  result = {
    min: min,
    max: max
};  
}
*/
//тест функций
//let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
//console.log(getMinMax2(inputData)); // { min: -5.8, max: 73  }
//console.log(getMinMax(inputData));


//////////////////////////////////////////////////////////
/*
const arr = [-1, 9, 3, -6, 66];
//Only find minimum
const min = arr.reduce((a,b)=>Math.min(a,b), Infinity);
console.log("Min:", min);//-6
//Only find maximum
const max = arr.reduce((a,b)=>Math.max(a,b), -Infinity);
console.log("Max:", max);//66


let array = [100, 0, 50];
let [minn, maxx] = array.reduce(([prevMin,prevMax], curr)=>
   [Math.min(prevMin, curr), Math.max(prevMax, curr)], [Infinity, -Infinity]);
console.log("Min:", minn);
console.log("Max:", maxx);
*/