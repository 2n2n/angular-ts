var myString;
myString = 'This is a string';
// Try to assign a number to a string => Error
// myString = 4;
var anotherString = 'This is a string without :string';
// This will still resolve in a compilation error
// anotherString = 4;
var yetAnotherString;
yetAnotherString = 'This is a string';
// Typescript does not know the type, therefore we don't get an error.. 
yetAnotherString = 5;
var aString;
var aNumber;
var aBoolean;
var anArray;
var anything;
