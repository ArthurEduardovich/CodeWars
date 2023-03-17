// Is he gonna survive? (KATA 8)
const hero = (bullets, dragons) => {
    if (dragons * 2 > bullets) {
        return false;
    } else {
        return true;
    }
}