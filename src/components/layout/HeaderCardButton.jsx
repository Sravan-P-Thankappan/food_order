
import React, { useContext } from 'react'
import CartIcon from '../cart/CartIcon'
import classes from './HeaderCardButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCardButton = (props) => {

    const cartCtx = useContext(CartContext);

    const cartNumber = cartCtx.items.reduce((acc, item) => {
        return acc + item.amount
    }, 0);


    return (
        <button className={classes.button}
        
            onClick={() => props.onCartShown()}
        >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {cartNumber}
            </span>
        </button>
    )
}

export default HeaderCardButton