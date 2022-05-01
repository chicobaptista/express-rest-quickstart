import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    const { msg } = req.query
    return res.json({ msg: `Message was: ${msg}` })
})

export default router
