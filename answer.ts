// Paste it in https://www.typescriptlang.org/play to run

function checkNumberPadding(intStrs: Iterable<string>): number {
   // Base case
   if (intStrs && [...intStrs].length === 0) {
       return 0;
   }

   const paddedLengths: number[] = [];   // Padded string lengths
   const unpaddedLengths: number[] = []; // Unpadded string lengths

   for (let str of intStrs) {
       if (str[0] === '0') {
           paddedLengths.push(str.length);
       } else {
           unpaddedLengths.push(str.length);
       }
   }

   // Check if padding is consistent
   let paddedStringLength = 0;
   if (paddedLengths.length !== 0) {
       paddedStringLength = paddedLengths[0];
       const isConsistent = paddedLengths.every(length => length === paddedStringLength);

       if (!isConsistent) {
           return -1;                  // Inconsistent padding
       }
   }

   // Check if unpadded strings disturb the consistency
   if (unpaddedLengths.length > 0) {
       const minUnpaddedLength = Math.min(...unpaddedLengths);

       if (paddedStringLength === 0) {
           return minUnpaddedLength === 1 ? 1 : -minUnpaddedLength;
       }

       // If we have an unpadded length less than padding length then it'll be ambiguous
       if (minUnpaddedLength < paddedStringLength) {
           return -1;
       }
   }
  return paddedStringLength;
}


const value1 = checkNumberPadding(["001", "002", "9999", "99999", "003", "999999", "8888", "9999", "8888"]);
console.log(value1);
// Expected Output: 3

const value2 = checkNumberPadding(["1", "2", "999"]);
console.log(value2);
// Expected Output: 1

const value3 = checkNumberPadding(["111", "222", "9999", "333", "8888"]);
console.log(value3);
// Expected Output: -3

const value4 = checkNumberPadding(["001", "002", "9999", "99999", "003", "999999", "88"]);
console.log(value4);
// Expected Output: -1

const value5 = checkNumberPadding(["01", "22"]);
console.log(value5);
// Expected Output: 2

const value6 = checkNumberPadding([]);
console.log(value6);
// Expected Output: 0

const value7 = checkNumberPadding(["0", "2", "33"]);
console.log(value7);
// Expected Output: 1







