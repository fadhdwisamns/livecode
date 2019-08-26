// soal 1
var input = ['Stave Fox' , ' Jin Kazama', 'Eddie gordo', ' Geese Howard']

function addTitle(input){
  return input;
}
var spliceinput = input.splice(1,1, 'Mr Stave Fox');
var spliceinput2 = input.splice(2,1, 'Mr Jin Kazama');
var spliceinput3 = input.splice(3,4);
var spliceinput4 = input.splice(4,1, 'Mr Eddie gordo');
var spliceinput5 = input.splice(5,1, ' Mr Geese Howard');
console.log (input);

// soal 2
var input = ['Steve Fox']

function changeSpacesWith (input) {
  return input;
}
var spliceinput = input.splice(0,1);
var spliceinput = input.splice(1,1, 'Steve - Fox');

console.log(input);

var input = ['Sergei Dragunov']

function changeSpacesWith (input) {
  return input;
}
var spliceinput = input.splice(0,1);
var spliceinput = input.splice(1,1, 'Sergei + Dragunov');

console.log(input);

// soal 3

var input = ['Kazuya Mishima']

function changeSpacesWith (input) {
  return input;
}
var spliceinput = input.splice(0,1);
var spliceinput = input.splice(1,1, 'Kazuya');

console.log(input);

var input = ['Sergei Dragunov']

function changeSpacesWith (input) {
  return input;
}
var spliceinput = input.splice(0,1);
var spliceinput = input.splice(1,1, 'Sergei');

console.log(input);

var input = ['Sasuke Uchiha']

function changeSpacesWith (input) {
  return input;
}
var spliceinput = input.splice(0,1);
var spliceinput = input.splice(1,1, 'Sasuke');

console.log(input);