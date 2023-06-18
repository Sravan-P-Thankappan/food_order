import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + (action.item.price * action.item.amount)
        return {
            items: updatedItems, totalAmount: updatedAmount
        }
    }

    return defaultCartState
}


const CartProvider = ({ children }) => {

    const [cartState, cartDispatcher] = useReducer(cartReducer, defaultCartState)

    const cartContext = {
        items: defaultCartState.items,
        totalAmount: defaultCartState.totalAmount,
        addItem: addToCart,
        removeItem: removeFromCart
    }

    const addToCart = (item) => {

        cartDispatcher({ type: 'ADD', item: item });
    };

    const removeFromCart = (id) => {

        cartDispatcher({ type: 'REMOVE', id: id });
    };


    return (

        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;