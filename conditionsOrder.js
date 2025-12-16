//treating functions in ordered manner
function orderedManner(val){
   if (val>50){
        console.log("greater than fifty 50");
    }
    else if (val>10){
        console.log("greater than ten 10"); // the first satisified condition will affect the flow of code
    }
   
    else{
        console.log("it is less than 10 and 50 in advance");
    }
}
orderedManner(8);
orderedManner(24);
orderedManner(90);  

/* in this function thbe concept is that order of execution matter on the arragement to condition's*/
