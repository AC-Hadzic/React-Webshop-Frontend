import "./header.css"

function MenuPrviRed ()
{
    return (
        <div class="prvi_red">
            <div class="email">
                <a href="mailto: telesales@gmail.com"><img class="icon" src="../images/icons/email.svg" alt="Email icon"/></a>
                <a href="mailto: teleprodaja@gmail.com"> telesales@gmail.com</a>
            </div>

            <div class="tel">
                <a href="tel:022 123 321"><img class="icon" src="../images/icons/telephone.svg" alt="Phone icon"/></a>
                <a href="tel:+385022123321">+385 022 123 321</a>
            </div>

            <div class="social_media">
                <div>
                    <a id="fb" href="https://www.facebook.com/TeleRecenzija/" target="_blank"><img class="icon" src="../images/icons/facebook.svg" alt="Link to Facebook"/></a>
                </div>

                <div>
                    <a id="in" href="https://www.instagram.com/telerecenzija/" target="_blank"><img class="icon" src="../images/icons/instagram.svg" alt="Link to Instagram"/></a>
                </div>

                <div>
                    <a id="wp" href="https://www.whatsapp.com/telerecenzija/" target="_blank"><img class="icon" src="../images/icons/whatsapp.svg" alt="Link to Whatsapp"/></a>
                </div>

                <div>
                    <a id="tw" href="https://www.twitter.com/telerecenzija/" target="_blank"><img class="icon" src="../images/icons/twitter.svg" alt="Link to Twitter"/></a>
                </div>
            </div>

            <div class="search">     
                <input type="search" name="search_bar" id="search_bar" placeholder="  Tražilica"/>                
            </div>

            <div class="basket">
                <a href="../cart.html" target="_parent"><img class="icon" src="../images/icons/cart.svg" alt="Basket icon"/></a>
            </div>

            <div class="login">
                <a href="../login.html" target="_parent"><img class="icon" src="../images/icons/login.svg" alt="Login icon"/></a>
            </div>
        </div>
    )
}

export {MenuPrviRed};