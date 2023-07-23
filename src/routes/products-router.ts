import { Request, Response, Router } from "express";

const PRODUCTS = [
	{ id: 1, name: 'Milk' },
	{ id: 2, name: 'Banana' },
	{ id: 3, name: 'Potato' }
]

export const productsRouter = Router({})

productsRouter.get('/products', (req: Request, res: Response) => {
	res.send(PRODUCTS)
})
