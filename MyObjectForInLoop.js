const car={carName:"BMW",carColor:"White",carNumber:500};
var txt="";
for( var x in car){
  txt +=car[x] +" ";
}
console.log(txt);
