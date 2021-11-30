function checkSpam(str) {
  let srtlow = str.toLowerCase();
  return srtlow.indexOf('1xbet') > -1 || srtlow.indexOf('xxx') > -1;
}
checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');

//////////////////////////////////////////////////////////////////////
function checkSpam2(str) {
  let spamWords = ['1xbet', 'xxx', 'xyz'];
  let srtlow = str.toLowerCase();
  for (let i = 0; i < spamWords.length; i++) {
    const spamWord = spamWords[i];
    //console.log(spamWord + ' index=' + srtlow.indexOf(spamWord));
    if (srtlow.indexOf(spamWord) > -1) return true;
  }
  return false;
}

checkSpam2('1XbeT now');
checkSpam2('xyz now');
checkSpam2('free xxxxx');
checkSpam2('innocent rabbit');
