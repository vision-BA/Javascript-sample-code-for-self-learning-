function cases(number){
    var month="";
    switch(number){
        case 1:
            month="january";
            break;
            case 2:
                month="february";
                break;
                case 3:
                    month= "march";
                    break;
                    case 4:
                        month="April";
                        break;
                        case 5:
                            month="may";
                            break;
                            case 6:
                                month="june";
                                break;
                                case 7:
                                    month="july";
                                    break;
                                    case 8:
                                        month="August";
                                        break;
                                        case 9:
                                            month="September";
                                            break;
                                            case 9:
                                                month="october";
                                                break;
                                                case 10:
                                                    month="November";
                                                    break;
                                                    case 12:
                                                        month="December";
                                                        default:
                                                            month="INVALID OPTION";
                                                        
    }
    return month;
}
console.log(cases(34).toUpperCase());