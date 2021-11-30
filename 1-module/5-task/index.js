function truncate(str, maxlength) {
  if (str.length<maxlength) {
    return str;
  }
  else  strTrunc=str.substring(0,maxlength-1)+'…'; 
  //console.log(strTrunc.length);
  return strTrunc;
}

 let str = 'Вот, что мне хотелось бы сказать на эту тему:';
 let maxlength=20;
 truncate(str, maxlength);
