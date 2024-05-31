export function useUpdateProduct() {
    const updateProduct = async (URL, cartID, id, type) => {
        try {
            const response = await fetch(URL + "cart/" + cartID + "/products/" + id + "/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "quantity": type == "add" ? 1 : -1 })
            });
            if (!response.ok) {
                throw new Error('The response is not OK :c');
            }
            const result = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return { updateProduct  };
};