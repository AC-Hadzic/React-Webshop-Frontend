import { Banner } from "./Banner";
import { HeaderMain } from "./HeaderMain";
import "./header.css"

function HeaderComponent()
{
    return (
        <body>
            <object>
                <div class="background_header">
                    <Banner />
                    <HeaderMain />
                </div>
            </object>
        </body>
    )
}

export {HeaderComponent};