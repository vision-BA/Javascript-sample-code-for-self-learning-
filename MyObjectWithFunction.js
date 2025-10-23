const car={
  carName:"BMW",
  carColor:"White",
  carNumber:500,
  fullSpecs:function(){
    return this.carName +" "+this.carColor +" "+this.carNumber;
  }
};
console.log(car.fullSpecs());
