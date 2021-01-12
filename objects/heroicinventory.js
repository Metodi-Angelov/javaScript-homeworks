function register(array) {
    const heroes = [];
    for (let i = 0; i < array.length; i++) {
        let currentHero = array[i].split('/ ');
        let currentHeroName = currentHero[0];
        let currentHeroLevel = +currentHero[1];
        let currentHeroItems = currentHero[2].split(', ');
        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };
        heroes.push(hero);
    }
    const jsonfile = JSON.stringify(heroes);
    console.log(jsonfile);
}


register([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
register(['Jake / 1000 / Gauss, HolidayGrenade']);