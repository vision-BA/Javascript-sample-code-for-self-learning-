function test(x,y){
    if (x<0 || y<0){
        return undefined;
    }
    return (Math.pow(Math.sqrt(x)+Math.sqrt(y)),2);
}
console.log(test(2,2));