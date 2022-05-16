import { ApiError } from './error'

export class PayloadValidationError extends ApiError {
    /* istanbul ignore next */
    constructor(message?: string) {
        super(message || 'Invalid payload.', 400)
    }
}
