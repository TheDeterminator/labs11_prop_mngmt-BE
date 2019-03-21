let faker = require('faker');
let fakeUsers = [];
roles = ['teacher', 'board member', 'school admin'];

for (let i = 0; i < 500; i++) {
  const username = faker.internet.userName();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const password = faker.internet.password();
  const role = roles[Math.floor(Math.random() * roles.length)];
  const randId = faker.random.number();

  const user = {
    username,
    first_name: firstName,
    last_name: lastName,
    password,
    role,
    organization_id: randId
  };

  fakeUsers.push(user);
}

const users = 'users';

exports.seed = knex =>
  knex(users)
    .truncate()
    .then(() => knex(users).insert(fakeUsers));
