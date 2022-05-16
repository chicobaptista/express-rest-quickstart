/* istanbul ignore file */
import { NextFunction, Request, Response } from 'express'

export function errorLoggerMiddleware(
    error: Error,
    _req: Request,
    _res: Response,
    next: NextFunction,
) {
    // eslint-disable-next-line no-undef
    if (process.env.LOG_ERRORS === 'true') console.error(error)
    next(error)
}
