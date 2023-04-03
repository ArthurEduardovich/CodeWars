
function getVotingResults(obj1,obj2,obj3,obj4){
    const candidate1 = obj1['candidate1'] + obj2['candidate1'] + obj3['candidate1'] + obj4['candidate1'];
    const candidate2 = obj1['candidate2'] + obj2['candidate2'] + obj3['candidate2'] + obj4['candidate2'];
    const candidate3 = obj1['candidate3'] + obj2['candidate3'] + obj3['candidate3'] + obj4['candidate3'];
    const candidate4 = obj1['candidate4'] + obj2['candidate4'] + obj3['candidate4'] + obj4['candidate4'];
    const candidate5 = obj1['candidate5'] + obj2['candidate5'] + obj3['candidate5'] + obj4['candidate5'];
    const array = [candidate1, candidate2, candidate3, candidate4, candidate5];
    const resultValue = Math.max(...array);
    const resultName = 
        (candidate1 === resultValue)? 'candidate1':
        (candidate2 === resultValue)? 'candidate2':
        (candidate3 === resultValue)? 'candidate3':
        (candidate4 === resultValue)? 'candidate4':
        'candidate5';
    return `${resultName} Wins! ${resultValue} votes`
}
console.log(getVotingResults({ candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 }, { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 }, { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 }, { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 }))