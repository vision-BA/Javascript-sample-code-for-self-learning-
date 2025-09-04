function magicSWitcher(noun){
    switch(noun){
        case "fire":
            console.log("you can control fire");
            break;
            case "Earth":
                console.log("you can control earth");
                break;
                case "water":
                    console.log("you can control water");
                    break;
                    case "air":
                        console.log("you can control air");
                        break;
                        default:
                            console.log("invalid option selected");      
    }
}
magicSWitcher("fire");
magicSWitcher("air");
magicSWitcher("Earth");
magicSWitcher("water");