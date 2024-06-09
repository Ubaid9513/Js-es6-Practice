// ----------------------{VAR , LET AND CONST}---------------------

// var name = "Ubaid";
// console.log(name);
// var fullname = "ubaid";
// function foo() {
//   let fullname = "Ubaid";
// }
// console.log(fullname);
// // -------x----------
// var name;
// function foo1() {
//   name = "Aslam";
// }
// foo1();
// console.log(name);
// // -------x----------
// if (true) {
//   name = "Ubaid Aslam";
// }

// console.log(name);
// // -------x----------
// if (true) {
//   let _name = "Ubaid";

//   console.log(_name);
// }
// // console.log(_name);
// // ------x-----------
// var fullname = "Saqib";
// var fullname = "Uzaima";
// console.log(fullname);
// // ------x-----------
// // let $name = "Saqib";
// let $name = "Uzaima Ali Bari";
// console.log($name);
// // ------x-----------
// const $fullname = "Muhammad Saqib";
// // const $fullname = "Uzaima Ali Bari";
// console.log($fullname);
// // ------x-----------
// const school = "Saylani";
// // const school = "Saylani";
// var obj = {
//   schoolName: school,
// };
// console.log(obj);

// var obj = {
//   Name: school,
//   class: "MWF",
// };
// console.log(obj);

// ----------------------{TEMPLATE LITERALS}---------------------

let firstName = "Ubaid";
let lastName = "Aslam";
console.log("My name is " + firstName + " " + lastName);
console.log(`My name is ${firstName} ${lastName}`);

// ----------------------{SPREAD OPERATORS}---------------------

// let student1 = ["Ubaid","Saqib"];
// let student2 = ["Uzaima","Atif"];
// let merge = student1.concat(student2);
// console.log(merge);
// ---------------x--------------------
// let student1 = ["Ubaid","Saqib"];
// let student2 = [...student1,"Uzaima","Atif"];
// console.log(student2);
// ---------------x--------------------
let student1 = { name: "Ubaid" };
let student2 = { ...student1, school: "Saylani" };
console.log(student2);

// ----------------------{OBJECT DESTRUCTURING}---------------------
var student = {
  name: "Ubaid",
  roll: 215783,
  sch: "Saylani",
};
console.log(student);
// ---------------x--------------------
var student = {
  name: "Ubaid",
  roll: 215783,
  sch: "Saylani",
};
let { name, sch, roll } = student;
console.log(name);
console.log(sch);
console.log(roll);

// ----------------------{TERNARY OPERATORS}---------------------
// // ternary opr m (|| and &&) bhi lga sakhte hen
var age = 20;
if (age > 30) {
  console.log("30 se bara hai");
} else {
  console.log("30 se chota hai");
}
// ---------------x--------------------
var check = age > 30 ? "30 se bara hai" : "30 se chota hai";
console.log(check);
// ---------------x--------------------
var bool = true;
var foo = bool && "Ubaid";
console.log(foo);
