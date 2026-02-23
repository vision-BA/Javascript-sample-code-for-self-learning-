/**
 * Demonstrates the importance of condition order in if-else statements.
 * The function checks conditions in sequence, and the first true condition
 * determines the output. This shows how rearranging conditions can change behavior.
 * @param {number} val - The value to evaluate
 */
function orderedManner(val){
   if (val>50){
        console.log("greater than fifty 50");
    }
    else if (val>10){
        console.log("greater than ten 10"); // the first satisfied condition will affect the flow of code
    }
   
    else{
        console.log("it is less than 10 and 50 in advance");
    }
}
orderedManner(8);  // Should output: "it is less than 10 and 50 in advance"
orderedManner(24); // Should output: "greater than ten 10"
orderedManner(90); // Should output: "greater than fifty 50"

/* This function demonstrates that the order of conditions matters in the arrangement of if-else statements. */
