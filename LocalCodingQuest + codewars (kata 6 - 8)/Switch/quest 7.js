function examinationMark(mark) {
    switch (mark) {
        case 1:
            return 'bad';
            break;
        case 2:
            return 'unsatisfactory';
            break;
        case 3:
            return 'mediocre';
            break;
        case 4:
            return 'good';
            break;
        case 5:
            return 'excellent';
            break;
        default:
            return 'wrong data';
    }
}