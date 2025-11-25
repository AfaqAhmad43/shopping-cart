export default function Product({id, name, image, price, handleCart, item}) {
    return(
        <div className="prod-info">
            <div className="prod-img">
                <img src={image} alt="" />
            </div>
            <div className="prod-text">
                <li>{name}</li>
            </div>
            <button onClick={() => handleCart(item)}>Add</button>
        </div>
    )
}