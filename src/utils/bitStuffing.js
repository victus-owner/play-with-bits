export function decimalToBinary(n) {
if (n === 0) return "0";
let bits = "";
let num = n;
while (num > 0) {
const rem = num % 2;
bits = String(rem) + bits;
num = Math.floor(num / 2);
}
return bits;
}


export function binaryToDecimal(binStr) {
let value = 0;
for (let i = 0; i < binStr.length; i++) {
const bit = binStr[i] === "1" ? 1 : 0;
value = value * 2 + bit;
}
return value;
}


// Stuff a 0 after every run of k consecutive '1' bits
export function stuffBits(binaryStr, k) {
if (k <= 0) return binaryStr;
let out = "";
let run = 0;
for (let i = 0; i < binaryStr.length; i++) {
const b = binaryStr[i];
out += b;
if (b === "1") {
run += 1;
if (run === k) {
out += "0"; // insert stuffed 0
run = 0; // reset run after stuffing
}
} else {
run = 0;
}
}
return out;
}