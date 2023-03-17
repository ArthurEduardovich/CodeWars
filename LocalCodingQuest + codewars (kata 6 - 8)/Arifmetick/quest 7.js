function createUser (firstName, lastName, age, city, email, phone) {
    let modifyPhone = (phone.trim()[0] === '+')? '': '+'
        return {
        'name': `${firstName.trim()} ${lastName.trim()}`,
        'age': age,
        'city': city.trim(),
        'email': email.trim().toLowerCase(),
        'phone': `${modifyPhone}${phone.trim()}`
    }
}

console.log(createUser('  Alex', ' Smith', 20, '   New York', 'Alex@mail.ru', '+1123421441'))