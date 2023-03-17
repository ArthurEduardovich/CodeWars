function robot(x, y, direction){
    switch (direction) {
        case 'E':
            return [x + 1, y];
            break;
        case 'W':
            return [x - 1, y];
            break;
        case 'N':
            return [x, y + 1];
            break;
        case 'S':
            return [x, y - 1];
            break;
    }
}