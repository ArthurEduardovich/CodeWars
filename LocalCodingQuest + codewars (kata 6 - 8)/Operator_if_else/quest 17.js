// How old will I be in 2099? (kata ky 8)
function calculateAge (a, b) {
    if (b > a && b - a !== 1) {
        return `You are ${b - a} years old.`
    }
    if (a > b && a - b !== 1) {
        return `You will be born in ${a - b} years.`
    }
    if (b > a && b - a === 1) {
        return `You are ${b - a} year old.`
    }
    if (a > b && a - b === 1) {
        return `You will be born in ${a - b} year.`
    }
    if (a === b) {
        return `You were born this very year!`
    }
}
