let PRODUCTS = [
	{ id: 1, title: 'Milk' },
	{ id: 2, title: 'Banana' },
	{ id: 3, title: 'Potato' }
]

export const productsRepository = {
	createProduct: (product: any) => {
		PRODUCTS.unshift(product)
	},
	findProducts: (title: string | undefined) => {
		if (title) {
			return PRODUCTS.filter(p => p.title.toLowerCase().indexOf(title) > -1)
		} else {
			return PRODUCTS
		}
	},
	getProductById: (id: number) => {
		return PRODUCTS.find(p => p.id === id)
	},
	updateProduct: (id: number, title: string) => {
		const product = PRODUCTS.find(p => p.id === id)
		if (product) {
			product.title = title
			return product
		} else {
			return 404
		}
	},
	deleteProduct: (id: number) => {
		for (let i = 0; i < PRODUCTS.length; i++) {
			if (PRODUCTS[i].id === id) {
				PRODUCTS.splice(i, 1)
				return true
			}
		}
		return false
	}
}

