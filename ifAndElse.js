function myStar(val) {
 if(val.startsWith("b")){
    return "bright future ahead you";
 }
 else if (val.startsWith("d")){
    return "darkness is near";
 }
 else if (val.includes("f")){
    return "fortune is coming your way";
 }
}
console.log(myStar("bright"));
//output bright future ahead you
console.log(myStar("dainess"));
//output darkness is near
console.log(myStar("fatuma"));