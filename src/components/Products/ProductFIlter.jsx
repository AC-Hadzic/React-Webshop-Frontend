import "./ProductFilter.scss";

function ProductFilter()
{
    return (
        <div className="prodFilter_wrap">
            <section className="asideProd">
                <form action="../products.html" target="_parent" method="get">
                    <h3> Filteri: </h3>

                    <p>Proizvođači:</p>
                    <input type="radio" name="maker" id="apple" value="apple" />
                    <label for="apple"> Apple </label><br />

                    <input type="radio" name="maker" id="samsung" value="samsung" />
                    <label for="samsung"> Samsung </label><br />

                    <input type="radio" name="maker" id="xiaomi" value="xiaomi" />
                    <label for="xiaomi"> Xiaomi </label><br />

                    <input type="radio" name="maker" id="ostali" value="ostali" />
                    <label for="ostali"> Ostali </label><br />

                    <hr />

                    <p>Cijenovni rang:</p>
                    <input type="checkbox" name="low_range" id="low_range" value="low_range" />
                    <label for="low_range"> 0 - 300 EUR</label><br />

                    <input type="checkbox" name="mid_range" id="mid_range" value="mid_range" />
                    <label for="mid_range"> 300 - 600 EUR</label><br />

                    <input type="checkbox" name="high_range" id="high_range" value="high_range" />
                    <label for="high_range"> 600 - 1,000 EUR</label><br />

                    <input type="checkbox" name="premium_range" id="premium_range" value="premium_range" />
                    <label for="premium_range"> 1,000 - 2000 EUR</label><br />

                    <input type="checkbox" name="cash_cow" id="cash_cow" value="cash_cow" />
                    <label for="cash_cow"> 2,000 EUR + </label><br />

                    <div className="button">
                        <button type="submit"> Primjeni filtere </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export {ProductFilter};