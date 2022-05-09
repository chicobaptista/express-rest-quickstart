import { NextFunction, Request, Response } from 'express'
import { AnySchema } from 'yup'

export const validate =
    (schema: AnySchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { body, query, params } = req
            const validated = await schema.validate(
                {
                    body,
                    query,
                    params,
                },
                {
                    stripUnknown: true,
                    abortEarly: false,
                },
            )
            Object.assign(req, { ...validated })
            return next()
        } catch (err) {
            return res
                .status(400)
                .json({ type: err.name, message: err.errors.join(', ') })
        }
    }
