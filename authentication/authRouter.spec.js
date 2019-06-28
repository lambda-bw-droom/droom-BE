const testServer = require('../server')
const supertest = require('supertest')
const server = require('./authRouter')



describe('TEST', () => {
    it('server is up and running', () => {
        return supertest(testServer).get('/').expect(200)
    });
});

