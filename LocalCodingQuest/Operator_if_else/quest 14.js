// Grasshopper - Grade book (KY 8) Kata
function getGrade (s1, s2, s3) {
    const calcMediumPoint = () => (s1 + s2 + s3) / 3;
    if (calcMediumPoint() >= 90 && calcMediumPoint() <= 100) {
        return 'A';
    } else if (calcMediumPoint() < 90 && calcMediumPoint() >= 80) {
        return 'B';
    } else if (calcMediumPoint() < 80 && calcMediumPoint() >= 70) {
        return 'C';
    } else if (calcMediumPoint() < 70 && calcMediumPoint() >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}