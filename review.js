console.log("hellow Javascript");
console.log(" ");
//output: hellow Javascript
var x=3;
var y=4;
z=x+y;
console.log("The sum of x and y is " +z);
console.log("");
//output: The sum of x and y is 7

var a=3;
var b=4;
c=a-b;
console.log("The difference of a and b is " +c);
console.log("");
//output: The difference of a and b is -1
var m,n;
m=4;
n=5;
console.log("The product of m and n is "+ m*n);
console.log("");
//output: The product of m and n is 20
var c,d;
c=81;
d=2;
console.log("The quotient of c and d is "+c/d);
console.log("");
//output: The quotient of c and d is 40.5
var string="Bright Athuman";
console.log(string);
console.log("");
//output: Bright Athuman
var string="Bright Athuman";
console.log("The string in uppercase is "+string.toUpperCase());
console.log("");
//output:BRIGHT ATHUMAN
var string="Bright Athuman";
console.log("The length of string is "+string.length);
console.log("");
//output:The length of the string is 13
var person={firstName:"bright",lastName:"Mbwilo"};
console.log("The full Name is "+person.firstName +" " +person.lastName);
console.log(" ");
//output: The full Name is bright Mbwilo
var firstChoice=false;
console.log( "The type of variable firstChoice is ",+typeof firstChoice);
console.log("");
//output:boolean
var x=3;
console.log("the type of variable x is " +typeof x);
console.log("");
//output:number
var person={firstName:"bright",lastName:"Mbwilo"};
console.log("The type of variable person is " +typeof person);
console.log("");
//output:object
var studentsMarks=[12,13,89,45,76];
console.log("marks of student are " +studentsMarks);
console.log("");
//output:[12,13,89,45,76]
var studentsMarks=[12,13,89,45,76];
console.log("first element of studentMarks is " +studentsMarks[0]);
console.log("");
//output:12
var studentsMarks=[12,13,89,45,76];
studentsMarks[0]=90;
console.log("marks of student after changing the first element are " +studentsMarks);
console.log("");
//output:[90,13,89,45,76]
var studentNames=["bright","Athuman","Vision","Anoda"];
console.log(studentNames);
console.log("");
//output:["bright","Athuman","Vision","Anoda"]
var studentNames=["bright","Athuman","Vision","Anoda"];
console.log(studentNames.toString());
console.log("");
//output:"bright","Athuman","Vision","Anoda"
var studentNames=["bright","Athuman","Vision","Anoda"];
console.log("The students names are "+studentNames);
console.log("");
//output:The students names are bright,Athuman,Vision,Anoda
var array=[["bright","Athuman","Vision","Anoda"],12,76,89,24,["volkswagen","Ford","VanGuard"]];
console.log(array);
console.log("");
//output:[["bright","Athuman","Vision","Anoda"],12,76,89,24,["volkswagen","Ford","VanGuard"]]
var array=[["bright","Athuman","Vision","Anoda"],12,76,89,24,["volkswagen","Ford","VanGuard"]];
console.log("All elements of an array  are "+array);
console.log("");
//output: All elements of an array  are [["bright","Athuman","Vision","Anoda"],12,76,89,24,["volkswagen","Ford","VanGuard"]]
var array=[["bright","Athuman","Vision","Anoda"],12,76,89,24,["volkswagen","Ford","VanGuard"]];
console.log("The first elements of an array  are "+array[0]);
console.log("");
//output: The first elements of an array  are ["bright","Athuman","Vision","Anoda"]

var array=[["bright","Athuman","Vision","Anoda"],12,76,89,24,["volkswagen","Ford","VanGuard"]];
array[0]=["bright","Athuman","Vision","Justine"];
console.log("The first elements of an array  after changing are "+array[0]);
console.log("");

var array=[["bright","Athuman","Vision","Anoda"],12,76,89,24,["volkswagen","Ford","VanGuard"]];
console.log("The third element of an array is "+array[2]);
console.log("");

var array=[["bright","Athuman","Vision","Anoda"],12,76,89,24,["volkswagen","Ford","VanGuard"]];
console.log("The second element of a third group (cars names) an array is "+array[5][1]);
console.log("");

var array=[["bright","Athuman","Vision","Anoda"],12,76,89,24,["volkswagen","Ford","VanGuard"]];
array.push(["kitchen,bathroom","bedrooms"]);
console.log("The final elements after pushing an element is "+array);
console.log("");

var array=[["bright","Athuman","Vision","Anoda"],12,76,89,24,["volkswagen","Ford","VanGuard"]];
array.pop();
console.log("The final elements after poping an element is "+array);
console.log("");

function myFunction(){
    return "Learn function looks so great";
}
console.log(myFunction());
console.log("");
//output: Learn function looks so great

function myFunction1(){
    console.log("Learn function looks so great");
}
myFunction1();
console.log("");
//output: Learn function looks so great
function myFunction2(){
    var x,y;
    x=6;
    y=5;
    return x+y;
}
console.log("The answer is "+myFunction2());
console.log("");
///output:The answer is 11
function myFunction3(x,y){
    z=x+y;
    console.log("The sum is "+z);
}
myFunction3(12,78);
console.log("");
//output:The sum is 90
function myFunction4(MyName){
    console.log("Good morning "+MyName);
}
myFunction4("bright");
console.log("");
//output:Good morning bright

function myFunction5(x){
    if(x===4){
        return "This is too small 👌";
    }
    else if(x>100){
        return "This is too large 😊";
    }
    else{
        return "This is acceptable proceed ✅"
    }
}
console.log(myFunction5(4));
console.log(myFunction5(1233));
console.log(myFunction5(12));
console.log("");
//output:
//This is too small 👌
//This is too large 😊
//This is acceptable proceed ✅
function myFunction6(){
    var time=new Date().getHours();
    if(time>6){
        return "Hi there,Good Morning";
    }
    else if(time>12){
        return "Hi there,After Noon";
    }
    else if(time>18){
        return "Hi there,Good Evening";
    }
}
console.log(myFunction6());
console.log("");//output depends on the time of the day
var time=new Date().getMinutes();
console.log(time);









