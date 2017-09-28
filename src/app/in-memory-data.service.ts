export class InMemoryDataService {
  createDb() {
    const contacts = [
      {
        id: 11,
        name: 'Bob',
        phone: '(630) 555-1212',
        city: 'Chicago',
        desc: 'Cool guy'
      },
      {
        id: 12,
        name: 'Betty',
        phone: '(630) 555-1212',
        city: 'Chicago',
        desc: 'Cool guy'
      },
      {
        id: 13,
        name: 'Jim',
        phone: '(630) 555-1212',
        city: 'Chicago',
        desc: 'Cool guy'
      },
    ];
    return { contacts };
  }
}
