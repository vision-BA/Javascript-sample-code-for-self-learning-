function greater(variable){
    if (variable >=100 || variable <=500){
        return "between 100 and 500";
    } 
    if (variable >=20){
        return "it is 20 or over 10"
    }
    return "it is below 100 and 10";
}
console.log(greater(200));