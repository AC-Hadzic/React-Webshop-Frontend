import { Link } from "react-router-dom";
import "../../assets/CSS/cart.scss";
import data from "../../assets/JSON/ProductData.json";
import { useFetch } from "../../hooks/useFetch";
import { useUpdateProduct } from "../../hooks/useUpdateProduct";
import { useRemoveProduct } from "../../hooks/useRemoveProduct";
import { useEffect } from "react";
import toast from "react-hot-toast";


const cart_products = [
    {
        product: data[5],
        quantity: 4,
    },
    {
        product: data[6],
        quantity: 1,
    }
]

function Cart() {
    const URL = import.meta.env.VITE_API_URL;
    const { data: cart, refetch } = useFetch(URL + "cart/1");
    const { updateProduct } = useUpdateProduct();
    const { removeProduct } = useRemoveProduct();

    const handleUpdateProduct = async (productId) => {
        await updateProduct(URL, cartID, productId, "add");
        toast.success('Product quantity updated!', {style: {borderRadius: "25px"}})
        refetch();
    };

    const handleRemoveProduct = async (productId, quantity) => {
        if (quantity <= 1) {
            await handleDeleteProduct(productId);
        } else {
            await updateProduct(URL, cartID, productId, "remove");
            toast.success('Product quantity updated!', {style: {borderRadius: "25px"}})
        }
        refetch();
    };

    const handleDeleteProduct = async (productId) => {
        await removeProduct(URL, cartID, productId, "single");
        toast.success('Product removed from cart!', {style: {borderRadius: "25px"}});
    };

    const handleClearCart = async () => {
        await removeProduct(URL, cartID);
        toast.success('Product removed from cart!', {style: {borderRadius: "25px"}});
        refetch();
    };

    useEffect(() => {
        if (cart && cart.cartProducts) {
            cart.cartProducts.forEach(product => {
                if (product.quantity <= 0) {
                    handleDeleteProduct(product.productId);
                }
            });
        }
    }, [cart]);

    let popust = 0.05;

    let max_quantity = 0;
    let popust_amount = 0;
    let total_price = 0;
    let regular_price = 0;
    let kolicina = 0;
    const cartID = 1;
    

    function final_price() {
        cart_products.map((data, id) => (
            max_quantity += data.quantity,
            total_price += data.product.price * data.quantity,
            regular_price = total_price
        ))

        if (max_quantity >= 5) {
            popust_amount = total_price * popust
            total_price *= (1 - popust)
        }
        else {
            popust_amount, popust = 0
        }
    }

    final_price()

    return (
        <div className="cart_wrap">
            <article className="total_basket">
                <div id="empty_basket">
                    <h1> Nemate niti jedan proizvod u košarici. Kako to???</h1>
                    <span> Klikni na gumb ispod da se vratiš u naš super katalog prosječnih proizvoda! </span><br />
                    <Link to={"/product"}>
                        <button> Vrati se u kupnju </button>
                    </Link>
                </div>

                <div className="naslov" id="naslov">
                    <i className="bi bi-cart-fill"></i>
                    <h2> Proizvodi u košarici: <span>
                        {

                            cart.cartProducts?.map((product, id) =>
                                {kolicina += Number(product.quantity)}
                            )
                                
                        }

                    { kolicina }
                    </span></h2>
                </div>

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

                                        <td> <button onClick={() => handleUpdateProduct(product.productId)}> Plus </button></td>
                                        <td> <button onClick={() => handleRemoveProduct(product.productId, product.quantity)}> Minus </button></td>
                                        <td> {(product.quantity * product.price).toFixed(2)} EUR </td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                </div>

                <hr />

                <div className="cijena" id="cijena">
                    <div className="buttons">
                        <Link to={"/product"} onClick={() => { window.scrollTo(0, 0) }}>
                            <button> Vrati se u kupnju </button>
                        </Link>
                        {/* onclick to the refresh button */}
                        <button> Ažuriraj košaricu </button>
                        {/* onclick to delete all */}
                        <button id="delete_all" onClick={() => handleClearCart()}> Poništi sve </button>
                        <a href="checkout.html"><button> Checkout </button></a>
                    </div>

                    <hr />

                    <div className="info_cijena">
                        <table>
                            <tbody>
                                <tr>
                                    <th> Redovna cijena: </th>
                                    <td> {kolicina >= 5 ? (cart.total / (1 - popust)).toFixed(2) : cart.total} EUR</td>
                                </tr>

                                <tr>
                                    <th> Popusti: </th>
                                    <td><b>{kolicina >= 5 ? popust * 100 : 0}% </b> - {kolicina >= 5 ? (cart.total / (1 - popust) *  popust).toFixed(2) : 0} EUR</td>
                                </tr>

                                <tr>
                                    <th> Kod za popust: </th>
                                    <td> <input type="text" name="kod" id="kod" placeholder=" haha ne postoji kod" /> </td>
                                </tr>

                                <tr>
                                    <th> Dodatni troškovi, kamate, carine i reket: </th>
                                    <td> 0,00 EUR </td>
                                </tr>
                            </tbody>
                        </table>

                        <br /><br />

                        <span> Sveukupno: </span>
                        <span> {cart?.total?.toFixed(2)} EUR </span>
                    </div>
                </div>
            </article>
        </div>
    )
}

export { Cart };