import { Outlet } from "react-router-dom"

function Product()
{
    return (
        <>
            <div className={"product-wrapper"}>
                <h2>Product some-id</h2>
                <Outlet />               
            </div>
        </>
    )
}

export {Product}