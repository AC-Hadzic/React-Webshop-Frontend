import { Link } from "react-router-dom";
import "../../assets/CSS/cart.scss";
import data from "../../assets/JSON/ProductData.json";

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

function Cart()
{   
    let popust = 0.1;
    let max_quantity = 0;
    let popust_amount = 0;
    let total_price = 0;
    let regular_price = 0;

    function final_price()
    {
        cart_products.map((data, id) => (
            max_quantity += data.quantity,  
            total_price += data.product.price * data.quantity,
            regular_price = total_price
        ))

        if(max_quantity >= 5) {
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
                    <h2> Proizvodi u košarici: <span>{max_quantity}</span></h2>
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
                            {cart_products.map((data, id) =>(
                                <tr className="podaci"  key={id}>
                                    <td>
                                        <Link to={"/product/" + data.product.id} onClick={() => {window.scrollTo(0, 0)}}>
                                            <section>
                                                <div>
                                                    <img className="cart_img" src={data.product.images[0].src} alt={data.product.name}/>
                                                </div>
                                                <div className="internal_data">
                                                    <h3> {data.product.brand} {data.product.name} </h3>
                                                    <span><br /> {data.product.description} <br /><br /></span>
                                                    <span>Šifra artikla: {data.product.code}</span>    
                                                </div>
                                            </section>
                                        </Link>
                                    </td>

                                    <td> {data.product.price.toFixed(2)} EUR </td>
                                    <td> {data.quantity} </td>
                                    <td> {(data.quantity * data.product.price).toFixed(2)} EUR </td>                                
                                </tr>
                            ))}                            
                        </tbody>
                    </table>
                </div>

                <hr />

                <div className="cijena" id="cijena">
                    <div className="buttons">
                        <Link to={"/product"} onClick={() => {window.scrollTo(0, 0)}}>
                            <button> Vrati se u kupnju </button>
                        </Link>
                        {/* onclick to the refresh button */}
                        <button> Ažuriraj košaricu </button> 
                        {/* onclick to delete all */}
                        <button id="delete_all"> Poništi sve </button>
                        <a href="checkout.html"><button> Checkout </button></a>
                    </div>

                    <hr />

                    <div className="info_cijena">
                        <table>
                            <tbody>
                                <tr>
                                    <th> Redovna cijena: </th>
                                    <td> {regular_price} EUR</td>
                                </tr>

                                <tr>
                                    <th> Popusti: </th>
                                    <td><b>{popust * 100}%</b> - {(regular_price * popust).toFixed(2)} EUR</td>
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
                        <span> {total_price.toFixed(2)} EUR </span>   
                    </div>
                </div>
            </article>
        </div>
    )
}

export {Cart};