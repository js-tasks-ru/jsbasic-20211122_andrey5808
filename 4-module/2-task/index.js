function makeDiagonalRed(table) {
  let rows=table.rows;
  for (i=0; i<rows.length; i++){
    //console.log(rows[i].cells[i]);
    rows[i].cells[i].style.backgroundColor = 'red';
  }
}
