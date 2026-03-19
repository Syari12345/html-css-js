// var button1 =document.getElementById("btn1");

// button1.onclick = function(){
//     alert('Hellooo')
// // }

var button2 =document.querySelector("button");

 button2.onclick = function(){
  alert('Other button was clicked') };


var button3 =document.getElementById("btn3");

button3.onmousewheel = function(){
  alert('wheel')
}


var button4 =document.getElementById("btn4");

button4.onmouseleave = function(){
  alert('mouse left')
}


var button5 =document.getElementById("btn5");

button5.onmouseover = function(){
  alert('on mouse')
}


var v_button = document.getElementById("btn6")
var v_text = document.getElementById("txt")

v_button.onclick = function(){
  v_text.style.color='red'
  v_text.style.backgroundColor='blue'
  v_text.style.textAlign='center'
 v_text.style.padding='100px'
 v_text.style.fontSize='50px'
}


var v_button1 = document.getElementById("btn7")
var v_text1 = document.getElementById("txt1")

v_button1.onclick = function(){

  v_text1.style.cssText = "color:green; background-color:red; font-size:50px; text-align:center; font-Family: cursive; padding:100px; border: 10px solid; border-radius: 20px;"

}

var ifundit = document.getElementById("ifundit")
var pg = document.getElementById("pg")

ifundit.onclick = function(){
  pg.setAttribute("class","paragrafi1")
}