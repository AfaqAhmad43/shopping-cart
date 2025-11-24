import { useEffect, useState } from "react";

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
                <ul className="product">
                    {data.map(item => (
                        <div className="prod-info">
                        <div className="prod-img">
                            <img src={item.image}/>
                        </div>
                        <div className="prod-text">
                            <li key={item.id}>{item.title}</li>
                       </div>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )
            }
        </div>
    )
}