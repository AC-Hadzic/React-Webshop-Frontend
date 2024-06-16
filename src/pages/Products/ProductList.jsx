import { Link } from "react-router-dom";
import "../../assets/CSS/product-list.scss";
import { useState } from "react";
import { Filter } from "./Filter"; 
import { useFetch } from "../../hooks/useFetch";
import { useUpdateProduct } from "../../hooks/useUpdateProduct";
import toast from "react-hot-toast";

// Filters for category and price
function ProductList() {
    const [dataFromChild, setDataFromChild] = useState([]);
    const { updateProduct } = useUpdateProduct();
    const cartID = 1;

    // Receiving data to map from Filter
    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    };

    const URL = import.meta.env.VITE_API_URL;
    const { data } = useFetch(URL + "/products"); // Fetch podataka sa URL

    const handleUpdateProduct = (productId) => {
        updateProduct(URL, cartID, productId, "add");
        toast.success('Product added to cart!', {style: {borderRadius: "25px"}})
    };

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
                            <h3> {data.manufacturer} <br /> {data.productName} </h3>
                            <Link to={"/product/" + data.productId} onClick={() => {window.scrollTo(0, 0)}}>
                                <img src={data.thumbnailLink} alt={data.thumbnailDescription} />
                            </Link>
                            <div>
                                <button onClick={() => {handleUpdateProduct(data.productId)}}><i className="bi bi-cart-fill"></i></button>
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