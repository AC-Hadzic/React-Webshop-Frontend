import { HeaderComponent } from "../Header/HeaderComponent";
import { FooterComponent } from "../Footer/FooterComponent";
import { Outlet } from "react-router-dom";
import "../../assets/CSS/global.scss"
import { Toaster } from "react-hot-toast";

function AppWrapperComponent()
{
    return (
        <>
            <div className="Body">
                <Toaster />
                
                <div className="Header">
                    <HeaderComponent 
                        web_title = "TELEPRODAJA"
                        banner_msg = "EKSPLOZIVNI POPUSTI DO ČAK 2%!!!"
                        email = "telesales@gmail.com"
                        mob_show = "+385 022 123 321" 
                        mob_link = "+385022123321" 
                    />    
                </div>

                <div className="Main">
                    <Outlet />
                </div>

                <div className="Footer">
                    <FooterComponent 
                        email = "telesales@gmail.com"
                        mob_show = "+385 022 123 321" 
                        adresa = "ul. Brokulice Hrabroga 2, Šibenik"
                        golub = "Oliver Golubović"
                        prava1 = "Autorska prava © 2024 TeleProdaja."
                        prava2 = "No rights reserved."
                        maker = "Izrada web stranica – Vaša tvrtka"
                    /> 
                </div>
            </div>
        </>
    )
}

export {AppWrapperComponent};