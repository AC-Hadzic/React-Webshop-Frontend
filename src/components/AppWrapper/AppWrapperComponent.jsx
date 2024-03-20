import { HeaderComponent } from "../Header/HeaderComponent";
import { FooterComponent } from "../Footer/FooterComponent";
import { Outlet } from "react-router-dom";
import "../Specific-Css/global.css";
import { Toaster } from "react-hot-toast";

function AppWrapperComponent()
{
    return (
        <>
            <div className="Body">
                <Toaster />
                
                <div className="Header">
                    <HeaderComponent />    
                </div>

                <div className="Main">
                    <Outlet />
                </div>

                <div className="Footer">
                    <FooterComponent /> 
                </div>
            </div>
        </>
    )
}

export {AppWrapperComponent};