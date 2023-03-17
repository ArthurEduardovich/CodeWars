const digitToName = (n) => {
    switch (n) {
        case 1:
            return 'wardrobe';
        case 2:
            return 'table';
        case 3:
            return 'chair';
        case 4:
            return 'bed';
        case 5:
            return 'bookshelf';
        case 6:
            return 'exercise bike';
        case 7:
            return 'air-conditioner';
        default:
            return undefined;
    }
}