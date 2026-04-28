function validation(){


    var name = document.getElementById("name").value;

    var age = document.getElementById("age").value;

    var city = document.getElementById("city").value;

    var name_regex = /^[A-Za-z]+$/;

    var age_regex = /^[0-9]+$/;

    if(!(name.match(name_regex)) || !(age.match(age_regex)) || city == ""){


    if(!(name.match(name_regex))){
        document.getElementById("name_error").style.visibility = "visible";
    }else{
        document.getElementById("name_error").style.visibility = "hidden";
    }
    

     if(!(age.match(age_regex))){
        document.getElementById("age_error").style.visibility = "visible";
    }else{
        document.getElementById("age_error").style.visibility = "hidden";
    }


         if(city == ""){
        document.getElementById("city_error").style.visibility = "visible";
    }else{
        document.getElementById("city_error").style.visibility = "hidden";
    }
    return false;

}else{
    document.getElementById("name_error").style.visibility = "hidden";
    document.getElementById("age_error").style.visibility = "hidden";
     document.getElementById("city_error").style.visibility = "hidden";
     return true;
}
}