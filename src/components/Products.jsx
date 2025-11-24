import { useEffect, useState } from "react";

export default function Products() {
    const [prod, setProd] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const jsonData = await response.json();
                console.log(jsonData)
                setProd(jsonData)
            }
            catch(error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchProducts();
    }, [])
}