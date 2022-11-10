// lesson 24.1
/*var orang = {
    Name: "Kiya", age: 17, favColor: "purple", height: 169, weight: 55
};
console.log(orang.favColor); */

// lesson 25.1
/*var course = {Name: 'menjahit', chapter:1}
console.log(course.Name.length); */

// lesson 26.1
// intance of object (new)
/*function person(Name, age, color){
    this.Name = Name
    this.age = age
    this.favColor = color
}
var p1 = new person("yaya", 17, "blue");
var p2 = new person("kiya", 17, "purple");

console.log(p1.Name+'dan' +p2.Name+'menyukai warna' +p1.favColor+'dan' +p2.favColor); */

function manusia(Name, age){
    this.Name = Name;
    this.age = age;
    this.changeName = function (Name){
        this.Name = Name;
    }
}
var p1 = new manusia("Mazaya", 6);
p1.changeName("yaya");
console.log(p1.Name+ "umurnya" +p1.age);