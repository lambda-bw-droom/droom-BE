const server = require('../server')
const supertest = require('supertest')
const db = require('../data/dbConfig');
const token = require('../configSecrets/secret.js')
const helper = require('./helpers.js')
beforeAll(async () => {
    await db.migrate.latest()
})
  
beforeEach(async () => {
    await db.seed.run()
})
  
afterAll(async () => {
    await db.migrate.rollback(null, true)
})

// describe('TEST', () => {
//     it('server is up and running', () => {
//         return supertest(testServer).get('/').expect(200)
//     });
// });

describe('Seekers', () => {
    

    //using token from secrets
    it('/profile/seekers/, is getting json content', () => {
        return supertest(server).get('/profile/seekers')
        .set('Authorization', `${token.token}`)
        .expect('Content-Type', /json/i)
        .expect(200)
    });
    it('/profile/seekers/, expect 200', () => {
        console.log(token.token)
        return supertest(server).get('/profile/seekers')
        .set('Authorization', `${token.token}`)
        .expect(200)
    });
    //using token from helper 
    it('/profile/seekers/, expect 200', () => {
        return helper.signin(token => {
            supertest(server).get('/profile/seekers')
            .set('Authorization', `${token}`)
            .expect(200)
        })
    });
    it('/profile/seekers/, expect content type json', () => {
        return helper.signin(token => {
            supertest(server).get('/profile/seekers')
            .set('Authorization', `${token}`)
            .expect('Content-Type', /json/i)
            .expect(200)
        })
    });

    it('/profile/seekers/id, expect 200', () => {
        return helper.signin(token => {
            supertest(server).get('/profile/seekers/1')
            .set('Authorization', `${token}`)
            .expect(200)
        })
    });

    it('/profile/seekers/id, expect 200 and json type', () => {
        return helper.signin(token => {
            supertest(server).get('/profile/seekers/1')
            .set('Authorization', `${token}`)
            .expect('Content-Type', /json/i)
            .expect(200)
        })
    });


});

describe('Employers', () => {
    it('/profile/employers, getting json content', () => {
        return helper.signin(token => {
            supertest(server).get('/profile/employers')
            .set('Authorization', `${token}`)
            .expect('Content-Type', /json/i)
            .expect(200)
        })
    });
    it('/profile/employers, expect 200', () => {
        return helper.signin(token => {
            supertest(server).get('/profile/employers')
            .set('Authorization', `${token}`)
            .expect(200)
        })
    });

    it('/profile/employers/id, expect 200', () => {
        return helper.signin(token => {
            supertest(server).get('/profile/employers/1')
            .set('Authorization', `${token}`)
            .expect(200)
        })
    });

    it('/profile/employers/id, expect 200 and json type', () => {
        return helper.signin(token => {
            supertest(server).get('/profile/employers/1')
            .set('Authorization', `${token}`)
            .expect('Content-Type', /json/i)
            .expect(200)
        })
    });
});

describe('Users', () => {
    it('/users, json content and 200', () => {
        return helper.signin(token => {
            supertest(server).get('/users')
            .set('Authorization', `${token}`)
            .expect('Content-Type', /json/i)
            .expect(200)
        })
    });
    it('/users/id, json content and 200', () => {
        return helper.signin(token => {
            supertest(server).get('/users/1')
            .set('Authorization', `${token}`)
            .expect('Content-Type', /json/i)
            .expect(200)
        })
    });
    it('/users/id, returns 400 if bad endpoint', () => {
        return helper.signin(token => {
            supertest(server).get('/users/123093203')
            .set('Authorization', `${token}`)
            .expect(400)
        })
    });
});

// describe('Profile', () => {
//     it('PUT /id', () => {
        
//     });
// });


describe('register', () => {

    const mockDataGood = {
        "first_name": "rick",
        "last_name": "sanchez",
        "email": "rs@mail.com",
        "password": "password",
        "is_employer": "false"
    }

    const mockDataBad = {
        "first_name": "rick",
        "last_name": "sanchez",
        "email": "rs@mail.com"
    }

    
    it('responds with 201 when sent correct data', () => {
        return supertest(server)
        .post('/auth/register')
        .send(mockDataGood)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
    });

    it('responds with 400 when sent bad data', () => {
        return supertest(server)
        .post('/auth/register')
        .send(mockDataBad)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
    });


});

describe('login', () => {
    const mockLogin = {
        "email": "js@mail.com",
        "password": "password"
    }

    const mockLoginBad = {
        "email": "jsds@mail.commm",
        "password": "passwordasdas"
    }

    it('responds with 201 when sent correct data', () => {
        return supertest(server)
        .post('/auth/login')
        .send(mockLogin)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
    });

    it('responds with 400 when sent bad data', () => {
        return supertest(server)
        .post('/auth/login')
        .send(mockLoginBad)
        .set('Accept', 'application/json')
        .expect(401)
    });
});