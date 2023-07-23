import { Request, Response, Router } from "express";

const ADDRESSES = [
	{
		id: 1,
		name: 'First'
	},
	{
		id: 2,
		name: 'Second'
	},
	{
		id: 3,
		name: 'Third'
	}
]

export const addressesRouter = Router({})

addressesRouter.get('/', (req: Request, res: Response) => {
	res.send(ADDRESSES)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
	const { id } = req.params
	const address = ADDRESSES.find(a => a.id === +id)
	res.send(address ? address : 404)
})
