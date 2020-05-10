let items=[];
function inputarray04(){
    
    var numdata ='';
    var boxvalue=document.getElementById('box04').value;
    items.push(boxvalue);
    
    for(i=0;i<items.length;i++){
        numdata += '  '+items[i]+' ' ;
    }
    document.getElementById("displaydata04").innerHTML =numdata;
    console.log(items);
    return false
}
function cleardata(){

    items = [];
    document.getElementById("displaydata04").innerHTML='';
}
function sumofSquar(){
    
    var mostFrequent =1;
    var tempCount=0;
    var item;

    for(var i=0;i<items.length;i++){
        for(var j=0;j<items.length;j++){
            if(items[i]==items[j])
            tempCount++;
            if(mostFrequent<tempCount){
                mostFrequent=tempCount;
                item=items[i];
            }
        }

        tempCount = 0;
    
    }
    
    document.getElementById("displaydata04a").innerHTML='Most frequent element = '+item +'  ['+mostFrequent +'times]';


}