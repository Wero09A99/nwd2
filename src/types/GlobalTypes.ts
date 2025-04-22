type Cart = CartItem[];

type CartItem = {
    id: number,
    name: string,
    price: string,
    quantity: number,
    imageUrl: string,
}

export type {
    Cart,
    CartItem,
}