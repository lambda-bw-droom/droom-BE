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

    it('/profile/seekers, responds with an object', () => {
        return supertest(server).get(`/profile/seekers`)
        .then(res => {
            expect(typeof res.body === 'object').toBeTruthy()
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

    it('/profile/seekers/id, responds with an object', () => {
        return supertest(server).get(`/profile/seekers/1`)
        .then(res => {
            expect(typeof res.body === 'object').toBeTruthy()
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

    it('/profile/employers, responds with an object', () => {
        return supertest(server).get(`/profile/employers`)
        .then(res => {
            expect(typeof res.body === 'object').toBeTruthy()
        })
     });


    it('/profile/employers/id, expect 200', () => {
        return helper.signin(token => {
            supertest(server).get('/profile/employers/1')
            .set('Authorization', `${token}`)
            .expect(200)
        })
    });

    it('/profile/employers/id, responds with an object', () => {
        return supertest(server).get(`/profile/employers/1`)
        .then(res => {
            expect(typeof res.body === 'object').toBeTruthy()
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

    // it('/profile/employer/id, DELETE, expect 200 and json type', () => {
    //     return supertest(server)
    //     // edit this ID lower or higher if test is failing 
    //     .delete('/profile/employer/2')
    //     .expect(200)
    //     .then(res => {
    //         expect(res.body).toEqual(`Successfully deleted employer with id 1`)
    //     })
    // });
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

    it('/users, responds with an object', () => {
        return supertest(server).get('/users/')
        .then(res => {
            expect(typeof res.body === 'object').toBeTruthy()
        })
     });

     it('/users/id, responds with an object', () => {
        return supertest(server).get('/users/1')
        .then(res => {
            expect(typeof res.body === 'object').toBeTruthy()
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

describe('Jobs', () => {
    it('GET, responds with 200 and json', () => {
        return supertest(server).get('/jobs')
        .set('Authorization', `${token.token}`)
        .expect('Content-Type', /json/)
        .expect(200)
    });
    it('GET, responds with 200', () => {
        return supertest(server).get('/jobs')
        .set('Authorization', `${token.token}`)
        .expect(200)
    });

    it('GET, responds with 500 if no token', () => {
        return supertest(server).get('/jobs')
        .set('Authorization', `123`)
        .expect(500)
    });

    it('GET /id, responds with 400 if bad ID', () => {
        return supertest(server).get('/jobs/999999')
        .set('Authorization', `${token.token}`)
        .expect(400)
    });

    it('DELETE responds with 400 when bad request', () => {
        return supertest(server)
        .delete('/jobs/123456731')
        .expect(400)
    });
    const MockJobData = {
        "job_title": "askdhlasjdh",
        "job_company": "Company z",
        "start_date": "july 10, 2022",
        "job_type": "asd",
        "education": "School",
        "starting_pay": "$105,000",
        "description": "maintain our application",
        "responsibilities": "build the apps",
        "required_skills": "HTML5, CSS, JavaScript, React",
        "posted_date": "May 1st, 2040",
        "user_id": null,
        "seen": false
      }
      const MockJobDataBad = {
        "job_tidsdstle": "askdhlasjdh",
        "job_company": "Company z",
        "asdsd": "july 10, 2022",
        "dddd": "asd",
        "edddducation": "School",
        "starting_pay": "$105,000",
        "desercription": "maintain our application",
        "respaonsibilities": "build the apps",
        "required_skills": "HTML5, CSS, JavaScript, React",
        "posted_date": "May 1st, 2040",
        "user_id": null,
        "seen": false
      }

      it('POST job, responds with 201 with good data', () => {
        return supertest(server)
        .post('/jobs')
        .send(MockJobData)
        .set('Accept', 'application/json')
        .set('Authorization', `${token.token}`)
        .expect('Content-Type', /json/)
        .expect(201)
      });

      it('POST job, responds with 500 with bad data', () => {
        return supertest(server)
        .post('/jobs')
        .send(MockJobDataBad)
        .set('Accept', 'application/json')
        .set('Authorization', `${token.token}`)
        .expect('Content-Type', /json/)
        .expect(500)
      });

    //   it('PUT job/id, responds with 200', () => {
    //     return supertest(server)
    //     .put('/jobs/1')
    //     .send(MockJobData)
    //     .set('Accept', 'application/json')
    //     .set('Authorization', `${token.token}`)
    //     .expect(200)
    //   });
});

