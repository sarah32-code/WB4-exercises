let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
];
let ID187;
for (let member of academyMembers) {
    if (member.memID === 187) {
        ID187 = member.name;
    }
}
console.log("1D", ID187);

let threeFilms = [];
for (let member of academyMembers) {
        if (member.films.length >= 3) {
            threeFilms.push(member.name);
    }
}
console.log("3 films", threeFilms);

let nameBob = [];

    for (let member of academyMembers) {
        if (member.name.startsWith("Bob ")) {
            nameBob.push(member.name);
        }
    }
console.log("name Bob", nameBob);
    
let flimsStartWithA = [];
for (let member of academyMembers) {
    if (member.films[0].startsWith("A")) {
        flimsStartWithA.push(member.name);
    }
}
console.log("films start with A", flimsStartWithA);