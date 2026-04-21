let n = 0;
let x = 0;
var text = "";

while(n < 3){
    n++;
    x+=n;
    text += "After pass" + n + ", x =" + x + "<br>";
}

document.getElementById("whileLoop").innerHTML = text;