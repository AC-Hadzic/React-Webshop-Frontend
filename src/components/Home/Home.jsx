import "./Home.css";
import burning from "../../assets/images/burning_apple.jpg";
import dirty from "../../assets/images/clean_ur_junk.jpg"

function Home()
{
    return (
        <div className="main_wrap">
            <div className="main_content">
                <article className="popularne_kategorije">
                    <div className="bling"> Popularne kategorije: </div>
                    <div><a href="iOS_products.html">iOS uređaji</a></div>
                        <div className="vert_line"></div>
                    <div><a href="iOS_products.html">Apple</a></div>
                        <div className="vert_line"></div>
                    <div><a href="android_products.html">Android uređaji</a></div>
                        <div className="vert_line"></div>
                    <div><a href="samsung_products.html">Samsung</a></div>
                        <div className="vert_line"></div>
                    <div><a href="accessory_products.html">Dodatna oprema</a></div>
                </article>

                <article className="popularni_proizvodi">
                    <div className="blinger"> Prodaje se ko ludo!!! </div>
                    <a href="products/iPhone15PM.html">
                        <section>
                            <h3> Apple iPhone 15 <br /> Pro Max </h3>
                            <img src="images/proizvodi/ip15pm.jpg" alt="iPhone 15 Pro Max" />
                            <div className="intern_product">
                                <span> 1.449,00 <br /> EUR </span>
                                <div className="vert_line"></div>
                                <span> Klik za <br /> kupnju! </span>
                            </div>
                        </section>
                    </a>
                    <a href="products/iPhone15P.html">
                        <section>
                            <h3> Apple iPhone 15 <br /> Pro </h3>
                            <img src="images/proizvodi/ip15p.jpg" alt="iPhone 15 Pro" />
                            <div className="intern_product">
                                <span> 1.199,00 <br /> EUR </span>
                                <div className="vert_line"></div>
                                <span> Klik za <br /> kupnju! </span>
                            </div>
                        </section>
                    </a>
                    <a href="products/s24U.html">
                        <section>
                            <h3> Samsung Galaxy S24 <br /> Ultra</h3>
                            <img src="images/proizvodi/s24u.jpg" alt="Galaxy S24 Ultra" />
                            <div className="intern_product">
                                <span> 1.499,00 <br /> EUR </span>
                                <div className="vert_line"></div>
                                <span> Klik za <br /> kupnju! </span>
                            </div>
                        </section>
                    </a>
                    <a href="products/cloth.html">
                        <section>
                            <h3> Apple Cloth </h3>
                            <img src="images/proizvodi/cloth.jpg" alt="Apple Cloth" />
                            <div className="intern_product">
                                <span> 29,00 <br /> EUR </span>
                                <div className="vert_line"></div>
                                <span> Klik za <br /> kupnju! </span>
                            </div>
                        </section>
                    </a>
                </article>

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