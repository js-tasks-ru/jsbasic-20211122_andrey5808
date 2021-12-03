function isEmpty(obj) {
  for (propName in obj) { return false;} //object is not empty
  return true;
}
