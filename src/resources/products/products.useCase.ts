import { PizzaDTO, ProductDTO } from "./products.interface"

class Product {
    private name: string
    private price: number
    private description: string
    private image: string

    constructor({ name, price, description, imageUrl }: ProductDTO) {
        this.name = name
        this.price = price
        this.description = description
        this.image = imageUrl
    }

    uploadImage() {

    }
}

export class Pizza extends Product {
    private flavours: string[]

    constructor(product: ProductDTO, { flavours }: PizzaDTO) {
        super(product)
        this.flavours = flavours
    }   
}

export class Hamburguer extends Product {

}

export class IceCream extends Product {

}