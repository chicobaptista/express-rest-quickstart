import { MsgRequest, msgRequestSchema } from './msg.schema'
import { NextFunction, Request, Response } from 'express'
import { MessageController } from './msg.controller.interface'

async function createMessage(req: Request, res: Response, next: NextFunction) {
    try {
        const { body } = req
        const data: MsgRequest = await msgRequestSchema.validate(body, {
            stripUnknown: true,
        })
        return res.status(201).json(data)
    } catch (error) {
        next(error)
    }
}

export const controller: MessageController = {
    createMessage,
}
