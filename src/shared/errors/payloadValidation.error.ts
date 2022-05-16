import { ApiError } from './error'

export class PayloadValidationError extends ApiError {
    constructor(message?: string) {
        super(message || 'Invalid payload.', 400)
    }
}
