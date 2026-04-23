var input = document.getElementById("input_id")
var button = document.getElementById("btn_id")
var text = document.getElementById("tekst_id")

button.onclick = function(){

    text.innerHTML = input.value
}



// var text = "The best school for programming is Digital School";
// var result = text.search("Digital School");
// document.getElementById("result1").innerHTML = result;

// var text = "The best school for programming is Digital School";
// var result = text.search(/Digital School/); 
// document.getElementById("result2").innerHTML = result;

// var text = "The best school for programming is Digital School";
// var result = text.replace(/Digital School/, "Another School");
// document.getElementById("result3").innerHTML = result;

// var text = "abcdef"
// var regex = new RegExp("abc")
// document.getElementById("result4").innerHTML = regex.test(text);


// var text = "My school is the best school in the world";
// var regex = /school/g;
// document.getElementById("result5").innerHTML = text.match(regex);
// the /g stands for global and it searches for all the texts insted of just stoping on the first one that it finds


var text = "Digital School is the best school in the world";
var regex = /h/g;
document.getElementById("result6").innerHTML = text.match(regex);

var text = "Digital School is the best school in the world";
var regex = /[abc]/g; //[] to find to find the first text than then second ect
document.getElementById("result7").innerHTML = text.match(regex);


var text = "Digital School is in the top 10 best schools in the world";
var regex = /[0-9]/g;
document.getElementById("result8").innerHTML = text.match(regex);


var text = "Digital School is the best school in the world"; 
var regex = /(top|best|school)/g; 
document.getElementById("result9").innerHTML = text.match(regex);

var text = "100 percent"; 
var regex = /\d/g;
document.getElementById("result10").innerHTML = text.match(regex);
