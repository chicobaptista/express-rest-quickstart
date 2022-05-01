import { describe, it } from 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

import { msgRequestSchema } from './msg.schema'

chai.use(chaiAsPromised)
const { expect } = chai

describe('MsgRequest Schema', () => {
    it('should validate schema of an object', async () => {
        const mockMsg = {
            msg: 'testMsg',
            msg1: 'testErrorMsg',
        }
        const validatedData = await msgRequestSchema.validate(mockMsg, {
            stripUnknown: true,
        })

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
