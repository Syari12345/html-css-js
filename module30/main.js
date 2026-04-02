// var mosha=7

// if(mosha<8){
//     document.write("Your child is too young to register")
// }else{
//     document.write("We'll call you soon")
// }


// var mosha = 20

// if(mosha<8){
//     document.write("Your child is too young to register")
// }else if(mosha>18){
//     document.write("You are too old to register")
// }else{
//     document.write("We'll call you soon")
// }


var button= document.getElementById("btn_id")
var input= document.getElementById("input_id")
var text= document.getElementById("text_id")

button.onclick = function(){
    text.innerHTML = input.value;
}


var num1 = document.getElementById("input_id1");
var num2 = document.getElementById("input_id2");
var button1 = document.getElementById("btn_id1");
var result = document.getElementById("result_id");
var text2 = document.getElementById("text2_id");



button1.onclick = function(){
   var result2 = result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
    if(result2 > 10){
        text2.innerHTML = "Greater than 10"
    }
        else if(result2 < 10)
            {text2.innerHTML = "Less than 10"   }
        else{
    text2.innerHTML = "Equal to 10"
}
}




