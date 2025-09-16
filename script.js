// drawing a gradient filled rectangle inside the canva from html  
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var grd=ctx.createLinearGradient(2,2,180,300);
grd.addColorStop(0,"green");
grd.addColorStop(1,"orange");
ctx.fillStyle=grd; 
ctx.fillRect(15,2,180,300);
ctx.moveTo(0,0);
ctx.lineTo(180,300);
ctx.stroke();
//drawing a circle inside the canva tag from html
var canvas1=document.getElementById('myCanvas1');
var ctx=canvas1.getContext('2d');
ctx.beginPath();
ctx.arc(125,150,70,90,2*Math.PI);
ctx.stroke();
/*testing html input validation using js error "try","catch","finally" and "throw" */
function myValidation(){
    var entryData,txt;
    entryData=document.getElementById('entry').value;
    txt=document.getElementById('errorText');
    txt.innerHTML=" ";
    try{
        if(entryData=="") throw "can't be empty it must be filled";
        if(entryData>10) throw "is too large";
        if(entryData<1) throw "is to small";
        if(entryData==NaN) throw "is not a number";
    }
    catch(err){
        txt.innerHTML="input " +err;
    }
   finally{
    document.getElementById('entry').value=" "
   }
}
var car={
    carName:"VanGuard",
    carColor:"Black",
    CarNumber:"T ABC 1234",
    specs:function(){
        return this.carName + "  " +this.carColor;
    }
};
document.getElementById('demo').innerHTML=car.specs();

var person1={
    character:function(){
        return this.gender + " with "+this.age;
    }
};
   var person2 ={
    gender:"male",
    age:23
   };
  document.getElementById('demo1').innerHTML= person1.character.call(person2);
const car={
    type:"Ford",
    model:500,
    color:"white"
};
console.log(car);
                         