import "../../assets/CSS/home-page.scss";
import burning from "../../../public/assets/blog_images/burning_apple.jpg";
import dirty from "../../../public/assets/blog_images/clean_ur_junk.jpg";
import { PopularProductsComponent } from "../../components/PopularProducts/PopularProductsComponent";
import { Link } from "react-router-dom";
import category from "../../assets/JSON/ProductCategory.json";
import data from "../../assets/JSON/ProductData.json";
import { NewsletterComponent } from "../../components/NewsletterComponent/NewsletterComponent";

const cats = category.categories
const POPULAR_PRODUCTS = [data[0], data[1], data[2], data[5]];

function HomePage()
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

                {/* Popularni proizvodi, lista proizvoda u HomePage */}
                <PopularProductsComponent 
                    popularProductsList = {POPULAR_PRODUCTS}
                />

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
                
                {/* Newsletter Komponenta */}
                <NewsletterComponent />
            </div>
        </div>
    )
}

export {HomePage};