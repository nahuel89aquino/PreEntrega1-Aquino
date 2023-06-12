import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
  return (
    
    <header>
        <nav className='navbar navbar-expand-lg bg-primary text-light'>
            <div className='container-fluid'>
                <h1 className='navbar-brand p-3 text-light'>Padel Shop</h1>
                <ul className='navbar-nav px-4 text-center'>
                    <li className='nav-item p-3'>Indumentarias</li>
                    <li className='nav-item p-3'>Accesorios</li>
                    <li className='nav-item p-3'>Pelotas</li>
                    <CartWidget className='nav-item p-3' />
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar;