import { Link } from "react-router-dom";
import data from "./ProductData.json";
import category from "./ProductCategory.json"
import "./ProductList.scss";
import { useState, useEffect } from "react";
import { Filter } from "./Filter";

const cats = category.categories;

// Filters for category and price
function ProductList() {
    const [asideVisible, setAsideVisible] = useState(true);
    const [dataFromChild, setDataFromChild] = useState(null);
    let [categoryFilters, setcategoryFilters] = useState(new Set());
    let [priceFilter, setPriceFilter] = useState('');

    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    };

    // Update URL based on category and price filter
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const categories = urlParams.getAll('category');
        const price = urlParams.get('price');
    
        setcategoryFilters(new Set(categories));
        setPriceFilter(price || '');
    }, []);

    function updateFilters(checked, filter, type) {
        if (type === 'category') {
            if (checked) {
                setcategoryFilters(prev => {
                    const next = new Set(prev);
                    next.add(filter);
                    updateURL(next, priceFilter);
                    return next;
                });
            } 
            else {
                setcategoryFilters(prev => {
                    const next = new Set(prev);
                    next.delete(filter);
                    updateURL(next, priceFilter);
                    return next;
                });
            }
        } 
        else if (type === 'price') {
            if (checked) {
                setPriceFilter(filter);
                updateURL(categoryFilters, filter);
            } 
            else {
                setPriceFilter('');
                updateURL(categoryFilters, '');
            }
        }
    }

    function updateURL(categories, price) {
        const params = new URLSearchParams();
        categories.forEach(cat => params.append('category', cat));

        if (price) {
            params.set('price', price);
        }
        window.history.replaceState({}, '', `/product?${params.toString()}`);
    }

    // neam pojma stae ovo
    const filteredProducts = categoryFilters.size === 0 
        ? data.filter(p => p.price <= parseInt(priceFilter) || !priceFilter)
        : data.filter(p => categoryFilters.has(p.type) && (p.price <= parseInt(priceFilter) || !priceFilter));
    
        const aa = filteredProducts;
        console.log(aa);


    // Filter cleaning button
    const clearFilters = () => {
        setcategoryFilters(new Set());
        setPriceFilter('');
        updateURL(new Set(), '');
    };
        
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

                {/* Filters */}
                <section id="aside" style={{ display: asideVisible ? 'block' : 'none' }}>
                    <div className="prodFilter_wrap">
                        <section className="asideProd">
                            <h3> Filteri: </h3>
                            <h4>Tip proizvoda:</h4>

                            {/* Category filters */}
                            {cats.map((meow, index) => (
                            <div className="form-check ms-2" key={index}>
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"
                                    checked={categoryFilters.has(meow)}
                                    onChange={(e) => updateFilters(e.target.checked, meow, 'category')}/>
                                    {meow}
                                </label>
                            </div>
                            ))}
                            
                            <hr />

                            {/* Price Filters */}
                            <div className="cijena_proizvoda">
                                <h4>Cijene proizvoda:</h4>

                                {/* Filter prices from data */}
                                {category.price_filter.map((vau, index) => (
                                    
                                    <div className="form-check ms-2" key={index}>
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="radio" name="price_filter" 
                                            value={vau}
                                            checked={priceFilter === vau.toString()}
                                            onChange={(e) => updateFilters(e.target.checked, vau, 'price')}/>
                                            Do {vau} EUR
                                        </label>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="clear_filters">
                                <button onClick={clearFilters}> Očisti filtere </button>
                            </div>
                        </section>
                    </div>
                </section>

                {/*  Section listing all products  */}
                <p>Data from Child: {dataFromChild}</p>
                            <Filter sendDataToParent={handleDataFromChild} />
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
                                <span> {data.price.toFixed(2)} EUR </span>
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