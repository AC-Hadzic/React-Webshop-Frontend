import { MenuDrugiRed } from "./MenuDrugiRed";
import { MenuPrviRed } from "./MenuPrviRed";
import "./header.css"

function HeaderMenu()
{
    return (
        <div class="menus">
            <MenuPrviRed />
            <MenuDrugiRed />
        </div>       
    )
}

export {HeaderMenu};