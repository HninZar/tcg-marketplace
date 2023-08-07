import { createContext, useContext, useState } from "react";
import { Cart } from "@/data/Cart";
import { CartContextState } from "@/data/CartContextState";
import { produce } from "immer";
import { Card } from "@/data/Card";

const defaultValues: CartContextState = {
    cart: [],
    addToCart: () => {},
    clearAll: () => {},
    increase: () => {},
    decrease: () => {},
    remove: () => {}
};

//Create context
const CartContext = createContext<CartContextState>(defaultValues);

type ContainerProps = {
    children: React.ReactNode; //👈 children prop typr
}

export const CartWrapper = ({children}: ContainerProps) => {
    const [cart, setCart] = useState<Cart[]>([]);

    function addToCart(card: Card) {
        setCart(
            produce(cart, state => {
                state.push({
                    id: Date.now(),
                    card,
                    qty: 1
                })
            })
        )
    }

    function clearAll() {
        setCart([]);
    }

    function increase(id: number) {
        setCart(
            produce(cart, state => {
                const index = state.findIndex(item => item.id === id);

                if (index > -1) {
                    state[index].qty += 1;
                }
            })
        )
    }

    function decrease(id: number) {
        setCart(
            produce(cart, state => {
                const index = state.findIndex(item => item.id === id);

                if (index > -1) {
                    state[index].qty -= 1;
                }
            })
        )
    }

    function remove(id: number) {
        setCart(cart.filter(item => item.id !== id));
    }
    
    return (
        <CartContext.Provider value={{
            cart,
            addToCart, 
            clearAll, 
            increase, 
            decrease, 
            remove
        }}>
        {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);