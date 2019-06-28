const testServer = require('../server')
const server = require('./specifiedRouter.js')
const supertest = require('supertest')
const db = require('../data/dbConfig');

// beforeAll(async () => {
//     await db.migrate.latest()
// })
  
// beforeEach(async () => {
//     await db.seed.run()
// })
  
// afterAll(async () => {
//     await db.migrate.rollback(null, true)
// })

// describe('TEST', () => {
//     it('server is up and running', () => {
//         return supertest(testServer).get('/').expect(200)
//     });
// });

describe('Seekers', () => {
    it('getting json content', () => {
        return supertest(testServer).get('/profile/seekers')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6IkpvaG5TZWVrZXIiLCJpYXQiOjE1NjE2ODA3NjAsImV4cCI6MTU2MTc2NzE2MH0.qW37U_CjI0c08PlSEWIqKm42ra79MAoiRXSpXn2ShGw')
        .expect('Content-Type', /json/i)
    });
    it('expect 200', () => {
        return supertest(testServer).get('/profile/seekers')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6IkpvaG5TZWVrZXIiLCJpYXQiOjE1NjE2ODA3NjAsImV4cCI6MTU2MTc2NzE2MH0.qW37U_CjI0c08PlSEWIqKm42ra79MAoiRXSpXn2ShGw')
        .expect(200)
    });
});