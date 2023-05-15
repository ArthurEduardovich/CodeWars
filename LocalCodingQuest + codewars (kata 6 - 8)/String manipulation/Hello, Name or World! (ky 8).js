function hello(name) {
    if (!(name)) return 'Hello, World!'
    let modName = name[0].toUpperCase() + name.slice(1).toLowerCase() + '!';
    return `Hello, ${modName}`
}
console.log(hello('johN'));