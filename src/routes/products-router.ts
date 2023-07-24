import { NextFunction, Request, Response, Router } from "express";

import { productsRepository } from "../repositories";
import { body, validationResult } from "express-validator";

export const productsRouter = Router({})

const titleValidation = body('title').trim().isLength({
	min: 3,
	max: 15
}).withMessage('Title length should be from 3 to 15 symbols')

const ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) res.status(400).send({ errors: errors.array() })
	next()
}


productsRouter.get('/', (req: Request, res: Response) => {
	const { title } = req.query
	const product = productsRepository.findProducts(title?.toString())
	res.send(product)
})

productsRouter.get('/:id', (req: Request, res: Response) => {
	const { id } = req.params
	const product = productsRepository.getProductById(+id)
	res.send(product ? product : 404)
})

productsRouter.post('/',
	titleValidation,
	ValidationMiddleware,
	(req: Request, res: Response) => {

		const { title } = req.body
		const newProduct = { id: +(new Date()), title }
		productsRepository.createProduct(newProduct)
		res.send(newProduct)
	}
)

productsRouter.put('/:id',
	titleValidation,
	ValidationMiddleware,
	(req: Request, res: Response) => {
		const { title } = req.body
		const { id } = req.params
		if (id && title) {
			const isUpdated = productsRepository.updateProduct(+id, title)
			res.send(isUpdated)
		} else {
			res.send(404)
		}
	})

productsRouter.delete('/:id', (req: Request, res: Response) => {
	const { id } = req.params
	if (id) {
		const isDeleted = productsRepository.deleteProduct(+id)
		res.send(isDeleted ? 200 : 404)
	}

})
