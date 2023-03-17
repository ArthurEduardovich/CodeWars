const cookie = (x) => {
    if (typeof x === 'number') {
        return 'Who ate the last cookie? It was Monica!';
    } else if (typeof x === 'string') {
        return 'Who ate the last cookie? It was Zach!';
    } else {
        return 'Who ate the last cookie? It was the dog!';
    }
};