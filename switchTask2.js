function wordAnalyser(word){
    var lowerWord=word.toLowerCase();
    var aletter=lowerWord.charAt(0);
    switch(aletter){
        case "a":
            console.log("Apple like magic");
            break;
        case "b":
            console.log("Buzzing with energy");
            break;
        case "c":
            console.log("calm cosmic power");
            break;
        default:
            console.log("Word doesn't start with a, b, or c");
    }
}
wordAnalyser("Apple");
 