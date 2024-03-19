import { HeaderComponent } from "../Header/HeaderComponent";
import { FooterComponent } from "../Footer/FooterComponent";
import { Outlet } from "react-router-dom";
import "../Specific-Css/global.css";

function AppWrapperComponent()
{
    return (
        <>
            <div className="Body">
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