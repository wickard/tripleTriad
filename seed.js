const db = require('./server/db');
const { Card, User } = require('./server/db/models');

const users = [
  {name: 'Wickard'},
  {name: 'FloridaMan'},
  {name: 'Rant'},
  {name: 'Kmactastic'},
  {name: 'Monki'}
]

const cards = [
  {name: 'card1', values: [7, 0, 7, 0]},
  {name: 'card2', values: [3, 3, 3, 3]},
  {name: 'card3', values: [0, 6, 0, 6]},
  {name: 'card4', values: [2, 4, 2, 4]},
  {name: 'card5', values: [5, 2, 3, 4]},
]

const seed = () =>
  Promise.all(users.map(user =>
    User.create(user))
  )
  .then(() =>
  Promise.all(cards.map(card =>
    Card.create(card))
  )
);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
