import { iconPack } from "../../assets/Icons/Icons";
import "./Blog.css";
import burning from "../../assets/images/burning_apple.jpg";
import dirty from "../../assets/images/clean_ur_junk.jpg";

function Blog()
{
    return (
        <div className="blog_wrap">
            <article className="blog">
                <section>
                    <h2><img className="icon" src={iconPack.blog} alt="Blog Icon" /> Appleovo rješenje za pregrijavanje iPhonea? </h2>
                    <div>
                        <img src={burning} alt="Burning iPhone" />
                        <p>
                            Appleovi moderni i popularni modeli iPhone 15 Pro i 15 Pro Max tokom prvih tjedana prodaje počeli su se iznimno pregrijavati. Neki su znatno opekli ruke svojih novih korisnika, a neki su ih čak uspjeli i zapaliti. Razlog tome je navodno vrhunska jačina novog procesora te nimalo dovoljno hlađenje za isti. Ubojita kombinacija, Apple. Već u nekom od idućih iOS updejta Apple je osakatio novi procesor, znatno smanjujući frekvenciju te ga je doveo na razini prošlogodišnjeg čipa. S time je Apple uspješno rješio problem kojega su i sami nepotrebno stvorili.
                        </p>                        
                    </div>
                </section>

                <section>
                    <h2><img className="icon" src={iconPack.blog} alt="Blog Icon" />  Zašto ova krpica vrijedi svake uložene lipe: </h2>
                    <div>
                        <img src={dirty} alt="Dude wiping his screen" />
                        <p>
                            Čuvena Appleova krpica za brisanje staklenih zaslona je proizvedena mukotrpnim i dugotrajnim procesom kinetičke reanalizacije organskih vlakana. Proces daje krpici svoju karakterističnu nježnoću i finoću koju svi toliko obožavamo. No, ovaj revolucionarani i nikad do sad viđen proizvodni proces traži i svoju cijenu - 99,00 EUR. Istina, puno novaca za krpicu, no svakako vrijedi novaca. Sa njom možete brisati staklene i plastične zaslone, vašu kreditnu karticu te stražnjicu ukoliko vam kartica nije dostatna za kupnju najnovijeg i najjačeg iPhonea ikad napravljenog. Prije kupovine pažljivo pročitajti listu kompaktibilnosti i uvjerite se da krpica podržava vaš uređaj.
                        </p>                        
                    </div>
                </section>    
                
                <div className="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#" className="active">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">&raquo;</a>
                </div>
            </article>
        </div>
    )
}

export {Blog};