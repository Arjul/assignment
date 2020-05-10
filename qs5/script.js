function oddeven(){
var dataprint = 0;

    for(i=0;i<=15;i++){

        if(i===0){

        
        dataprint = i +' is nither even nor odd <br>'
        
        
        }else if(i%2===0){
            dataprint += i +' is even <br>'
            
            

        }else{

            dataprint += i +' is odd <br>'
            
            
        }
    }
    document.getElementById("displaydata5").innerHTML=dataprint;
    
}