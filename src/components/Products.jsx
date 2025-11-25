import { useEffect, useState } from "react";
import Product from "./Product";

export default function Products() {
    const [prod, setProd] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const jsonData = await response.json();
                const trimJson = jsonData.splice(0, 9)
                console.log(trimJson)
                setProd(true)
                setData(jsonData)
            }
            catch(error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchProducts();
    }, [])

    return (
        <div className="prod-group">
            {prod ? (
                <ul className="product-list">
                    {data.map(item => (
                        <Product key={item.id} image={item.image} name={item.title} price={item.price} />
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )
            }
        </div>
    )
}