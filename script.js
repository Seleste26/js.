let month = +prompt("Какой месяц")

switch (month) {
    case 1:
    case 2:
    case 12:
        console.log("Зима")
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
    case 6:
    case 7:
    case 8:
        console.log("Лето");
    case 9:
    case 10:
    case 11:
        console.log("Осень");
        
            

    default:
        console.log("Такого месяца нет");
        break;
}





