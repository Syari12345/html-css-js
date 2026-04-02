var wakwupLine;
var dstime
var sleepLine
var noon = 12;

function showCurrentTime(){
    var clock = document.getElementById("clock");
    var currentTime = new Date()

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if(hours >= noon){
        meridian = "PM";
    }

    var clockTime = hours + ":" + minutes ":" + seconds + " " + meridian; 
    clock.innerHTML = clockTime;

    changeImages();
};