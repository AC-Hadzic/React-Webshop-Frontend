import { Link, Outlet } from "react-router-dom"

function SingleProduct()
{
    return (
        <>
            <div className={"singleProduct-wrapper"}>
                <h2>Single Product title</h2>
                <Link to="/about">Goto about page</Link>          
            </div>
        </>
    )
}

export {SingleProduct}