function trjava(){

    var javastring ='javascript';
    var javachar='';

    for(i=0;i<javastring.length;i++){
        
        for(j=0;j<=i;j++){
            javachar += javastring.charAt(j);
        }
        javachar +='\n<br>';
    }
    document.getElementById("displaydata9").innerHTML=javachar;
    console.log(javachar);


}