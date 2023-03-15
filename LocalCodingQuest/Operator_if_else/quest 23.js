const areaOrPerimeter = (l, w) => {
    if (l === w) {
        return l * w;
    } else {
        return 2 * (l + w);
    }
}