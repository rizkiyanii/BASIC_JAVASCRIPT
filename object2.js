/*var person = {
    name: 'kiya',
    age : 17,
    favColor : 'purple'
} 

// lesson 32
function coffe(rasa, gula, topping){
    this.rasa = rasa;
    this.gula = gula;
    this.topping = topping;
}

var kopiSaya = new coffe("mocha", "dikit", "cream");
var kopiKamu = new coffe("cappucino", "banyak", "oreo");

console.log("kopi yang saya pesan :" + kopiSaya.rasa);
console.log("topping di coffe kamu :" + kopiKamu.topping);

// lesson 33
var simba = {
    category : "lion",
    gender : "male"

    var v = simba.category
}

function person (name, age,color){

    this.name = name;
    this.changeName = function changeName(name){
        this.name = name;
    }

    this.age = age;
    this.changeAge = function changeAge(age){
        this.age = age;
    }

    this.favColor = color;
    this.changeFavcolor = function changeFavcolor(color){
        this.favColor = color;
    }
    
}
 
var p = new person("yaya", 17, "purple");

p.changeName("kiya");
console.log(p.name)

p.changeAge(18);
console.log(p.age)

p.changeName("blue");
console.log(p.favColor)*/

function bilangan (x, y){
    this.x = x,
    this.y = y,
    this.jumlah = function jumlah(x,y) {
        c = x+y;
        return c;
    }
}
var b = new bilangan(3, 1)
var a = b.jumlah(b.x, b.y)
console.log(a);
