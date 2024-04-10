import { Link } from "react-router-dom";
import data from "../Products/ProductData.json";
import category from "./ProductCategory.json"
import "./ProductList.scss";
import { useState, useEffect } from "react";

const cats = category.categories;

// Filters for category and price
function ProductList() {
    const [asideVisible, setAsideVisible] = useState(true);
    let [categoryFilters, setcategoryFilters] = useState(new Set());
    let [priceFilter, setPriceFilter] = useState('');

    function updateFilters(checked, filter, type) {
        if (type === 'category') 
        {
            if (checked)
                setcategoryFilters(prev => new Set(prev).add(filter));
            if (!checked)
                setcategoryFilters(prev => {
                    const next = new Set(prev);
                    next.delete(filter);
                    return next;
                });
        } 
        else if (type === 'price') 
        {
            if (checked)
                setPriceFilter(filter);
            if (!checked)
                setPriceFilter('');
        }
    }

    const filteredProducts = categoryFilters.size === 0 
        ? data.filter(p => p.price <= parseInt(priceFilter) || !priceFilter)
        : data.filter(p => categoryFilters.has(p.type) && (p.price <= parseInt(priceFilter) || !priceFilter));

        
    // Toggle filter list on/off on small screen
    const toggleAside = () => {
        setAsideVisible(prevState => !prevState);
    };

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 1080) {
            setAsideVisible(true);
        }};

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div className="prod_list_wrap">
            <div className="prod_list">
                <div id="show_hide">
                    <button onClick={toggleAside}> Prikaži/Zatvori filtere </button>
                </div>

                <section id="aside" style={{ display: asideVisible ? 'block' : 'none' }}>
                    <div className="prodFilter_wrap">
                        <section className="asideProd">
                            <h3> Filteri: </h3>
                            <h4>Tip proizvoda:</h4>

                            {/* Category filters */}
                            {cats.map((elm, index) => (
                            <div className="form-check ms-2" key={index}>
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" 
                                    onChange={(e) => updateFilters(e.target.checked, elm, 'category')}/>
                                    {elm}
                                </label>
                            </div>
                            ))}
                            
                            <hr />

                            {/* Price Filters */}
                            <div className="cijena_proizvoda">
                                <h4>Cijene proizvoda:</h4>
                                <div className="form-check ms-2">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" 
                                        onChange={(e) => updateFilters(e.target.checked, '100', 'price')}/>
                                        Do 100,00 EUR
                                    </label>
                                </div>

                                <div className="form-check ms-2">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" 
                                        onChange={(e) => updateFilters(e.target.checked, '1000', 'price')}/>
                                        Do 1000,00 EUR
                                    </label>
                                </div>

                                <div className="form-check ms-2">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox"
                                        onChange={(e) => updateFilters(e.target.checked, '2000', 'price')}/>
                                        Do 2000,00 EUR
                                    </label>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                {/*  Section listing all products  */}
                <section className="fit_all">
                    <h2><i className="bi bi-tags-fill"></i> Svi proizvodi: </h2>
                    <div className="options">
                        {filteredProducts.map((data, id) => (
                        <div key={id}>
                            <h3> {data.brand} <br /> {data.name} </h3>
                            <Link to={"/product/" + data.id} onClick={() => {window.scrollTo(0, 0)}}>
                                <img src={data.images[0].src} alt={data.name} />
                            </Link>
                            <div>
                                <button><i className="bi bi-cart-fill"></i></button>
                                <br />
                                <span> {data.price},00 EUR </span>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export {ProductList};