const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(nums) {
  if (!nums.length) return 0;
  return nums.reduce((total, current) => total + current, 0);

};

const multiply = function(nums) {
	return nums.reduce((total, current) => {return total * current});
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num === 0) return 1;
  if (num === 1) return num;
  return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
