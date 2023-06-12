import React from 'react';

const CartWidget = () => {
  return (
    <>

        <button type="button" class="btn btn-primary position-relative">
            <img src="src/assets/icons8-carrito-de-compras-64.png" alt="cart" width={32} height={32} />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    </>
  )
}

export default CartWidget;