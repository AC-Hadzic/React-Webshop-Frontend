import React from "react";
import "../../assets/CSS/cart.scss";
import { useFetch } from "../../hooks/useFetch";
import { useUpdateProduct } from "../../hooks/useUpdateProduct";
import { useRemoveProduct } from "../../hooks/useRemoveProduct";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { EmptyCartComponent } from "../../components/Cart/EmptyCartComponent";
import { CartContentRender } from "../../components/Cart/CartContentRender";
import { CartButtonCluster } from "../../components/Cart/CartButtonCluster";
import { CartPriceComponent } from "../../components/Cart/CartPriceComponent";


function Cart() {
    const URL = import.meta.env.VITE_API_URL;
    const { data: cart, refetch } = useFetch(URL + "cart/1");
    const { updateProduct } = useUpdateProduct();
    const { removeProduct } = useRemoveProduct();

    let popust = 0.05;
    let kolicina = 0;
    const cartID = 1;

    const handleUpdateProduct = async (productId) => {
        await updateProduct(URL, cartID, productId, "add");
        toast.success('Product quantity updated!', { style: { borderRadius: "25px" } })
        refetch();
    };

    const handleRemoveProduct = async (productId, quantity) => {
        if (quantity <= 1) {
            await handleDeleteProduct(productId);
        } else {
            await updateProduct(URL, cartID, productId, "remove");
            toast.success('Product quantity updated!', { style: { borderRadius: "25px" } })
        }
        refetch();
    };

    const handleDeleteProduct = async (productId) => {
        await removeProduct(URL, cartID, productId, "single");
        toast.success('Product removed from cart!', { style: { borderRadius: "25px" } });
    };

    const handleClearCart = async () => {
        await removeProduct(URL, cartID);
        toast.success('Product removed from cart!', { style: { borderRadius: "25px" } });
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


    return (
        <div className="cart_wrap">
            <article className="total_basket">

                <div className="naslov" id="naslov">
                    <i className="bi bi-cart-fill"></i>
                    <h2> Proizvodi u košarici: <span>
                        {

                            cart.cartProducts?.map((product, id) => { kolicina += Number(product.quantity) }
                            )

                        }

                        {kolicina}
                    </span></h2>
                </div>

                {(kolicina == 0) ?
                    <EmptyCartComponent /> :
                    <CartContentRender
                        cart={cart}
                        handleUpdateProduct={handleUpdateProduct}
                        handleRemoveProduct={handleRemoveProduct}
                    />
                }

                <hr />

                <div className="cijena" id="cijena">
                    <CartButtonCluster
                        handleClearCart={handleClearCart}
                    />

                    <hr />

                    <CartPriceComponent
                        kolicina={kolicina}
                        total={cart.total}
                        popust={popust}
                    />
                </div>
            </article>
        </div>
    )
}

export { Cart };