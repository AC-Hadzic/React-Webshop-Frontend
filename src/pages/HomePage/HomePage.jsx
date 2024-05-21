import "../../assets/CSS/home-page.scss";
import { PopularProductsComponent } from "../../components/PopularProducts/PopularProductsComponent";
import category from "../../assets/JSON/ProductCategory.json";
import data from "../../assets/JSON/ProductData.json";
import { NewsletterComponent } from "../../components/Newsletter/NewsletterComponent";
import { PopularCategoryComponent } from "../../components/PopularCategory/PopularCategoryComponent";
import { BlogShortComponent } from "../../components/Blog/BlogShortComponent";
import burning from "../../../public/assets/blog_images/burning_apple.jpg";
import dirty from "../../../public/assets/blog_images/clean_ur_junk.jpg";

function HomePage()
{
    const cats = category.categories;
    const POPULAR_PRODUCTS = [data[0], data[1], data[2], data[5]];

    return (
        <div className="main_wrap">
            <div className="main_content">
                <PopularCategoryComponent 
                    category={cats}
                />

                {/* Popularni proizvodi, lista proizvoda u HomePage */}
                <PopularProductsComponent 
                    popularProductsList = {POPULAR_PRODUCTS}
                />

                {/* TODO: Blogs into JSON */}
                <BlogShortComponent 
                title1="Appleovo rješenje za pregrijavanje iPhonea?"
                image1={burning}
                imageAlt1="Burning iPhone"
                text1="Appleovi moderni i popularni modeli iPhone 15 Pro i 15 Pro Max tokom prvih tjedana prodaje počeli su se iznimno pregrijavati. Neki su znatno opekli ruke svojih novih korisnika, a neki su ih čak uspjeli i zapaliti. Razlog tome je navodno vrhunska jačina novog procesora te nimalo dovoljno hlađenje za isti. Ubojita kombinacija, Apple. Već u nekom od idućih iOS updejta Apple je osakatio novi procesor, znatno smanjujući frekvenciju te ga je doveo na razini prošlogodišnjeg čipa. S time je Apple uspješno rješio problem kojega su i sami nepotrebno stvorili."
                title2="Zašto ova krpica vrijedi svake uložene lipe:"
                image2={dirty}
                imageAlt2="Dude wiping his screen"
                text2="Čuvena Appleova krpica za brisanje staklenih zaslona je proizvedena mukotrpnim i dugotrajnim procesom kinetičke reanalizacije organskih vlakana. Proces daje krpici svoju karakterističnu nježnoću i finoću koju svi toliko obožavamo. No, ovaj revolucionarani i nikad do sad viđen proizvodni proces traži i svoju cijenu - 99,00 EUR. Istina, puno novaca za krpicu, no svakako vrijedi novaca. Sa njom možete brisati staklene i plastične zaslone, vašu kreditnu karticu te stražnjicu ukoliko vam kartica nije dostatna za kupnju najnovijeg i najjačeg iPhonea ikad napravljenog. Prije kupovine pažljivo pročitajti listu kompaktibilnosti i uvjerite se da krpica podržava vaš uređaj."
                />
                
                {/* Newsletter Komponenta */}
                <NewsletterComponent 
                    title="Newsletter"
                    text="Pretplati se na naš newsletter te budi među prvima koji će biti obavješten o našim urnebesnim popustima i pogodnostima!"
                    emailRequestText="Molimo upišite email adresu na kojoj želite primati obavijesti:"
                    dataCollectText="Prihvaćam prikupljanje, obradu i zloupotrebu osobnih podataka danih u obrascu bez kojih moj zahtjev ne može biti ispunjen."
                    acceptText="Prijavi me na newsletter"
                />
            </div>
        </div>
    )
}

export {HomePage};