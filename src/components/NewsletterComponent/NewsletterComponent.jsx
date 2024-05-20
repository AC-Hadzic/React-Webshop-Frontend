import "../../assets/CSS/newsletter.scss";

function NewsletterComponent() {
    return (
        <article className="newsletter">
            <h2> Newsletter </h2>
            <p> Pretplati se na naš newsletter te budi među prvima koji će biti obavješten o našim urnebesnim popustima i pogodnostima!</p>
            <form action="send_newsletter" method="post">
                <div>
                    <label htmlFor="email" id="mail"> Molimo upišite email adresu na kojoj želite primati obavijesti: </label>
                    <input type="email" name="email" id="email" placeholder="  E-mail adresa" required />
                        <br />
                    <input type="checkbox" name="obrada_podataka" id="obrada_podataka" />
                    <label htmlFor="obrada_podataka">Prihvaćam prikupljanje, obradu i zloupotrebu osobnih podataka danih u obrascu bez kojih moj zahtjev ne može biti ispunjen.</label>
                        <br />
                    <input type="checkbox" name="check_newsletter" id="check_newsletter" required />
                    <label htmlFor="check_newsletter"> Prijavi me na newsletter </label>    
                </div>

                <button type="submit"> Prijava! </button> 
            </form>
        </article>        
    )
}

export { NewsletterComponent };