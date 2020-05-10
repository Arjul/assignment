let items=[];
function inputarray04(){
    
    var numdata ='';
    var boxvalue=document.getElementById('box04').value;
    items.push(boxvalue);
    
    for(i=0;i<items.length;i++){
        numdata += '  '+items[i]+' ' ;
    }
    document.getElementById("displaydata").innerHTML =numdata;
    console.log(items);
    return false
}
function cleardata(){

    items = [];
    document.getElementById("displaydata").innerHTML='';
    
    
}
function frq(){

    var sumSquare=0 ;
    for(i=0;i<items.length;i++){

        sumSquare += items[i]*items[i];
    }

    document.getElementById("displaydata1").innerHTML=sumSquare;
}