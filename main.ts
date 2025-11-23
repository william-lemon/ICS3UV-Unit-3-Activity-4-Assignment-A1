/**
 * @author William Lemon
 * @version 1.0.0
 * @date 2025-11-21
 * @fileoverview Calculate total order cost of bolts, nuts, and washers, and verify order correctness.
 */

// INPUT: Quantities 
const bolts: number = 10;
const nuts: number = 5;
const washers: number = 10;

// CONSTANTS: Prices of each item in cents
const boltPrice: number = 10;
const nutPrice: number = 5;
const washerPrice: number = 3;

// PROCESS: Calculate total cost
const boltCost: number = bolts * boltPrice;
const nutCost: number = nuts * nutPrice;
const washerCost: number = washers * washerPrice;
const totalCost: number = boltCost + nutCost + washerCost;

// OUTPUT: Echo the purchase quantities
console.log(`How many bolts would you like to purchase? ${bolts}`);
console.log(`How many nuts would you like to purchase? ${nuts}`);
console.log(`How many washers would you like to purchase? ${washers}`);

console.log(`Number of bolts:            ${bolts}`);
console.log(`Number of nuts:             ${nuts}`);
console.log(`Number of washers:          ${washers}`);

// ORDER CHECKING
if (nuts < bolts) {
  console.log(`Check the Order - not enough nuts for the bolts you purchased.`);
}

if (washers < bolts) {
  console.log(`Check the Order - not enough washers for the bolts you purchased.`);
}

if (nuts >= bolts && washers >= bolts) {
  console.log(`Order is OK.`);
}

// FINAL TOTAL
console.log(`Your total cost of the order is ${totalCost} cents.`);

console.log("\nDone.");