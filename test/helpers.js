'use strict'

/**
 * Dependencies
 */

const supertest = require('supertest')
const server = require('../server.js')
/**
 * Define helper
 */

async function signin() {
  const res = await supertest(server).post('/auth/login').send({
    email: 'js@mail.com',
    password: 'password'
  })

  return res.body.token
}

/**
 * Export helper
 */

module.exports = {
    signin
}