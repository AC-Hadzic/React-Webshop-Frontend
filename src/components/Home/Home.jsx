import { useEffect } from "react";
import { ProductList } from "../Products/ProductList";
import toast from "react-hot-toast";

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
                <ul style={{margin: 0}}>
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
                <button onClick={() => 
                    toast.success('Look at my styles.', 
                        {
                            style: {
                                border: '1px solid #713200',
                                padding: '16px',
                                color: '#713200',
                            },
                            iconTheme: {
                                primary: '#713200',
                                secondary: '#FFFAEE',
                            },
                        }
                )}>Klik me!</button>
                <ProductList />
            </div>
        </div>
    )
}

export {Home};