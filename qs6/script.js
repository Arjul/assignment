let arrayvalues = [] ;

function arrayin(){

    var length ;
    var stringe ='';
    var trunc ='';

    stringe=document.getElementById('inputa').value;
    length=document.getElementById('inputb').value;
      
    trunc = stringe.substring(0,length);  
    
    document.getElementById("ansdata").innerHTML=trunc;
    
    return false
}