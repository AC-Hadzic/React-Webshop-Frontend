import { Link } from "react-router-dom";
import "../../assets/CSS/popular-category.scss";

function PopularCategoryComponent({category}) {
    function popularCategory() {
        return (
            category.map((data, id) => (         
                <div key={id}>
                    <Link onClick={() => goToFilteredProductList(data.categoryName)}>
                        <div>{data.categoryName}</div>
                    </Link>
                </div>
            ))
        )
    };

    const goToFilteredProductList = (categoryFilter) => {
        const params = new URLSearchParams();
    
        if (categoryFilter) {
            params.append('category', categoryFilter);
        }
        window.location.href = `/product?${params.toString()}`;
    };   

    return (
        <article className="popularne_kategorije">
            <div className="bling"> Popularne kategorije: </div>

            {/* Map categories from json and generate link to filtered product list */}
            <div className="vert_line"></div>
            {popularCategory()}
            <div className="vert_line"></div>
        </article>
    )
}

export { PopularCategoryComponent };