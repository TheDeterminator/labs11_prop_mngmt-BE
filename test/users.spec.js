const request = require('supertest');
const server = require('../index');
const expect = require('chai').expect;

describe('Unit tests for users', () => {
  it('has required keys on users GET route', async () => {
    const response = await request(server).get('/api/users/');

    expect(response.body.users[0]).to.have.keys(
      'id',
      'username',
      'firstName',
      'lastName',
      'password',
      'role',
      'organizationId'
    );
  });

  it('has required keys on users GET ID route', async () => {
    const response = await request(server).get('/api/users/1');

    expect(response.body.user).to.have.keys(
      'id',
      'username',
      'firstName',
      'lastName',
      'password',
      'role',
      'organizationId'
    );
  });

  it('has required keys on users register POST route', async () => {
    const response = await request(server)
      .post('/api/users/register')
      .send({
        username: 'greg.davis@gmail.com',
        firstName: 'Greg',
        lastName: 'Davis',
        password: 'hgfdeuhijidjd51d6545',
        role: 'teacher',
        organizationName: 'Evil Corp'
      });

    expect(response.body.user).to.have.keys(
      'id',
      'username',
      'firstName',
      'lastName',
      'password',
      'role',
      'organizationId'
    );
  });
});
