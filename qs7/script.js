let arrayvalues = [] ;

function arrayin(){

    var inputvalue01 ;
    var inputvalue02 ;
    var large ;

    inputvalue01=document.getElementById('inputa').value;
    inputvalue02=document.getElementById('inputb').value;
    
    large = Math.max(inputvalue01,inputvalue02);
        
    document.getElementById("ansdata").innerHTML =large;
    
    return false
}

