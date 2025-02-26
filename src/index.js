const id = 123;
const name = "Vasya";
const addressCity = "Holon";
const adressStreet = "Sokolov";
const addressApp = 12;
const children = ["Dima", "Petya", "Senya"];

const person = {id:123, name: "Vasya", address:{city:"Holon", street: "Sokolov", app:12}, children:["Dima", "Petya", "Senya"]};

//Factory method
function createPerson(id, name, city, street, app, children){
    return {id:id, name:name, address:{city:city, strret:street, app:app}, children:children};
}

function createPerson1(id, name, city, street, app, children){
    return {id, name, address:{city, street, app}, children};
}
const person1 = createPerson1(123, "Vasya", "Holon", "Sokolov", 12, ["Dima", "Petya", "Senya"]);
//const person2 = createPerson(125, "Vova", "Sankt-Petersburg", "Karla-Marksa", 133, ['Katya', 'Sveta']);

const person2 = person1;
//JSON = JAVA SCRIPT OBJECT NOTATION Transform objects for strings

console.log(`person === person1 ${person===person1}`);
console.log(person);
console.log(person1);
console.log(person2);
const jsonPerson =JSON.stringify(person);
const jsonPerson1 =JSON.stringify(person1);
console.log(`JSON presentation of person1 is ${jsonPerson}`);
console.log(`JSON presentation of person1 is ${jsonPerson1}`);
console.log(`jsonPerson == jsonPerson1 ${jsonPerson==jsonPerson1}`);






