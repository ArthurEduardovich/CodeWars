const carCreate = (brand, model, year, color) => {
    const brandModify = brand.trim();
    const modelModify = model.trim();
    const modifyColor = color.trim().toLowerCase();
    const code = `${brandModify[0]}${modelModify[0]}${year}${modifyColor[0].toUpperCase()}`
    return {
        'brand': brandModify,
        'model': modelModify,
        'year': year,
        'color': modifyColor,
        'code': code
    }
}
console.log(carCreate(' Toyota', ' Camry', 2010, ' BLACK'))