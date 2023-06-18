import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import { useState } from 'react'
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const cartDisabaleHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown &&
        <Cart
          onCartDisabale={cartDisabaleHandler}
        />
      }
      <Header
        onCartShown={showCartHandler}
      />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
