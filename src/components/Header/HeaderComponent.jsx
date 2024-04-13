import "./header.scss";
import "../Specific-Css/theme.scss"
import { Link } from "react-router-dom";
import logo from "/assets/others/logo.png";

function HeaderComponent({web_title, banner_msg, email, mob_show, mob_link})
{
    return (
        <div className="BodyHeader">
            <div>
                <div className="background_header">
                    <div className="banner">
                        <div className="banner_text">
                            <div> 
                                <p className="remove_mq">
                                    {banner_msg}
                                </p>
                                <span className="colorup">~{web_title}~</span>
                            </div>
                        </div>
                    </div>

                    <div className="MainBody">
                        <div className="logo">
                            <div>
                                <Link to={"/"}><img src={logo} alt="Logo TeleProdaje" /></Link>
                            </div>
                        </div>

                        <div className="menus">
                            <div className="prvi_red">
                                <div className="email">
                                    <a href="mailto: telesales@gmail.com"><i className="bi bi-envelope-fill"></i></a>
                                    <a href={`mailto:${email}`}> {email}</a>
                                </div>

                                <div className="tel">
                                    <a href="tel:022 123 321"><i className="bi bi-telephone-fill"></i></a>
                                    <a href={`tel:${mob_link}`}> {mob_show} </a>
                                </div>

                                <div className="social_media">
                                    <div>
                                        <a id="fb" href="https://www.facebook.com/TeleRecenzija/" target="_blank"><i className="bi bi-facebook"></i></a>
                                    </div>

                                    <div>
                                        <a id="in" href="https://www.instagram.com/telerecenzija/" target="_blank"><i className="bi bi-instagram"></i></a>
                                    </div>

                                    <div>
                                        <a id="wp" href="https://www.whatsapp.com/telerecenzija/" target="_blank"><i className="bi bi-whatsapp"></i></a>
                                    </div>

                                    <div>
                                        <a id="tw" href="https://www.twitter.com/telerecenzija/" target="_blank"><i className="bi bi-twitter"></i></a>
                                    </div>
                                </div>

                                <div className="search">     
                                    <input type="search" name="search_bar" id="search_bar" placeholder="  Tražilica" />                
                                </div>

                                <div className="basket">
                                    <Link to={"/cart"}>
                                        <i className="bi bi-cart-fill"></i>
                                    </Link>
                                </div>

                                <div className="login">
                                    <Link to={"/login"}>
                                    <i className="bi bi-box-arrow-in-right"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="drugi_red">
                                <div className="products">
                                    <Link to={"/product"}> Proizvodi </Link>
                                </div>

                                <div className="about">
                                    <Link to={"/about_us"}> O nama </Link>
                                </div>

                                <div className="contact">
                                    <Link to={"/contacts"}> Kontakti </Link>
                                </div>

                                <div className="Blog">
                                    <Link to={"/blog"}> Blog </Link>
                                </div>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {HeaderComponent}