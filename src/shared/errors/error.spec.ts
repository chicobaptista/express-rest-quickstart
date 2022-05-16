import { describe, it } from 'mocha'
import { ApiError } from './error'
import { expect } from 'chai'

describe('ApiError', () => {
    it('should have default Internal Server Error atributes', () => {
        try {
            throw new ApiError()
        } catch (error) {
            expect(error.name).to.equal(
                'ApiError',
                'should have the default ApiError name',
            )
            expect(error.status).to.equal(
                500,
                'should have internal server error status as default',
            )
            expect(error.message).to.equal(
                'Something went wrong. Please try again.',
                'should have generic error message by default',
            )
            expect(!!error.stack, 'should capture the call stack trace').to.be
                .true
        }
    })

    it('should have the attributes passed by the constructor', () => {
        try {
            throw new ApiError('Custom error message', 409)
        } catch (error) {
            expect(error.name).to.equal(
                'ApiError',
                'should have the default ApiError name',
            )
            expect(error.status).to.equal(
                409,
                'should have status passed on constructor',
            )
            expect(error.message).to.equal(
                'Custom error message',
                'should have message passed on constructor',
            )
            expect(!!error.stack, 'should capture the call stack trace').to.be
                .true
        }
    })
    it('should handle optional parameters passed on constructor', () => {
        try {
            throw new ApiError(undefined, 403)
        } catch (error) {
            expect(error.name).to.equal(
                'ApiError',
                'should have the default ApiError name',
            )
            expect(error.status).to.equal(
                403,
                'should status passed on constructor',
            )
            expect(error.message).to.equal(
                'Something went wrong. Please try again.',
                'should have generic error message by default',
            )
            expect(!!error.stack, 'should capture the call stack trace').to.be
                .true
        }
    })
})
