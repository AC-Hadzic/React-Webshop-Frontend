import "./header.css"
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";

function HeaderMain()
{
    return (
        <div class="main">
            <HeaderLogo />
            <HeaderMenu />
        </div>
    )
}

export {HeaderMain};