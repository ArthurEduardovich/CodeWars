// Which shape has more area?
const areaComparison = (r, a) => {
    const calcAreaRing = () => Math.PI * Math.pow(r, 2);
    const calcAreaSquare = () => Math.pow(a, 2);
    if (calcAreaRing() > calcAreaSquare()) {
        return 'circle';
    }
    if (calcAreaSquare() > calcAreaRing()) {
        return 'square';
    }
    if (calcAreaSquare() === calcAreaSquare()) {
        return 'the sam';
    }

}