// Calculate BMI (kata ky 8)
function bmi(weight, height) {
    const calcMbi = () => weight / Math.pow(height, 2);
    if (calcMbi() <= 18.5) {
        return 'Underweight';
    }
    if (calcMbi() <= 25) {
        return 'Normal';
    }
    if (calcMbi() <= 30) {
        return 'Overweight';
    }
    if (calcMbi() > 30) {
        return 'Obese';
    }
}