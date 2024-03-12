import { HeaderComponent } from "../Header/HeaderComponent";
import { MainComponent } from "../Main/MainComponent";
import { FooterComponent } from "../Footer/FooterComponent";

function AppWrapperComponent()
{
    return (
        <>
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </>
    )
}

export {AppWrapperComponent};