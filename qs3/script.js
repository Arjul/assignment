function myFunction (){
    var inputValue = document.getElementById("_input").value;
    var splitArray = inputValue.split (" ");
    var newArray = [];
    for (var x = 0; x <= splitArray.length; x++){
    newArray[x] = splitArray[x].replace(splitArray[x][0], splitArray[x][0].toUpperCase());
    document.getElementById("demo").innerHTML = newArray.join(" ");
    }
    }