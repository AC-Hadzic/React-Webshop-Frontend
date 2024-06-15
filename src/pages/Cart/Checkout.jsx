import "../../assets/CSS/checkout.scss";
import React, { useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CartPriceComponent } from "../../components/Cart/CartPriceComponent";
import { CartContentRender } from "../../components/Cart/CartContentRender";
import { NewsLetterCheckbox } from "../../components/Newsletter/NewsLetterCheckbox";
import { NewsLetterContext } from "../../context/NewsLetterContext";

function Checkout() {
    const URL = import.meta.env.VITE_API_URL;
    const { data: cart } = useFetch(URL + "cart/1");
    const { dataCollectText, acceptText } = useContext(NewsLetterContext)

    let popust = 0.05;
    let kolicina = 0;

    return (
        <main className="checkout">
            <article className="total_basket">
                <div className="naslov" id="naslov">
                    <i className="bi bi-cart-fill"></i>
                    <h2> Proizvodi u košarici:
                        <span>
                            {
                                cart.cartProducts?.map((product, id) => {
                                    kolicina += Number(product.quantity)
                                })
                            }
                            {kolicina}
                        </span>
                    </h2>
                </div>

                <CartContentRender
                    cart={cart}
                />

                <hr />

                <div className="podaci_placanje">
                    <form action="" method="post" id="pay_form">
                        <h4> Način plaćanja </h4>

                        {/* on click event missing pop_me() */}
                        <input type="radio" name="nacin" id="solo" autoComplete="off" required value="pay_cash" />
                        <label htmlFor="solo"><img src="images/icons/box.svg" alt="Box icon" /> Pouzećem </label>
                        <br />

                        {/* on click event missing pop_me() */}
                        <input type="radio" name="nacin" id="card" autoComplete="off" required value="pay_card" />
                        <label htmlFor="card"><img src="images/icons/credit_card.svg" alt="Credit Card icon" /> Karticom </label>

                        <br /><br />
                        <div className="insert_info">
                            <div className="podaci_kupac">
                                <h3> Podaci o kupcu: </h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th><label htmlFor="ime"> Ime: </label></th>
                                            <td><input type="text" name="ime" id="ime" required /></td>
                                        </tr>

                                        <tr>
                                            <th><label htmlFor="prezime"> Prezime: </label></th>
                                            <td><input type="text" name="prezime" id="prezime" required /></td>
                                        </tr>

                                        <tr>
                                            <th><label htmlFor="adresa"> Adresa: </label></th>
                                            <td><input type="text" name="adresa" id="adresa" required /></td>
                                        </tr>

                                        <tr>
                                            <th><label htmlFor="adresa_dostava"> Adresa dostave: </label></th>
                                            <td><input type="text" name="adresa_dostava" id="adresa_dostava" required /></td>
                                        </tr>

                                        <tr>
                                            <th><label htmlFor="tel"> Telefon:</label></th>
                                            <td> <input type="tel" name="tel" id="tel" required /></td>
                                        </tr>
                                    </tbody>

                                </table>
                                <br />
                            </div>


                            <div id="show_up">
                                <h3> Podaci o kartici: </h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th><label htmlFor="ime_prez"> Ime i prezime: </label></th>
                                            <td><input type="text" name="ime_prez" id="ime_prez" required /></td>
                                        </tr>

                                        <tr>
                                            <th> <label htmlFor="broj"> Broj kartice: </label></th>
                                            <td><input type="text" name="broj" id="broj" required autoComplete="off" /></td>
                                        </tr>

                                        <tr>
                                            <th><label htmlFor="exp"> Datum isteka:</label></th>
                                            <td><input type="text" id="exp" placeholder="02/23" required autoComplete="off" /></td>
                                        </tr>

                                        <tr>
                                            <th><label htmlFor="cvv"> CVV: </label></th>
                                            <td><input type="text" name="cvv" id="cvv" placeholder="144" required autoComplete="off" /></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>

                            <button type="submit"> Dovrši narudžbu </button>
                        </div>

                        <article className="newsletter">
                            <NewsLetterCheckbox
                                dataCollectText={dataCollectText}
                                acceptText={acceptText}
                            />
                        </article>
                    </form>
                </div>

                <hr />

                <div className="cijena" id="cijena">
                    <CartPriceComponent
                        kolicina={kolicina}
                        total={cart.total}
                        popust={popust}
                    />
                </div>
            </article>
        </main>
    )
}

export { Checkout };