export class InMemoryDataService {
  createDb() {
    const contacts = [
      {
        id: 11,
        name: 'Iron Man',
        realName: 'Tony Stark',
        location: 'Malibu',
        image: 'assets/ironman.jpg',
        fav: true
      },
      {
        id: 12,
        name: 'Thor',
        realName: 'Thor Odinson',
        location: 'Asgard',
        image: 'assets/thor.jpg',
        fav: false
      },
      {
        id: 13,
        name: 'Black Widow',
        realName: 'Natasha Romanov',
        location: 'Russia?',
        image: 'assets/blackwidow.jpg',
        fav: false
      },
      {
        id: 14,
        name: 'Captain America',
        realName: 'Steve Rogers',
        location: 'Brooklyn',
        image: 'assets/captainamerica.jpg',
        fav: false
      },
      {
        id: 15,
        name: 'Dare Devil',
        realName: 'Matt Murdock',
        location: 'Hell\'s Kitchen',
        image: 'assets/daredevil.jpg',
        fav: true
      },
      {
        id: 16,
        name: 'Groot',
        realName: 'I am Groot',
        location: 'I am Groot',
        image: 'assets/groot.jpg',
        fav: false
      },
      {
        id: 17,
        name: 'Hulk',
        realName: 'Bruce Banner',
        location: 'Unknown',
        image: 'assets/hulk.jpg',
        fav: true
      },
      {
        id: 18,
        name: 'Rocket Racoon',
        realName: 'Trash Panda',
        location: 'Galaxy Somewhere',
        image: 'assets/rocket.jpg',
        fav: true
      },
      {
        id: 19,
        name: 'Luke Cage',
        realName: 'Luke Cage',
        location: 'Harlem',
        image: 'assets/lukecage.jpg',
        fav: true
      },
      {
        id: 20,
        name: 'Jessica Jones',
        realName: 'Jessica Jones',
        location: 'New York',
        image: 'assets/jessicajones.jpg',
        fav: false
      },
      {
        id: 21,
        name: 'Ant Man',
        realName: 'Scott Lang',
        location: 'San Fransisco',
        image: 'assets/antman.jpg',
        fav: false
      },
      {
        id: 22,
        name: 'Black Panther',
        realName: 'T\'Challa',
        location: 'Wakanda',
        image: 'assets/blackpanther.jpg',
        fav: false
      },
      {
        id: 23,
        name: 'Captain Marvel',
        realName: 'Carol Danvers',
        location: 'Washington D.C.',
        image: 'assets/captainmarvel.jpg',
        fav: false
      },
      {
        id: 24,
        name: 'Falcon',
        realName: 'Sam Wilson',
        location: 'New York',
        image: 'assets/falcon.jpg',
        fav: false
      },
      {
        id: 25,
        name: 'Hawkeye',
        realName: 'Clint Bartonhow',
        location: 'Secret House',
        image: 'assets/hawkeye.jpg',
        fav: false
      },
      {
        id: 26,
        name: 'Scarlet Witch',
        realName: 'Wanda Maximoff',
        location: 'Transia',
        image: 'assets/scarletwitch.jpg',
        fav: false
      },
      {
        id: 27,
        name: 'Drax',
        realName: 'Arthur Douglas',
        location: 'Galaxy Somewhere',
        image: 'assets/drax.jpg',
        fav: false
      },
      {
        id: 28,
        name: 'Gamora',
        realName: 'Gamora',
        location: 'Galaxy Somewhere',
        image: 'assets/gamora.jpg',
        fav: false
      },
      {
        id: 29,
        name: 'Star-Lord',
        realName: 'Peter Quill',
        location: 'Galaxy Somewhere',
        image: 'assets/starlord.jpg',
        fav: false
      },
      {
        id: 30,
        name: 'Iron Fist',
        realName: 'Danny Rand',
        location: 'New York',
        image: 'assets/ironfist.jpg',
        fav: false
      },
      {
        id: 31,
        name: 'Punisher',
        realName: 'Frank Castle',
        location: 'Queens',
        image: 'assets/punisher.jpg',
        fav: false
      },
    ];
    return { contacts };
  }
}
