import data from "./ProductData.json";
import category from "./ProductCategory.json"
import "./ProductList.scss";
import { useState, useEffect } from "react";

const cats = category;

// Filters for category and price
function Filter({sendDataToParent}) {
    const [asideVisible, setAsideVisible] = useState(true);
    let [categoryFilters, setcategoryFilters] = useState(new Set());
    let [priceFilter, setPriceFilter] = useState('');

    // Sends filter changes to parent to map
    const handleChange = () => {
        sendDataToParent(filteredProducts);
    };

    // Effect checks for any filter changes in order to update asap
    useEffect(() => {
        handleChange();
    }, [categoryFilters, priceFilter]);

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

    // URL updater
    function updateURL(categories, price) {
        const params = new URLSearchParams();
        categories.forEach(cat => params.append('category', cat));

        if (price) {
            params.set('price', price);
        }
        window.history.replaceState({}, '', `/product?${params.toString()}`);
    }

    // Filtering of cats and prices, saved into one array
    const filteredProducts = categoryFilters.size === 0 
        ? data.filter(p => p.price <= parseInt(priceFilter) || !priceFilter)
        : data.filter(p => categoryFilters.has(p.type) && (p.price <= parseInt(priceFilter) || !priceFilter));
    
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

    // Check screen size to either hide or show filters
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 1080) {
            setAsideVisible(true);
        }};

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div>
            {/* Filter toggle button only under 1080px */}
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
                        {cats.categories.map((meow, index) => (
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
                            {cats.price_filter.map((meow, index) => (
                                
                                <div className="form-check ms-2" key={index}>
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="price_filter" 
                                        value={meow}
                                        checked={priceFilter === meow.toString()}
                                        onChange={(e) => updateFilters(e.target.checked, meow, 'price')}/>
                                        Do {meow} EUR
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
        </div>
    );
}

export {Filter};