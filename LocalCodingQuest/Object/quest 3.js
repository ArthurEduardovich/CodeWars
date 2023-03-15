function averageScore(exam1, exam2, exam3, exam4, exam5, userName){
    let sum = 0;
    let count = 0;
    if (userName === exam1['name']) {
        sum+= exam1['score'];
        ++count;
    }
    if (userName === exam2['name']) {
        sum+= exam2['score'];
        ++count;
    }
    if (userName === exam3['name']) {
        sum+= exam3['score'];
        ++count;
    }
    if (userName === exam4['name']) {
        sum+= exam4['score'];
        ++count;
    }
    if (userName === exam5['name']) {
        sum+= exam5['score'];
        ++count;
    }
    return count ? sum / count: 0;
}