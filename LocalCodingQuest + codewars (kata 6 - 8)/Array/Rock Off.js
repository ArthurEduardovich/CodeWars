function solve(a, b){
    let totalScoreAlice = 0;
    let totalScoreBob = 0;
    for (let i = 0; i < 3; i++){
        if (a[i] > b[i]) totalScoreAlice++;
        if (a[i] < b[i]) totalScoreBob++;
        if (a[i] === b[i]) continue;
    }
    return totalScoreAlice > totalScoreBob? `${totalScoreAlice}, ${totalScoreBob}: Alice made "Kurt" proud!`:
            totalScoreBob > totalScoreAlice? `${totalScoreAlice}, ${totalScoreBob}: Bob made "Jeff" proud!`:
            `${totalScoreAlice}, ${totalScoreBob}: that looks like a "draw"! Rock on!`;
}