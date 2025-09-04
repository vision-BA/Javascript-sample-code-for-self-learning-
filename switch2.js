 function sizes(number){
    var answer="";
    switch(number){
        case 1:
            case 2:
                case 3:
                    answer="lower";
                    break;
                    case 4:
                        case 5:
                            case 6:
                                answer="Medium";
                                break;
    }
    return answer;
 }
 console.log(sizes());