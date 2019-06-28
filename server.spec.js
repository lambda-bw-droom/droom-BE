const server = require('./server.js')
const supertest = require('supertest')

describe('TEST', () => {
    it('server is up and running', () => {
        return supertest(server).get('/').expect(200)
    });
});



// describe('register', () => {

//     const mockData = {
//         "first_name": "rick",
//         "last_name": "sanchez",
//         "email": "rs@mail.com",
//         "password": "password",
//         "is_employer": "false"
//     }
    
//     it('responds with 201 when sent correct data', () => {
//         return supertest(server)
//         .post('/auth/register')
//         .send(mockData)
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(201)
//         .end((err) => {
//             if (err) return done(err);
//             done();
//         });
//     });
// });