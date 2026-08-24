'use strict';

const supertest = require('supertest');
const { server } = require('../server');

const request = supertest(server);

describe('Express server', () => {
  test('GET / returns the expected response', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Backend Server Running!');
  });
});
