function greetings(name, language) {
   let greet = '';
   switch (language) {
       case 'Czech':
           greet = 'Nazdar';
           break;
       case 'Russian':
           greet = 'Привет';
           break;
       case 'Italian':
           greet = 'Saluto';
           break;
       case 'Spanish':
           greet = 'Hola';
           break;
       case 'French':
           greet = 'Bonjour';
           break;
       case 'German':
           greet = 'Hallo';
           break;
       default:
           greet = 'Hello';
           break;
   }
   let result = `${greet} ${name}!`;
   return result;
}
console.log(greetings('Peter', 'Russia'));