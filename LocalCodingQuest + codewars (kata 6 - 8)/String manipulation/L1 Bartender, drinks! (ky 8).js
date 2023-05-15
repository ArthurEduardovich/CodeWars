function getDrinkByProfession(s){
    let modifyStr = '';
    for (let i = 0; i < s.length; i++){
        if (i === 0 || s[i - 1] === ' '){
            modifyStr+= s[i].toUpperCase();
        }
        else modifyStr+= s[i].toLowerCase()
    }
    switch(modifyStr){
        case "Jabroni":
            return "Patron Tequila";
        case "School Counselor":
            return "Anything with Alcohol";
        case 'Programmer':
            return 	"Hipster Craft Beer";
        case "Bike Gang Member":
            return 'Moonshine';
        case "Politician":
            return "Your tax dollars";
        case "Rapper":
            return "Cristal";
        default:
            return 'Beer'
    }
}
console.log(getDrinkByProfession('bike ganG member'));