import Prod from './Prod'
import {useState, useEffect} from 'react';

const Products = ()=> {

    const [products, setProducts] = useState([]);
    useEffect(() => {
       fetch(`/api/products`)
       .then(response => response.json())
       .then(products1 =>{
           setProducts(products1);
       });
    }, []);

    return (
        <div className="container mx-auto pb-25">
            <h1 className="text-lg font-bold my-8">Product</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                {
                    products.map((product) => <Prod key={product._id} objProp={product} />)
                }

            </div>
        </div>
    )
}

export default Products;