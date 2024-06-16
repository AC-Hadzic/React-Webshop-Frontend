import price_cat from "../../assets/JSON/ProductPriceFilter.json"
import "../../assets/CSS/product-list.scss";
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

const price_cats = price_cat;

// Filters for category and price
function Filter({ sendDataToParent }) {
    const [asideVisible, setAsideVisible] = useState(true);
    const [categoryFilters, setCategoryFilters] = useState(new Set());
    const [priceFilter, setPriceFilter] = useState('');

    const URL = import.meta.env.VITE_API_URL;
    const { data: products } = useFetch(URL + "products"); // Fetch podataka sa URL
    const { data: category } = useFetch(URL + "category"); // Fetch kategorija

    // URL updater
    function updateURL(categories, price) {
        const params = new URLSearchParams();
        categories.forEach(cat => params.append('category', cat));

        if (price) {
            params.set('price', price);
        }
        window.history.replaceState({}, '', `/product?${params.toString()}`);
    }

    // Function to update filters
    function updateFilters(checked, filter, type) {
        if (type === 'category') {
            setCategoryFilters(prev => {
                const next = new Set(prev);
                checked ? next.add(filter) : next.delete(filter);
                updateURL(next, priceFilter);
                return next;
            });
        } else if (type === 'price') {
            setPriceFilter(checked ? filter : '');
            updateURL(categoryFilters, checked ? filter : '');
        }
    }

    // Filtering of cats and prices, saved into one array
    const filteredProducts = products.filter(p => {
        const categoryMatch = categoryFilters.size === 0 || categoryFilters.has(p.category);
        const priceMatch = !priceFilter || p.price <= parseInt(priceFilter);
        return categoryMatch && priceMatch;
    });

    // Effect checks for any filter changes in order to update asap
    useEffect(() => {
        sendDataToParent(filteredProducts);
    }, [categoryFilters, priceFilter, products]);

    // Update URL based on category and price filter
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const categories = urlParams.getAll('category');
        const price = urlParams.get('price');

        setCategoryFilters(new Set(categories));
        setPriceFilter(price || '');
    }, []);

    // Filter cleaning button
    const clearFilters = () => {
        setCategoryFilters(new Set());
        setPriceFilter('');
        updateURL(new Set(), '');
    };

    // Toggle filter list on/off on small screen
    const toggleAside = () => {
        setAsideVisible(prevState => !prevState);
    };

    // Check screen size to either hide or show filters
    useEffect(() => {
        const handleResize = () => setAsideVisible(window.innerWidth >= 1080);
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
                        {category?.map((cats, index) => (
                            <div className="form-check ms-2" key={index}>
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"
                                        checked={categoryFilters.has(cats.categoryName)}
                                        onChange={(e) => updateFilters(e.target.checked, cats.categoryName, 'category')} />
                                    {cats.categoryName}
                                </label>
                            </div>
                        ))}

                        <hr />

                        {/* Price Filters */}
                        <div className="cijena_proizvoda">
                            <h4>Cijene proizvoda:</h4>

                            {/* Filter prices from data */}
                            {price_cats.price_filter.map((meow, index) => (

                                <div className="form-check ms-2" key={index}>
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="price_filter"
                                            value={meow}
                                            checked={priceFilter === meow.toString()}
                                            onChange={(e) => updateFilters(e.target.checked, meow, 'price')} />
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

export { Filter };