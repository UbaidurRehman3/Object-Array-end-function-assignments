//Assignment 2:Manipulating an Array.
//Qus no 2

const scrambledArray = ["student","of",true,123,"am","a","GIAIC","I"];
scrambledArray.shift(),
scrambledArray.pop(),
scrambledArray.unshift("I"),
scrambledArray.splice(1,3),
scrambledArray.splice(2,3,"student","of"),
scrambledArray.splice(4,1,"a GIAIC"),


console.log(scrambledArray.join(' '));