import increasingSeq from "./increasingSequence.js";
import huntedRooms from "./huntedRooms.js";

console.log('increasingSeq');
let sequence = [1, 3, 2, 1];
console.log(increasingSeq(sequence))
console.log()

console.log('huntedRooms');
let matrix = [[0, 1, 1, 2], 
              [0, 5, 0, 0], 
              [2, 0, 3, 3]];
console.log(huntedRooms(matrix));
console.log()