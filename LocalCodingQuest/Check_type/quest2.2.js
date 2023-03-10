function booleanTranslate (value) {
    if (typeof value === 'boolean' && value === true) {
        return 'Truth';
    } else if (typeof value === 'boolean' && value === false) {
        return 'Lie';
    } else {
        return 'Not a boolean value';
    }
}
console.log(booleanTranslate(false))