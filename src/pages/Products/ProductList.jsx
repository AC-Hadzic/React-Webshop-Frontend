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

    // const URL = import.meta.env.VITE_API_URL;
    const URL = "../../assets/JSON/ProductData.json";
    const DATA = useFetch(URL); // Fetch podataka sa URL
    console.log("Data from fetch:", DATA);

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
                        {dataFromChild.map((data, id) => (
                        <div key={id}>
                            <h3> {data.brand} <br /> {data.name} </h3>
                            <Link to={"/product/" + data.id} onClick={() => {window.scrollTo(0, 0)}}>
                                <img src={data.images[0].src} alt={data.name} />
                            </Link>
                            <div>
                                <button><i className="bi bi-cart-fill"></i></button>
                                <br />
                                <span> {data.price.toFixed(2)} EUR </span>
                            </div>
                        </div>
                        ))}
                    </div>

                    {/* <div className="options">
                        {DATA.map((data, proizvodId) => (
                        <div key={proizvodId}>
                            <h3> {data.proizvodjac} <br /> {data.imeProizvoda} </h3>
                            <Link to={"/product/" + data.proizvodId} onClick={() => {window.scrollTo(0, 0)}}>
                                <img src={data.slikas[0]?.link} alt={data.imeProizvoda} />
                               { console.log("image url", data.slikas[0]?.link)}
                            </Link>
                            <div>
                                <button><i className="bi bi-cart-fill"></i></button>
                                <br />
                                <span> {data.cijena} EUR </span>
                            </div>
                        </div>
                        ))}
                    </div> */}
                </section>
            </div>
        </div>
    );
}

export {ProductList};