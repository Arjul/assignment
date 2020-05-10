let arrayvalues = [] ;


function arrayin(){
    
    var datum ='';
    var boxvalue=document.getElementById('input').value;
    arrayvalues.push(boxvalue);
    
    for(i=0;i<arrayvalues.length;i++){
        datum += '  '+arrayvalues[i]+' ' ;
    }
    document.getElementById("data").innerHTML =datum;
    
    
    return false
}


function clearall(){

    arrayvalues = [];
    document.getElementById("data").innerHTML='';

}

function alpha(){

    var alphal ='';

    arrayvalues.sort();

    for(i=0;i<arrayvalues.length;i++){
        alphal +=arrayvalues[i]+' ';
    }

    document.getElementById("ansdata").innerHTML= alphal;
}