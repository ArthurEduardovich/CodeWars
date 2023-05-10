function catMouse(x){
    return x.slice(1, -1).length > 3? 'Escaped!': 'Caught!'
}
console.log(catMouse('C....m'));