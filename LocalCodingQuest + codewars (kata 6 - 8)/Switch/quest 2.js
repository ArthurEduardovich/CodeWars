const polygonName = (n) => {
    let result = '';
    switch (n) {
        case 3:
            result = 'triangle';
            break;
        case 4:
            result = 'square';
            break;
        case 5:
            result = 'pentagon';
            break;
        case 6:
            result = 'hexagon';
            break;
        case 7:
            result = 'heptagon';
            break;
        case 8:
            result = 'octahedron';
            break;
        case 9:
            result = 'nonagon';
            break;
        case 10:
            result = 'decagon';
            break;
        default:
            result = undefined;
    }
    return result;
}