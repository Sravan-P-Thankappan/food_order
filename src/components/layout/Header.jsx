
import React from 'react'
import classes from './Header.module.css'
import banner from '../../assets/banner.jpg'
import HeaderCardButton from './HeaderCardButton'

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ChopStic</h1>
        <HeaderCardButton />
      </header>
      <div className={classes['main-image']}>
        <img src={banner} alt="banner" />
      </div>

    </>
  )
}

export default Header