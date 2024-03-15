// 3  Assignment print personName Lowercase, uppercase ,titlecase
var personName = ("umm-e-dua");
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
var firstName = ("faryal aslam");
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
