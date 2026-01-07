const car = { name: "BMW", color: "White", number: 500 };

// Prefer Object.values or Object.entries to avoid prototype enumeration issues
const txt = Object.values(car).join(' ');
console.log(txt); // BMW White 500

// If you need keys and values:
for (const [key, value] of Object.entries(car)) {
  console.log(key, value);
}
