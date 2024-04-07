import data from "../Products/ProductData.json";
import { Link } from "react-router-dom";

function Pop_Products()
{
    const new_data = [data[0], data[1], data[2], data[5]];

    return (
        <>
            {new_data.map((data) => (
                    <Link to={"/product/" + data.id}>
                        <section>
                            <h3> {data.brand} <br /> {data.name} </h3>
                            <img src={data.images[0].src} alt={data.name} />
                            <div className="intern_product">
                                <span> {data.price},00 <br /> EUR </span>
                                <div className="vert_line"></div>
                                <span> Klik za <br /> kupnju! </span>
                            </div>
                        </section>
                    </Link>                
                ))
            }
        </>
    )
}

export {Pop_Products};