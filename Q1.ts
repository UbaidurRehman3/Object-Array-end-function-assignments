// Object Assingment.
//Qus 1
//Create three separate Objects, each representing a friend. with properties like firstName lastname,and optional id

interface Friend{
    firstName:string,
    lastName:string,
    id:number,
}

   let people: {friends:Friend[]}={friends:[]}
//creat three separate object.

let friend1={
    firstName: "Ali",
    lastName: "Khan",
    id:2,
};
let friend2={
    firstName: "Danish",
    lastName: "Khan",
    id:3,
};
let friend3={
    firstName: "shahmeer",
    lastName: "jatoi",
    id:4
};
people.friends.push(friend1);
people.friends.push(friend2);
console.log(people);

