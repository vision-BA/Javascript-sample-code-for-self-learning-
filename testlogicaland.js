function logicalAnd(val){
    if (val >=100  && val <=500){
        return "maximum";
    } 
    if (val <=100 && val >10){
        return "moderate"
    }
    return "very low";
}
console.log(logicalAnd(45));