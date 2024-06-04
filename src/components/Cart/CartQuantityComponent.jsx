function CartQuantitiyComponent({ cart, kolicina }) {



    return (
[        <div className="naslov" id="naslov">
            <i className="bi bi-cart-fill"></i>
            <h2> Proizvodi u košarici: <span>
                {

                    cart.cartProducts?.map((product, id) => { kolicina += Number(product.quantity) }
                    )

                }

                {kolicina}
            </span></h2>
        </div>, kolicina]
    )
}

export { CartQuantitiyComponent };