import { NextFunction, Response } from 'express'
import { fake, stub } from 'sinon'

export const mockResponse = () => {
    const res: any = {}
    res.status = stub().returns(res)
    res.json = stub().returns(res)
    return res as unknown as Response
}

export const mockNext = () => fake() as unknown as NextFunction
