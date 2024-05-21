import "../../assets/CSS/newsletter.scss";

function NewsletterComponent({ title, text, emailRequestText, dataCollectText, acceptText }) {
    return (
        <article className="newsletter">
            <h2> {title} </h2>
            <p> {text} </p>
            <form action="send_newsletter" method="post">
                <div>
                    <label htmlFor="email" id="mail"> 
                        {emailRequestText} 
                    </label>
                    <input type="email" name="email" id="email" placeholder="  E-mail adresa" required />
                        <br />
                    <input type="checkbox" name="obrada_podataka" id="obrada_podataka" />
                    <label htmlFor="obrada_podataka">
                        {dataCollectText}
                    </label>
                        <br />
                    <input type="checkbox" name="check_newsletter" id="check_newsletter" required />
                    <label htmlFor="check_newsletter"> 
                        {acceptText} 
                    </label>    
                </div>

                <button type="submit"> Prijava! </button> 
            </form>
        </article>        
    )
}

export { NewsletterComponent };