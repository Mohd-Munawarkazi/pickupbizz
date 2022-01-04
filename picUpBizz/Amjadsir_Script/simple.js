
function fullName(fname, lname) {
    return fname + " " + lname;
}
let Fullname = fullName("Ayaan", "kazi");
console.log(Fullname);
let myname = ("kazi", "Ayaan");
console.log(myname);

console.log(fullName("Amjad", "kazi"));

//by Arror function
const myName = (firstName, lastName) => { return firstName + ' ' + lastName; };
console.log(myName("munawar", "kazi"));

/*single line retuen function in fat arrow */
const myName1 = (firstName, lastName) => firstName + ' ' + lastName;
console.log(myName1("Arrow", "return"));
console.log(myName1("Arrow", "return"));
console.log(myName1("return", "Arrow"));
