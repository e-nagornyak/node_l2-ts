import { Request, Response, Router } from "express";
import { ADDRESSES } from "../repositories";

export const addressesRouter = Router({})

addressesRouter.get('/', (req: Request, res: Response) => {
	res.send(ADDRESSES)
})

addressesRouter.get('/:id', (req: Request, res: Response) => {
	const { id } = req.params
	const address = ADDRESSES.find(a => a.id === +id)
	res.send(address ? address : 404)
})
