export function useRemoveProduct() {
    const removeProduct = async (URL, cartID, id, type) => {
        try {
            const response = await fetch(URL + "cart/" + cartID + "/products/" + (type == "single" ? id : ""), {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error('The response is not OK :c');
            }
            const result = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return { removeProduct  };
};