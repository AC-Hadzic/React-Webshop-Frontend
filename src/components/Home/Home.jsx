import { useEffect } from "react";
import { ProductList } from "../Products/ProductList";

function Home()
{
    useEffect(() =>
    {
        // Request towards webshop API
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => console.log("our data from API: ", json))
    }, []);

    return (
        <div className="home">
            <div className="sidebar">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
            </div>

            <div className="right">
                <h2>Amazing webshop</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit deleniti expedita adipisci mollitia animi! Ipsa porro, minima, quaerat accusamus dolore cumque reprehenderit exercitationem enim, earum possimus deleniti rerum voluptate accusantium!</p>
                <ProductList />
            </div>
        </div>
    )
}

export {Home};