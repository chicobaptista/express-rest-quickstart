import chai, { expect } from 'chai'
import { describe, it } from 'mocha'
import app from '../../src/app'
import chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Root route', () => {
    it('should return the msg query param on response body', async () => {
        const testQuery = { msg: 'testMsg' }
        const res = await chai.request(app).get('/').query(testQuery)
        expect(res.body.msg).to.include(testQuery.msg)
    })
})
