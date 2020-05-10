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

function frequent(){
    
    var mostFrequent =1;
    var tempCount=0;
    var item;

    for(var i=0;i<arrayvalues.length;i++){
        for(var j=0;j<arrayvalues.length;j++){
            if(arrayvalues[i]==arrayvalues[j])
            tempCount++;
            if(mostFrequent<tempCount){
                mostFrequent=tempCount;
                item=arrayvalues[i];
            }
        }

        tempCount = 0;
    
    }
    
    document.getElementById("ansdata").innerHTML=item ;


}