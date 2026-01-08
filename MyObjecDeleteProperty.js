const car = { name: "BMW", color: "White", number: 500 };

// 1) Immutable way — create a new object without `color`
const { color, ...carWithoutColor } = car;
console.log(carWithoutColor.color); // undefined
console.log(carWithoutColor); // { name: 'BMW', number: 500 }

// 2) If you must mutate, use delete and check:
const car2 = { ...car }; // copy first if other code depends on original
delete car2.color;
console.log(car2.color); // undefined
