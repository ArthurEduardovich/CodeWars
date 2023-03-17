// Discover The Original Price (ky 7)
const discoverOriginalPrice = (discountedPrice, salePercentage) => {
    const calcOriginPrice = () => (discountedPrice / (100 - salePercentage)) * 100;
    return Number(calcOriginPrice().toFixed(2));
}