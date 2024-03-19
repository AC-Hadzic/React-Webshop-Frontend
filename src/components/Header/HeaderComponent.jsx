import "./header.css";
import "../Specific-Css/theme.css"
import { iconPack } from "../../assets/Icons/Icons";

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
                                <a href="../index.html" target="_parent"><img src={iconPack.logo} alt="Logo TeleProdaje" /></a>
                            </div>
                        </div>

                        <div className="menus">
                            <div className="prvi_red">
                                <div className="email">
                                    <a href="mailto: telesales@gmail.com"><img className="icon" src={iconPack.email} alt="Email icon" /></a>
                                    <a href="mailto: teleprodaja@gmail.com"> telesales@gmail.com</a>
                                </div>

                                <div className="tel">
                                    <a href="tel:022 123 321"><img className="icon" src={iconPack.telephone} alt="Phone icon" /></a>
                                    <a href="tel:+385022123321">+385 022 123 321</a>
                                </div>

                                <div className="social_media">
                                    
                                    <div>
                                        <a id="fb" href="https://www.facebook.com/TeleRecenzija/" target="_blank"><img className="icon" src={iconPack.facebook} alt="Link to Facebook" /></a>
                                    </div>

                                    <div>
                                        <a id="in" href="https://www.instagram.com/telerecenzija/" target="_blank"><img className="icon" src={iconPack.instagram} alt="Link to Instagram" /></a>
                                    </div>

                                    <div>
                                        <a id="wp" href="https://www.whatsapp.com/telerecenzija/" target="_blank"><img className="icon" src={iconPack.whatsapp} alt="Link to Whatsapp" /></a>
                                    </div>

                                    <div>
                                        <a id="tw" href="https://www.twitter.com/telerecenzija/" target="_blank"><img className="icon" src={iconPack.twitter} alt="Link to Twitter" /></a>
                                    </div>
                                </div>

                                <div className="search">     
                                    <input type="search" name="search_bar" id="search_bar" placeholder="  Tražilica" />                
                                </div>

                                <div className="basket">
                                    <a href="../cart.html" target="_parent"><img className="icon" src={iconPack.basket}alt="Basket icon" /></a>
                                </div>

                                <div className="login">
                                    <a href="../login.html" target="_parent"><img className="icon" src={iconPack.login} alt="Login icon" /></a>
                                </div>
                            </div>

                            <div className="drugi_red">
                                <div className="products">
                                    <a href="../productCategories.html" target="_parent"> Proizvodi </a>
                                </div>

                                <div className="about">
                                    <a href="../about.html" target="_parent"> O nama </a>
                                </div>

                                <div className="contact">
                                    <a href="../contact.html" target="_parent"> Kontakti </a>
                                </div>

                                <div className="Blog">
                                    <a href="../blog.html" target="_parent"> Blog </a>
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