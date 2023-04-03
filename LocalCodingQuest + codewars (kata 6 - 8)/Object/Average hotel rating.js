function getAverageRating(hotel){
    let stingHotel = JSON.stringify(hotel);
    let result = 0;
    for(let i = 0; i < stingHotel.length; i++){
        if (+stingHotel[i] >= 0) result+= +stingHotel[i];
        continue;
    }
    return Number(result) / 4;
}