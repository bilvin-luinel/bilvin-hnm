import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {

    const navigate = useNavigate();

    const goToProduct = () => {
        navigate(`/product/${item.id}`)
    }
    return (
        <div className="card">
            <img className="card-img" src={item?.img} onClick={goToProduct} />
            <div className="choice-text">{item?.choice == true ? "Conscious choice" : "   "}</div>
            <div>{item?.title}</div>
            <div className="price-text">\{item?.price}</div>
            <div className="new-text">{item?.new == true ? "NEW" : "   "}</div>
        </div>

    )
}

export default ProductCard