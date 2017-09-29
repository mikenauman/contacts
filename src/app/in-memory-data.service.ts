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
        name: 'Captian America',
        realName: 'Steve Rogers',
        location: 'Brooklyn',
        image: 'assets/captainamerica.jpg',
        fav: true
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
        realName: 'Groot',
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
        location: 'Galaxy',
        image: 'assets/rocket.jpg',
        fav: true
      },
      {
        id: 19,
        name: 'Luke Cage',
        realName: 'Luke Cage',
        location: 'Harlem',
        image: 'assets/lukecage.jpg',
        fav: false
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
    ];
    return { contacts };
  }
}
