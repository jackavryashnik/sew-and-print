import { useEffect, useState } from "react";

const FetchedProducts = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("../constants/products.json");
                const result = await response.json();
                setProducts(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return { products };
};

export default FetchedProducts;
