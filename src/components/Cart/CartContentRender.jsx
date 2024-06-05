import { Link } from "react-router-dom";
import React from "react";

function CartContentRender({ cart, handleUpdateProduct, handleRemoveProduct }) {
    return (
        <div className="u_kosarici" id="u_kosarici">
            <table>
                <thead>
                    <tr className="naslovi">
                        <th> Proizvodi: </th>
                        <th> Cijena: </th>
                        <th> Količina: </th>
                        <th> Ukupno: </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.cartProducts?.map((product, id) => (
                        product.quantity > 0 && (
                            <tr className="podaci" key={id}>
                                <td>
                                    <Link to={"/product/" + product.productId} onClick={() => { window.scrollTo(0, 0) }}>
                                        <section>
                                            <div>
                                                <img className="cart_img" src={product.thumbnailLink} alt={product.thumbnailDescription} />
                                            </div>
                                            <div className="internal_data">
                                                <h3> {product.manufacturer} {product.productName} </h3>
                                                <span><br /> {product.description} <br /><br /></span>
                                            </div>
                                        </section>
                                    </Link>
                                </td>

                                <td> {product.price.toFixed(2)} EUR </td>
                                <td> {product.quantity} </td>


                                {handleUpdateProduct &&
                                    (
                                        <>
                                            <td>
                                                <button onClick={() => handleUpdateProduct(product.productId)}> Plus </button>
                                            </td>
                                            <td>
                                                <button onClick={() => handleRemoveProduct(product.productId, product.quantity)}> Minus </button>
                                            </td>
                                        </>
                                    )
                                }

                                <td> {(product.quantity * product.price).toFixed(2)} EUR </td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export { CartContentRender };