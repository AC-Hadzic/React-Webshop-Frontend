import { Link } from "react-router-dom";
import data from "../Products/ProductData.json";
import "./ProductList.scss"
import { ProductFilter } from "./ProductFIlter";

function ProductList()
{
    return (
        <div className="prod_list_wrap">
            <div className="prod_list">
                <div id="show_hide">
                    <button> Prikaži/Zatvori filtere </button>
                </div>
                
                <section id="aside">
                    <ProductFilter />
                </section>

                <section className="fit_all">
                    <h2><i className="bi bi-tags-fill"></i> Svi proizvodi: </h2>
                    <div  className="options">
                        {data.map((data, id) => (
                            
                                <div key={id}>
                                    <h3> {data.brand} <br /> {data.name} </h3>
                                    <Link to={"/product/" + data.id} onClick={() => {window.scrollTo(0, 0)}}>
                                        <img src={data.images[0].src} alt={data.name} />
                                    </Link>
                                    <div>
                                        <button><i className="bi bi-cart-fill"></i></button>
                                        <br />
                                        <span> {data.price},00 EUR </span>                            
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export {ProductList};