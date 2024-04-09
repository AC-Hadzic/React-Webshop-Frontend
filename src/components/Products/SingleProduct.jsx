import { Link, Outlet, useParams } from "react-router-dom";
import data from "./ProductData.json";
import "./SingleProduct.scss";

function SingleProduct()
{
    let { id } = useParams();

    function gallery()
    {
        const prod_img = data[id].images;

        return (
            prod_img.map((data, id) => (
                    <img key={id} src={data.src} alt="" />
            ))            
        )
    }

    function reviews()
    {
        const ratings = data[id].ratings;

        return (
            ratings.map((data, id) => (
                <div key={id}>
                    <div className="user">
                        <h4><i class="bi bi-person-fill"></i>{data.user}</h4>
                    </div>

                    <div className="komentar">
                        <p> {data.text} </p> 
                        <button className="prijava"> Prijavi korisnika </button> 
                    </div>
                </div>
            ))            
        )
    }

    function stars()
    {
        const total_rate = 5;
        const rating = data[id].rate; 
        let left_rate = total_rate - rating;  
        const rating_arr = Array.from({ length: rating });
        const rating_left_arr = Array.from({ length: left_rate });

        return (
            <>
                {rating_arr.map((_, id) => (
                    <span key={id} className="checked">★</span>  
                ))}   

                {rating_left_arr.map((_, id) => (
                    <span key={id} className="not_checked">★</span>  
                ))}               
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
                        <p><span>Zaslon:</span> {data[id].specifications.display} </p>
                        <p><span>Čip:</span> {data[id].specifications.chip} </p>
                        <p><span>Kamere:</span> {data[id].specifications.cameras} </p>
                        <p><span>Baterija:</span> {data[id].specifications.battery} </p>
                            <br /><br />
                        <div className="buy">
                            <div>
                                <p>Cijena uređaja: <span>{data[id].price},00 EUR</span></p>
                            </div>
                            <div className="add_to_cart">
                                <button><i className="bi bi-cart-fill"></i> Dodaj u košaricu</button>
                            </div>
                        </div>
                    </div>
                </section>
                    <hr />

                <h2>Galerija:</h2>
                <section className="proizvod_galerija">
                        {gallery()}
                </section>
                    <hr />

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