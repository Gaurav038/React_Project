import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";


const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const params = useParams();
    const history = useHistory();

    useEffect(()=>{
        fetch(`/api/products/${params._idNo}`)
        .then((resp)=> resp.json() )
        .then((product)=>{
            setProduct(product);
        })
    },[params._idNo]);
   
    return (
        <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" onClick={() => {history.goBack()} }>BACK</button>
            <div className="flex">
                <img src={product.image} alt="pizza" />
                <div className="ml-16">
                    <h1 className="text-x1 font-bold">{product.name}</h1>
                    <div className="text-md">{product.size}</div>
                    <div className="font-bold mt-2">$ {product.price}</div>
                    <button className="bg-yellow-500 py-1 rounded-full font-bold px-4">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
