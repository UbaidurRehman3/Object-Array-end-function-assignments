// Object Assingment.
//Qus 2
// Create three separate Objects, each representing a friend. with properties like firstName lastname,and optional id
var people = { friends: [] };
//creat tow separate object.
var friend1 = {
    firstName: "Ali",
    lastName: "Khan",
    id: 2,
};
var friend2 = {
    firstName: "Danish",
    lastName: "Khan",
    id: 3,
};
people.friends.push(friend1);
people.friends.push(friend2);
console.log(people);
