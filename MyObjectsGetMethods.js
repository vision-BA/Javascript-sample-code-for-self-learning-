/*const specs = {
  camera:"200Mp",
  battery:"6000Mah",
  model:"S-series",
  get modelName () {
   return this.model;
  }
};
console.log(specs.modelName);
*/
const specs={
  camera:"200Mp",
  battery:"6000Mah",
  model:"",
  set modelName (modelName) {
    this.model =modelName ;
  }
};
specs.modelName = "S-series";
console.log(specs.modelName);