import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {
        const updatedAmount = state.totalAmount + (action.item.price * action.item.amount);

        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItem;

        let updatedItems;

        if (existingCartItem) {

            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items,]

            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems, totalAmount: updatedAmount
        }
    }

    if (action.type === 'REMOVE') {

        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;

        if(existingCartItem.amount===1){

            updatedItems = state.items.filter(item=> item.id !==action.id );
            console.log(updatedItems)

        } else{
          
             const updatedItem = {...existingCartItem,amount:existingCartItem.amount-1}

             updatedItems = [...state.items];

             updatedItems[existingCartItemIndex] = updatedItem;
        }

        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }

    return defaultCartState
}


const CartProvider = ({ children }) => {

    const [cartState, cartDispatcher] = useReducer(cartReducer, defaultCartState)

    const addToCart = (item) => {

        cartDispatcher({ type: 'ADD', item: item });
    };

    const removeFromCart = (id) => {

        cartDispatcher({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCart,
        removeItem: removeFromCart
    }



    return (

        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;