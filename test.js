
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

  function lookUpProfile(name, prop) {
    let a = '';

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i]['firstName'] === name && prop in contacts[i]) {
            a = contacts[i][prop];
          return a;

        } else if (){
          a = 'No such contact';
          continue;

        } else {
          a = 'No such property'
          continue;
        }
    }
    return a;
  }
  console.log(lookUpProfile("Sherlock", "likes"));
  console.log(lookUpProfile("Akira", "address"))
  console.log(lookUpProfile("Bob", "potato"))