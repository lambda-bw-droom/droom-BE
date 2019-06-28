const server = require('../server')
const supertest = require('supertest')

describe('TEST', () => {
    it('server is up and running', () => {
        return supertest(server).get('/').expect(200)
    });
});