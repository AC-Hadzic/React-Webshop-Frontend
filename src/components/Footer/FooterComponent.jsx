import "./footer.css";
import "../Specific-Css/theme.scss"
import { Link } from "react-router-dom";

function FooterComponent({email, mob_show, adresa, golub, prava1, prava2, maker})
{
    return (
        <div className="footer_wrap">
            <div className="BodyFooter">
                <div className="MainFooter">
                    <div className="prvi_dio">
                        <div className="links">
                            <span><strong>Sadržaj</strong></span>
                            <div className="home">
                                <Link to={"/"} onClick={() => {window.scrollTo(0, 0)}}> Naslovnica</Link>
                            </div>

                            <div className="products">
                                <Link to={"/product"} onClick={() => {window.scrollTo(0, 0)}}> Proizvodi </Link>
                            </div>

                            <div className="about">
                            <Link to={"/about_us"} onClick={() => {window.scrollTo(0, 0)}}> O nama </Link>
                            </div>

                            <div className="contacts">
                            <Link to={"/contacts"} onClick={() => {window.scrollTo(0, 0)}}> Kontakti </Link>
                            </div>     
                        </div>

                        <div className="vert_line one"></div>

                        <div className="contact">
                            <span><strong>Kontaktirajte nas!</strong></span>
                                <br />
                            <span><strong>E-mail:</strong> {email} </span>
                                <br />
                            <span><strong>Tel:</strong> {mob_show} </span>
                                <br />
                            <span><strong>Golub pismonoša:</strong> {golub} </span>
                                <br />
                            <span><strong>Adresa:</strong> {adresa} </span>
                                <br />
                            <Link to={"/contacts"} onClick={() => {window.scrollTo(0, 0)}}>
                                <button> Kontakt forma</button>
                            </Link>
                        </div>

                        <div className="vert_line two"></div>

                        <div className="legals">
                            <div>
                                <a href="">Uvjeti poslovanja</a>
                            </div>

                            <div>
                                <a href="">Uvjeti korištenja</a>
                            </div>

                            <div>
                                <a href="">Pravila o privatnosti</a>
                            </div>

                            <div>
                                <a href="">Pravila o kolačićima</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="map">
                        <p> Lokacija </p>
                        <iframe className="iframe_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6999.21887334161!2d15.884451571492656!3d43.71473987587183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13352585f34010b7%3A0x5cce4b3085802e0!2sObalna%20baterija%202%20ex%20jna!5e1!3m2!1shr!2shr!4v1703952748510!5m2!1shr!2shr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <hr />

                    <div className="rights">
                        <div className="copyright">
                            <span> {prava1} </span> 
                                
                            <span> {prava2} </span>
                        </div>

                        <div className="vert_line three"></div>
                        
                        <div className="maker">
                            <span> {maker} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {FooterComponent};