import { InferType, object, string } from 'yup'

export const msgRequestSchema = object({
    msg: string().required(),
})

export interface MsgRequest extends InferType<typeof msgRequestSchema> {}
