function print(){

    var starpatern='';
    for(i=0;i<8;i++){
        for(j=0;j<=i;j++){
            starpatern += '*';           

        }
        starpatern +='\n<br>';           
    }
    document.getElementById("displaydata10").innerHTML=starpatern;
    

    }