function factorial(n) {
  if (n==0) {
    return 1
  } else {
    let fc=1;
    for (let i = 1; i <= n; i++) {
      fc = fc*i;  
      //console.log("n="+n+" i="+i+" fc="+fc);  
    }
    return fc;
  }  
}
//console.log('---------------');
//console.log(factorial(0));
//console.log(factorial(1));
//console.log(factorial(5));