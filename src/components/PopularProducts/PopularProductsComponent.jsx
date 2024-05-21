import { Link } from "react-router-dom";
import "../../assets/CSS/popular-products.scss"

function PopularProductsComponent({popularProductsList})
{
    return (
        <article className="popularni_proizvodi">
            <div className="blinger"> Prodaje se ko ludo!!! </div>
            {popularProductsList?.map((data, id) => (
                <div key={id}>
                    <Link to={"/product/" + data.id} onClick={() => {window.scrollTo(0, 0)}}>
                            <section className="pop_container">
                                <h3> {data.brand} <br /> {data.name} </h3>
                                <img src={data.images[0].src} alt={data.name} />
                                <div className="intern_product">
                                    <span> {data.price.toFixed(2)} <br /> EUR </span>
                                    <div className="vert_line"></div>
                                    <span> Klik za <br /> kupnju! </span>
                                </div>
                            </section>                            
                    </Link>                    
                </div>
                ))
            }
        </article>
    )
}

export {PopularProductsComponent};