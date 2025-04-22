import {Cart, CartItem} from "./GlobalTypes.ts";

type CartStore = {
    cartStore: Cart;
    totalAmount: number;
    addItemToCart: (item: CartItem) => void;
    removeItemById: (id: number) => void;
}

export type {
    CartStore
}