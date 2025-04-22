import {create} from "zustand/react";
import {createJSONStorage, devtools, persist} from "zustand/middleware";
import {CartStore} from "../types/storeTypes.ts";

export const useCartStore = create<CartStore>()(
    devtools(
        persist(
            (setState) => ({
                cartStore: JSON.parse(localStorage.getItem("cart-storage") || "[]"),

                totalAmount: 0,

                addItemToCart: (item) => {
                    setState((state) => {
                        const existingItem = state.cartStore.find((i) => i.id === item.id);

                        let updatedCart;
                        let totalAmount = state.totalAmount;
                        if (existingItem) {
                            // Si el producto ya está en el carrito, incrementa la cantidad
                            updatedCart = state.cartStore.map((i) => {
                                if(i.id === item.id){
                                    totalAmount += +i.price
                                    return {
                                        ...i,
                                        quantity: i.quantity + 1
                                    }
                                }else{
                                    return i
                                }
                            });
                        } else {
                            // Si no está en el carrito, lo agrega
                            totalAmount += +item.price;
                            updatedCart = [...state.cartStore, { ...item, quantity: 1 }];
                        }

                        // Guardar en localStorage
                        localStorage.setItem("cart-storage", JSON.stringify(updatedCart));

                        return { cartStore: updatedCart, totalAmount: totalAmount };
                    });
                },

                removeAllItems: () => {
                    setState(() => {
                        return {
                            cartStore: [],
                            totalAmount: 0,
                        }
                    })
                    localStorage.removeItem("cart-storage");
                },

                removeItemById: (id: number) => {
                    setState((state) => {
                        const existingItem = state.cartStore.findIndex((i) => i.id === id);

                        const newState = state.cartStore;

                        newState.splice(existingItem, 1);

                        localStorage.setItem("cart-storage", JSON.stringify(newState));

                        let totalAmount = 0;

                        newState.forEach((item) => {
                            totalAmount += +item.price * item.quantity;
                        })

                        return {
                            cartStore: newState,
                            totalAmount: totalAmount
                        }
                    })
                },

                addQuantityById: (id: number) => {
                    setState((state) => {

                        let updateTotal = state.totalAmount;
                        const newState = state.cartStore.map((item) => {
                            if (item.id === id) {
                                updateTotal += +item.price;
                                return { ...item, quantity: item.quantity + 1 };
                            }
                            return item;
                        });

                        localStorage.setItem("cart-storage", JSON.stringify(newState));

                        return { cartStore: newState, totalAmount: updateTotal };
                    });
                },

                removeQuantityById: (id:  number) => {
                    setState( (state) => {

                        let updateTotal = state.totalAmount;
                        const newState = state.cartStore.map((item) => {
                            if (item.id === id) {
                                updateTotal -= +item.price;
                                return { ...item, quantity: item.quantity - 1 };
                            }
                            return item;
                        });

                        localStorage.setItem("cart-storage", JSON.stringify(newState));

                        return { cartStore: newState, totalAmount: updateTotal };
                    } )
                }
            }),
            {
                name: "cart-storage", // Nombre clave para el almacenamiento
                storage: createJSONStorage(() => localStorage)
            }
        )
    )
);