const car = {
  name: "BMW",
  color: "White",
  number: 500,
  fullSpecs() {
    return `${this.name} ${this.color} ${this.number}`;
  }
};

console.log(car.fullSpecs());
