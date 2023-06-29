// import Building from './5-building.js';

// const b = new Building(100);
// console.log(b);

// class TestBuilding extends Building {}

// try {
//     new TestBuilding(200)
// }
// catch(err) {
//     console.log(err);
// }

// import { listOfStudents } from "./9-hoisting";

// console.log(listOfStudents);

// const listPrinted = listOfStudents.map(
//     student => student.fullStudentDescription
// );

// console.log(listPrinted)

import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());