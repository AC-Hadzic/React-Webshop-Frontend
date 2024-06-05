import "../../assets/CSS/newsletter.scss";
import { NewsLetterCheckbox } from "./NewsLetterCheckbox";

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
                    <NewsLetterCheckbox 
                        dataCollectText={dataCollectText}
                        acceptText={acceptText}
                    />
                </div>

                <button type="submit"> Prijava! </button> 
            </form>
        </article>        
    )
}

export { NewsletterComponent };