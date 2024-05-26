import { Link } from "react-router-dom";
import "../../assets/CSS/product-list.scss";
import { useState } from "react";
import { Filter } from "./Filter"; 
import { useFetch } from "../../hooks/useFetch";

// Filters for category and price
function ProductList() {
    const [dataFromChild, setDataFromChild] = useState([]);

    // Receiving data to map from Filter
    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    };

    const URL = import.meta.env.VITE_API_URL;
    const data = useFetch(URL); // Fetch podataka sa URL

    return (
        <div className="prod_list_wrap">
            <div className="prod_list">

                {/* Filter component, sending handler and returning filtered list */}
                <div>
                    <Filter sendDataToParent={handleDataFromChild} />
                </div>

                {/*  Section listing all products by filter */}
                <section className="fit_all">
                    <h2><i className="bi bi-tags-fill"></i> Svi proizvodi: </h2>
                    <div className="options">
                        {data.map((data, productId) => (
                        <div key={productId}>
                            <h3> {data.manufacturer} <br /> {data.productName} </h3>
                            <Link to={"/product/" + data.productId} onClick={() => {window.scrollTo(0, 0)}}>
                                <img src={data.thumbnailLink} alt={data.thumbnailDescription} />
                                {console.log("retrived image", data.thumbnailLink)}
                            </Link>
                            <div>
                                <button><i className="bi bi-cart-fill"></i></button>
                                <br />
                                <span> {data.price} EUR </span>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export {ProductList};