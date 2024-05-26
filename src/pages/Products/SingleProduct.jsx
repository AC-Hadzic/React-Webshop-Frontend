import { useParams } from "react-router-dom";
import "../../assets/CSS/single-product.scss";
import { useFetch } from "../../hooks/useFetch";

function SingleProduct()
{
    // Get ID from URL
    let { id } = useParams();
    const URL = import.meta.env.VITE_API_URL + "/" + id;
    const data = useFetch(URL); // Fetch podataka sa URL

    // Get all the img src from array
    function gallery()
    {
        return (
            (data.slikas) ?
            (data.slikas.map((data, id) => (
                <img key={id} src={data.link} alt={data.opis} />
                
            ))) :
            (<p> Loading... </p>)
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
                <h1>{data.proizvodjac} {data.imeProizvoda} </h1>
                <section className="proizvod_opis">
                    <div className="proizvod_slika">
                        {data.slikas ? (<img src={data.slikas[0].link} alt={data.slikas[0].opis} />) : <p>Loading</p>}
                        
                    </div>
                    <div className="proizvod_text">
                        <h3> Opis proizvoda: </h3>
                        <p> {data.opis} </p>

                        {/* <h3> Šifra proizvoda: <span> {data[id].code} </span></h3> */}
                        <h3>Specifikacije:</h3>

                        {/* Different specs depending on product */}
                        {data.spec4 !== null ? (
                            <div>
                                <p><span>Zaslon:</span> {data.spec1} </p>
                                <p><span>Čip:</span> {data.spec2} </p>
                                <p><span>Kamere:</span> {data.spec3} </p>
                                <p><span>Baterija:</span> {data.spec4} </p>
                            </div>
                        ) : (
                            <div>
                                <p><span>Materijal:</span> {data.spec1} </p>
                                <p><span>Dimenzije:</span> {data.spec2} </p>
                                <p><span>Upotreba:</span> {data.spec3} </p>
                            </div>
                        )}

                            <br /><br />
                        <div className="buy">
                            <div>
                                <p>Cijena proizvoda: <span>{data.cijena},00 EUR</span></p>
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
                        {/* {stars()}  */}
                        <span className="fa fa-star"></span>  
                        {/* <span>({data[id].rate})</span>    */}
                    </div>

                    <div className="user_ratings">
                        {/* {reviews()} */}

                        <button> Komentiraj </button>
                    </div>
                </section>
            </div>
        </>
    )
}

export {SingleProduct}