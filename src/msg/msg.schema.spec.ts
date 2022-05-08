import { describe, it } from 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

import { msgRequestSchema } from './msg.schema'

chai.use(chaiAsPromised)
const { expect } = chai

describe('MsgRequest Schema', () => {
    const validateOptions = {
        stripUnknown: true,
    }
    describe('On a valid request', () => {
        const mockMsg = {
            msg: 'testMsg',
            msg1: 'testErrorMsg',
        }
        it('should validate schema and strip unkown properties of an object', async () => {
            const validatedData = await msgRequestSchema.validate(
                mockMsg,
                validateOptions,
            )

            expect(validatedData).to.have.property(
                'msg',
                mockMsg.msg,
                'should have msg property with value intact',
            )
            expect(validatedData).to.not.have.property(
                'msg1',
                mockMsg.msg1,
                'should strip unknown property',
            )
        })
    })

    describe('On an invalid request', () => {
        it('should throw if no msg field is present', async () => {
            const res = msgRequestSchema.validate(
                { msg1: 'test' },
                validateOptions,
            )
            await expect(res).to.eventually.be.rejectedWith(
                'msg is a required field',
            )
        })
    })
})
