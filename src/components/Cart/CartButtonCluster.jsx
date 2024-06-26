import { Link } from "react-router-dom";
import React from "react";

function CartButtonCluster({ handleClearCart }) {
    return (
        <div className="buttons">
            <Link to={"/product"} onClick={() => { window.scrollTo(0, 0) }}>
                <button> Vrati se u kupnju </button>
            </Link>

            {/* onclick to the refresh button */}
            <button> Ažuriraj košaricu </button>

            {/* onclick to delete all */}
            <button id="delete_all" onClick={() => handleClearCart()}> Poništi sve </button>
            
            <Link to={"/checkout"} onClick={() => { window.scrollTo(0, 0) }}> 
                <button> Checkout </button> 
            </Link>
        </div>
    )
}

export { CartButtonCluster };