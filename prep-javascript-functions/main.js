function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', sum);

function convertHoursToMinutes(hours) {
  return (hours * 60);
}
var minutes = convertHoursToMinutes(2);
console.log('convertHoursTominutes Exercise:', minutes);

function getGreeting(name) {
  return ('Hello' + ' ' + name + '!');
}
var name = getGreeting('World');
console.log('getGreeting Exercise:', name);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addMultiply = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', addMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyDivide = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyDivide);

function subtractTWoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTWoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtract);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}
var circumference = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullname = getFullName('Juan', 'Ramirez');
console.log('getFullName Exercise:', fullname);

function cube(number) {
  return number * number * number;
}
var result = cube(5);
console.log('cube Exercise:', result);
