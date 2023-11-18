
import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../cart/CartIcon'
import classes from './HeaderCardButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCardButton = (props) => {

    const [btnIsHighlighted, setBtnHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const cartNumber = cartCtx.items.reduce((acc, item) => {
        return acc + item.amount
    }, 0);

    const { items } = cartCtx

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

    useEffect(() => {

        console.log('effect')
        if (cartCtx.items.length === 0) return;

        setBtnHighlighted(true);

        const timer = setTimeout(() => {
            setBtnHighlighted(false)
        }, 500);

        return () => {
            clearTimeout(timer);
        }

    }, [items]); 

    return (
        <button className={btnClasses} 

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