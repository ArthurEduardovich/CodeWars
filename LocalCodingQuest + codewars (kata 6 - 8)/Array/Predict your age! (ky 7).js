function predictAge(...age){
        return Math.trunc(Math.sqrt(age.reduce((acc,el)=> {
            acc+= el * el;
            return acc;
        }, 0)) / 2);
}
console.log(predictAge(65,60,75,55,60,63,64,45)); // 86