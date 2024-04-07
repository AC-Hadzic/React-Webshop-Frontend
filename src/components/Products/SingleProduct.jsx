import { Link, Outlet, useParams } from "react-router-dom";
import data from "./ProductData.json";

function SingleProduct()
{
    let { id } = useParams();

    return (
        <>
            <div className={"singleProduct-wrapper"}>
                <h2>Single Product title</h2>
                <p>
                    {data[id].name}
                    <br></br>
                    {data[id].brand}
                    <br/>
                    {data[id].description} 
                    <img src={data[id].images[0].src} alt="" style={{height: "500px", width: "500px"}}/>
                </p>
                <Link to="/about">Goto about page</Link>          
            </div>
        </>
    )
}

export {SingleProduct}