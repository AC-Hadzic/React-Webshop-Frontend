import "./Contact.scss";
import broccoli from "/assets/images/broccoli_office.jpg";

function Contact({email, mob_show, golub})
{
    return (
        <div className="contacts_wrap">
            <h2><i className="bi bi-chat-quote-fill"></i> Kontaktiraj TeleProdaju </h2>

            <article className="contacts">
                <section className="contact_form">
                    <form action="hvala-vam.html" target="_parent" method="get">
                    <label for="name_surname"> Ime i prezime: </label><br />
                    <input type="text" name="name_surname" id="name_surname" placeholder="  Gavrilo Paperclip" required />
                        <br /><br />

                    <label for="email"> Email: </label><br />
                    <input type="email" name="email" id="email" placeholder="  gav.paperclip@gmail.com" size="30" required />
                        <br /><br />

                    <label for="poruka"> Poruka: </label><br />
                    <textarea name="poruka" id="poruka" cols="32" rows="10" placeholder="  Vaša poruka ovdje." required></textarea>
                        <br /><br />

                        <article className="newsletter">
                            <div>
                                <input type="checkbox" name="obrada_podataka" id="obrada_podataka" required />
                                <label for="obrada_podataka">Prihvaćam prikupljanje, obradu i zloupotrebu osobnih podataka danih u obrascu bez kojih moj zahtjev ne može biti ispunjen.</label>
                                    <br /><br />
                                <input type="checkbox" name="check_newsletter" id="check_newsletter" />
                                <label for="check_newsletter">Prijavi me na newsletter</label>    
                            </div>
                        </article>
                            <br /> 

                        <div className="form_controls">
                            <button type="submit"> Pošalji poruku </button>
                                <br /><br />

                            <button type="reset"> Izbriši podatke</button>
                        </div>
                    </form>
                </section>

                <section className="contact_infos">
                    <div className="image">
                        <figure>
                            <img src={broccoli} alt="TeleProdaja office building" />  
                            <figcaption> Novi uredi TeleRecenzije i TeleProdaje</figcaption>  
                        </figure>
                    </div>

                    <div className="text_below_img">
                        <p>
                            Slobodno nas kontaktirajte putem zadane forme. Za naprednije korisnike ispod su navedene opcije za kontaktiranje TeleProdaje:   
                        </p>

                        <table> 
                            <tbody>
                                <tr>
                                    <td><strong> Telefon: </strong></td>
                                    <td>{mob_show}</td>
                                </tr>

                                <tr>
                                    <td><strong> Email: </strong></td>
                                    <td>{email}</td>
                                </tr>

                                <tr>
                                    <td><strong> Golub pismonoša: </strong></td>
                                    <td>{golub}</td>
                                </tr>                                
                            </tbody>
                        </table> 
                    </div>
                        <br />

                    <div className="social_media">
                        <hr />

                        <p>
                            Za zaostale korisnike također smo dostupni i na društvenim mrežama:   
                        </p>
                        
                        <div className="media_links">
                            <div>
                                <a id="fb" href="https://www.facebook.com/TeleRecenzija/" target="_blank"><i className="bi bi-facebook"></i> TeleRecenzije </a>
                            </div>
                            <div>
                                <a id="in" href="https://www.instagram.com/telerecenzija/" target="_blank"><i className="bi bi-instagram"></i> TeleRecenzije </a>
                            </div>
                            <div>
                                <a id="wp" href="https://www.whatsapp.com/telerecenzija/" target="_blank"><i className="bi bi-whatsapp"></i> TeleRecenzije</a>
                            </div>
                        
                            <div>
                                <a id="tw" href="https://www.twitter.com/telerecenzija/" target="_blank"><i className="bi bi-twitter"></i> TeleRecenzije </a>
                            </div>
                        </div>

                        <p>
                            Napomena: Na poruke odgovaramo unutar 48h. Ukoliko ponovno pošaljete poruku prije isteka 48h <span>(čitaj: spam)</span>, TeleRecenzija će vas blokirati do daljnjega. U slučaju prijetnji TeleRecenzija će vas prijaviti nadležnoj policijskoj upravi.
                        </p>
                    </div>                    
                </section>
            </article>
        </div>
    )
}

export {Contact};