import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import { useState } from 'react'

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const cartDisabaleHandler = () => {
    setCartIsShown(false)
  }

  return (
    <>
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
    </>
  );
}

export default App;
