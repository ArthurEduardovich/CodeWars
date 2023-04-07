const betterThanAverage = (classPoints, yourPoints) => {
    let sum = yourPoints;
    for (let i = 0; i < classPoints.length; i++) {
        sum+= classPoints[i];
    }

    let result = sum / classPoints.length;

    return result > yourPoints? false: true;
}