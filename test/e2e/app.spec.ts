import chai, { expect } from 'chai'
import { describe, it } from 'mocha'
import app from '../../src/app'
import chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Message route', () => {
    describe('POST method', () => {
        it(`should return the msg param`, async () => {
            const testBody = { msg: 'testMsg' }
            const res = await chai.request(app).post('/msg').send(testBody)
            expect(res.body.msg).to.include(testBody.msg)
        })
    })
})
