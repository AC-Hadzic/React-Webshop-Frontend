import "./header.scss";
import "../Specific-Css/theme.scss"
import { Link } from "react-router-dom";
import logo from "/assets/others/logo.png";

function HeaderComponent()
{
    return (
        <div className="BodyHeader">
            <div>
                <div className="background_header">
                    <div className="banner">
                        <div className="banner_text">
                            {/* this div below was <p></p> */}
                            <div> 
                                <p className="remove_mq">
                                    EKSPLOZIVNI POPUSTI DO ČAK 2%!!!
                                </p>
                                <span className="colorup">~TELEPRODAJA~</span>
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
                                    <a href="mailto: teleprodaja@gmail.com"> telesales@gmail.com</a>
                                </div>

                                <div className="tel">
                                    <a href="tel:022 123 321"><i className="bi bi-telephone-fill"></i></a>
                                    <a href="tel:+385022123321">+385 022 123 321</a>
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
                                    <a href="../cart.html" target="_parent"><i className="bi bi-cart-fill"></i>
                                    </a>
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