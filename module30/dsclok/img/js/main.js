var wakeuptime;
var dstime;
var sleeptime;
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

 var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;
    changeImage();
};


var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);

function changeImage(){
    var time = new Date().getHours();

    var image = "imgg/ds_clock.png"
    var imageHTMl = document.getElementById("timeimages");

    if(time == wakeuptime){
        image = "imgg/morning.gif";
    }

    else if(time == dstime){
        image = "imgg/class.gif";
    }

        else if(time == sleeptime){
            image = "imgg/night.gif"
        }

        imageHTMl.src == image;
    
}

function updateClock(){
    var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
wakeuptime = wakeUpTimeSelector.value

var dsTimeSelector = document.getElementById("dsTimeSelector");
dstime = dsTimeSelector.value;

var sleepTimeSelector = document.getElementById("sleepTimeSelector");
sleeptime = sleepTimeSelector.value;

}


var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", updateClock);

