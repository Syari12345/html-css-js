var person = {firstName: "John", lastName: "Doe", Age: 25};

var text = "";
var x;

for(x in person){
    text +=person[x] + "<br>";
}

document.getElementById("forInLoop").innerHTML = text;
console.log(text);

