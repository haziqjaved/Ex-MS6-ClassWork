const heroe = [
    { name: 'Wolverine', family: 'Marvel', isEvil: false },
    { name: 'Deadpool', family: 'Marvel', isEvil: false },
    { name: 'Magneto', family: 'Marvel', isEvil: true },
    { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
    { name: 'Batman', family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
    { name: 'Legolas', family: 'Tolkien', isEvil: false },
    { name: 'Gandalf', family: 'Tolkien', isEvil: false },
    { name: 'Saruman', family: 'Tolkien', isEvil: true }
    ]
    const newHeroes =[{name: 'Superman', family:"Marvel", isEvil: false},
                     {name: 'Batman', family:"Marvel", isEvil: false}]
     newHeroes.map(h => {
        h.name = h.name.toUpperCase()
        return h;
        })
    let heroes=[...heroe,...newHeroes]
    console.log(heroes)
            