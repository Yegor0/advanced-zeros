module.exports = function getZerosCount(number, base) {
let k = 0;
let array = new Array();
let n = 0;
let i = 2;
const baseNumber = base;
while(i <= baseNumber) {
  if (base % i == 0) {
    a = i;
    n++;  
    base /= i;
  } else {
    if(n != 0) {
      array[k] = CountZeros(number, a, n);
      k++;
    }  
    i++;
    n = 0; 
  }
}

return Math.min(...array);


function CountZeros(number, a, n) {
  let sum = 0;
  for(let i = 1; Math.pow(a, i) < number; i++) {
    sum += Math.floor(number / Math.pow(a, i));
  }
  return Math.floor(sum / n);
  }
}