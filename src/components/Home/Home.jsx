import "./Home.scss";
import burning from "/assets/blog_images/burning_apple.jpg";
import dirty from "/assets/blog_images/clean_ur_junk.jpg";
import { Pop_Products } from "./Pop_Products";
import { Link } from "react-router-dom";
import category from "../Products/ProductCategory.json";

const cats = category.categories

function Home()
{
    const goToFilteredProductList = (categoryFilter) => {
        const params = new URLSearchParams();
    
        if (categoryFilter) {
            params.append('category', categoryFilter);
        }
        window.location.href = `/product?${params.toString()}`;
    };    

    return (
        <div className="main_wrap">
            <div className="main_content">
                <article className="popularne_kategorije">
                    <div className="bling"> Popularne kategorije: </div>

                    {/* Map categories from json and generate link to filtered product list */}
                    <div className="vert_line"></div>
                    {cats.map((data, id) => (
                        <div key={id}>
                            <Link onClick={(e) => goToFilteredProductList(data)}>
                                {data}
                            </Link>
                        </div>
                    ))}
                    <div className="vert_line"></div>
                </article>

                {/* Popularni proizvodi, hard coded u Pop_Products */}
                <article className="popularni_proizvodi">
                    <div className="blinger"> Prodaje se ko ludo!!! </div>
                    <Pop_Products />
                </article>

                {/* TODO: Blogs into JSON */}
                <article className="blog">
                    <section>
                        <h2> Appleovo rješenje za pregrijavanje iPhonea? </h2>
                        <p>
                            <img src={burning} alt="Burning iPhone" />
                            Appleovi moderni i popularni modeli iPhone 15 Pro i 15 Pro Max tokom prvih tjedana prodaje počeli su se iznimno pregrijavati. Neki su znatno opekli ruke svojih novih korisnika, a neki su ih čak uspjeli i zapaliti. Razlog tome je navodno vrhunska jačina novog procesora te nimalo dovoljno hlađenje za isti. Ubojita kombinacija, Apple. Već u nekom od idućih iOS updejta Apple je osakatio novi procesor, znatno smanjujući frekvenciju te ga je doveo na razini prošlogodišnjeg čipa. S time je Apple uspješno rješio problem kojega su i sami nepotrebno stvorili.
                        </p>
                    </section>
                    <section>
                        <h2> Zašto ova krpica vrijedi svake uložene lipe: </h2>
                        <p>
                            <img src={dirty} alt="Dude wiping his screen" />
                            Čuvena Appleova krpica za brisanje staklenih zaslona je proizvedena mukotrpnim i dugotrajnim procesom kinetičke reanalizacije organskih vlakana. Proces daje krpici svoju karakterističnu nježnoću i finoću koju svi toliko obožavamo. No, ovaj revolucionarani i nikad do sad viđen proizvodni proces traži i svoju cijenu - 99,00 EUR. Istina, puno novaca za krpicu, no svakako vrijedi novaca. Sa njom možete brisati staklene i plastične zaslone, vašu kreditnu karticu te stražnjicu ukoliko vam kartica nije dostatna za kupnju najnovijeg i najjačeg iPhonea ikad napravljenog. Prije kupovine pažljivo pročitajti listu kompaktibilnosti i uvjerite se da krpica podržava vaš uređaj.
                        </p>
                    </section>                    
                </article>

                <article className="newsletter">
                    <h2> Newsletter </h2>
                    <p> Pretplati se na naš newsletter te budi među prvima koji će biti obavješten o našim urnebesnim popustima i pogodnostima!</p>
                    <form action="send_newsletter" method="post">
                        <div>
                            <label for="email" id="mail"> Molimo upišite email adresu na kojoj želite primati obavijesti: </label>
                            <input type="email" name="email" id="email" placeholder="  E-mail adresa" required />
                                <br />
                            <input type="checkbox" name="obrada_podataka" id="obrada_podataka" />
                            <label for="obrada_podataka">Prihvaćam prikupljanje, obradu i zloupotrebu osobnih podataka danih u obrascu bez kojih moj zahtjev ne može biti ispunjen.</label>
                                <br />
                            <input type="checkbox" name="check_newsletter" id="check_newsletter" required />
                            <label for="check_newsletter"> Prijavi me na newsletter </label>    
                        </div>

                        <button type="submit"> Prijava! </button> 
                    </form>
                </article>                    
            </div>
        </div>
    )
}

export {Home};