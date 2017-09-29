export class InMemoryDataService {
  createDb() {
    const contacts = [
      {
        id: 11,
        name: 'Iron Man',
        realName: 'Tony Stark',
        location: 'Malibu',
        image: 'ironman.jpg',
        fav: true
      },
      {
        id: 12,
        name: 'Thor',
        realName: 'Thor Odinson',
        location: 'Asgard',
        image: 'thor.jpg',
        fav: false
      },
      {
        id: 13,
        name: 'Black Widow',
        realName: 'Natasha Romanov',
        location: 'Russia?',
        image: 'blackwidow.jpg',
        fav: false
      },
      {
        id: 14,
        name: 'Captian America',
        realName: 'Steve Rogers',
        location: 'Brooklyn',
        image: 'captainamerica.jpg',
        fav: true
      },
      {
        id: 15,
        name: 'Dare Devil',
        realName: 'Matt Murdock',
        location: 'Hell\'s Kitchen',
        image: 'daredevil.jpg',
        fav: true
      },
      {
        id: 16,
        name: 'Groot',
        realName: 'Groot',
        location: 'I am Groot',
        image: 'groot.jpg',
        fav: false
      },
      {
        id: 17,
        name: 'Hulk',
        realName: 'Bruce Banner',
        location: 'Unknown',
        image: 'hulk.jpg',
        fav: true
      },
      {
        id: 18,
        name: 'Rocket Racoon',
        realName: 'Trash Panda',
        location: 'Galaxy',
        image: 'rocket.jpg',
        fav: true
      },
      {
        id: 19,
        name: 'Luke Cage',
        realName: 'Luke Cage',
        location: 'Harlem',
        image: 'lukecage.jpg',
        fav: false
      },
      {
        id: 20,
        name: 'Jessica Jones',
        realName: 'Jessica Jones',
        location: 'New York',
        image: 'jessicajones.jpg',
        fav: false
      },
      {
        id: 21,
        name: 'Ant Man',
        realName: 'Scott Lang',
        location: 'San Fransisco',
        image: 'antman.jpg',
        fav: false
      },
    ];
    return { contacts };
  }
}
