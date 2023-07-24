import { Request, Response, Router } from "express";
import { productsRepository } from "../repositories";

export const productsRouter = Router({})

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

productsRouter.post('/', (req: Request, res: Response) => {
	const { title } = req.body
	const newProduct = { id: +(new Date()), title }
	productsRepository.createProduct(newProduct)
	res.send(newProduct)
})

productsRouter.put('/:id', (req: Request, res: Response) => {
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
