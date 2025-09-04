function listUp(){
    var numbers="";
    var i;
    for(i=10;i>1;i--){
        numbers +=" number " + i +"<br>";
        document.getElementById('demo').innerHTML=numbers;
    }
}
listUp();
var numbers="";
var i;
i=0;
while(i<20){
    numbers +="this is number " +i+"<br>";  
    i++;
}
document.getElementById('demo').innerHTML=numbers;
var numbers="";
var i;
i=0;
do{
    numbers +="this is number " +i+"<br>";  
    i++;
}
while(i<20){  
}
document.getElementById('demo').innerHTML=numbers;
var numbers="";
var i;
for(i=0;i<25;i++){
    if(i%2==0){
        continue;
    }
    numbers +=+i +"<br>";
}
document.getElementById("demo").innerHTML=numbers;