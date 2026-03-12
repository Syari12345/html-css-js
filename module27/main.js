// function displayAlert(){
//     alert("this text is in the function")
// }

// displayAlert()

// function mbledhja(numri1,numri2){
//     return numri1+numri2;
// }

// document.write(mbledhja(5,8));

// function toCelcius (f){
//     return 5/9*(f-32);
// }

// console.log("5 fahrenheit is equal to"+toCelcius(5)+" celcius");



// var arrayFuncion = () => alert("Hello");

// arrayFuncion();

// function dsFunction(){
//     var localVar = "DigitalSchool";
//     alert(localVar);
// }

// dsFunction()



// function toSeconds (m){
//     return m*60;
// }

// console.log(toSeconds(7))



// function toPerimeter(a,b,c){
//     return a+b+c;
// }

// console.log(toPerimeter(5,3,4))



var Car = {name: "Nissan", color: "black", licensesPlate: "01-345-AA", year: 2010}

alert(Car.licensesPlate)

function Computer(name,CPU, RAM, GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var c1 = new Computer("macbook", "8-core", "5GB", "5000M GPU");
var c2 = new Computer("Acer", "Iner core i4", "10GB", "Intergrated");