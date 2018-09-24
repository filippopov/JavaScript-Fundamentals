function heroicInventory(arr) {
    let heroObject = [];
    for (let heroInfo of arr) {
        let heroArray = heroInfo.split(' / ');
        let heroName = heroArray.shift();
        let heroLevel = Number(heroArray.shift());
        let heroInventory = [];
        if (heroArray.length !== 0) {
            heroInventory = heroArray[0].split(', ');
        }

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroInventory
        };

        heroObject.push(hero);
    }

    console.log(JSON.stringify(heroObject));
}


let test = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];

heroicInventory(test);