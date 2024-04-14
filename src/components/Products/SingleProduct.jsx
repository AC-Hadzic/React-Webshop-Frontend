import { useParams } from "react-router-dom";
import data from "./ProductData.json";
import "./SingleProduct.scss";

function SingleProduct()
{
    // Get ID from URL
    let { id } = useParams();

    // Get all the img src from array
    function gallery()
    {
        const prod_img = data[id].images;

        return (
            prod_img.map((data, id) => (
                <img key={id} src={data.src} alt="" />
            ))            
        )
    }

    // Get all ratings from array
    function reviews()
    {
        const ratings = data[id].ratings;
        return (
            ratings.map((data, id) => (
                <div key={id}>
                    <div className="user">
                        <h4><i className="bi bi-person-fill"></i>{data.user}</h4>
                    </div>

                    <div className="komentar">
                        <p> {data.text} </p> 
                        <button className="prijava"> Prijavi korisnika </button> 
                    </div>
                </div>
            ))            
        )
    }

    // Convert rating value to img stars
    function stars()
    {
        const rating = data[id].rate;
        const rating_arr = Array.from({ length: 5 })
        return (
            <>
                {rating_arr.map((a, index) => 
                    <span key={index} className = {(index < rating) ? "checked" : "not_checked"}>★</span>    
                )}            
            </>
        )
    }

    return (
        <>
            <div className="product_wrap">
                <h1> {data[id].name} </h1>
                <section className="proizvod_opis">
                    <div className="proizvod_slika">
                        <img src={data[id].images[0].src} alt={data[id].name} />
                    </div>
                    <div className="proizvod_text">
                        <h3> Opis proizvoda: </h3>
                        <p> {data[id].description} </p>

                        <h3> Šifra proizvoda: <span> {data[id].code} </span></h3>
                        <h3>Specifikacije:</h3>

                        {/* Different specs depending on product */}
                        {data[id].specifications ? (
                            <div>
                                <p><span>Zaslon:</span> {data[id].specifications.display} </p>
                                <p><span>Čip:</span> {data[id].specifications.chip} </p>
                                <p><span>Kamere:</span> {data[id].specifications.cameras} </p>
                                <p><span>Baterija:</span> {data[id].specifications.battery} </p>
                            </div>
                        ) : (
                            <div>
                                <p><span>Materijal:</span> {data[id].specs.build} </p>
                                <p><span>Dimenzije:</span> {data[id].specs.dimensions} </p>
                                <p><span>Upotreba:</span> {data[id].specs.usage} </p>
                            </div>
                        )}

                            <br /><br />
                        <div className="buy">
                            <div>
                                <p>Cijena proizvoda: <span>{data[id].price},00 EUR</span></p>
                            </div>
                            <div className="add_to_cart">
                                <button><i className="bi bi-cart-fill"></i> Dodaj u košaricu</button>
                            </div>
                        </div>
                    </div>
                </section>
                    <hr />

                {/* Product image gallery */}
                <h2>Galerija:</h2>
                <section className="proizvod_galerija">
                        {gallery()}
                </section>
                    <hr />
                
                {/* Reviews and score */}
                <h2>Recenzije:</h2>
                <section className="proizvod_recenzije">
                    <div className="rating">
                        <span>Ukupna ocjena: </span> <br />
                        {stars()} 
                        <span className="fa fa-star"></span>  
                        <span>({data[id].rate})</span>   
                    </div>

                    <div className="user_ratings">
                        {reviews()}

                        <button> Komentiraj </button>
                    </div>
                </section>
            </div>
        </>
    )
}

export {SingleProduct}