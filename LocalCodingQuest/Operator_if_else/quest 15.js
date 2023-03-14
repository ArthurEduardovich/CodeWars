// How old will I be in 2099? (ky 8) kata
function calculateAge (a, b) {
    let s = 's';
    if (a - b === 1 || b - a === 1) {
        s = '';
    }
    if (a < b) {
        return `You are ${b - a} year${s} old.`;
    }
    if (a > b) {
        return `You will be born in ${a - b} years.`;
    }
    if (a === b) {
        return `You were born this very year`;
    }
}