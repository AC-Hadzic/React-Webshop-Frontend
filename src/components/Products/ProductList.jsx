import { Link } from "react-router-dom";

function ProductList()
{
    return (
        <ul>
            <li>Product 1</li>
            <li><Link to={"/product/"} />Product 2</li>
            <li>Product 3</li>
        </ul>
    )
}

export {ProductList};