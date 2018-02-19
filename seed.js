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
  {name: 'Beast Master', values: [2, 1, 3, 4], img: 'images/beastmaster.jpg'},
  {name: 'Bug Man', values: [2, 3, 2, 1], img: 'images/bugman.jpg' },
  {name: 'Engineer', values: [6, 2, 5, 4], img: 'images/engi.jpg'},
  {name: 'Nona', values: [6, 3, 4, 2], img: 'images/femWar.jpg'},
  {name: 'Hamster Wing', values: [1, 5, 1, 5], img: 'images/hamster.jpg'},
  {name: 'Octo-Girl', values: [7, 7, 7, 7], img: 'images/octoRainbow.jpg'},
  {name: 'Captain Deathface', values: [9, 9, 9, 9], img: 'images/skellyFull.jpg'},
  {name: 'The Champ', values: [5, 5, 3, 5], img: 'images/snowWar.jpg'},
  {name: 'Snail Express', values: [3, 3, 3, 3], img: 'images/Snail_Epress.jpg'},
  {name: 'Spoon Knight', values: [2, 1, 7, 4], img: 'images/spoonKnight.jpg'},
  {name: 'Will of the Forest', values: [8, 2, 8, 2], img: 'images/translucentman.jpg'},
  {name: 'The Wiz', values: [7, 1, 7, 2], img: 'images/octoRainbow.jpg'}
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
