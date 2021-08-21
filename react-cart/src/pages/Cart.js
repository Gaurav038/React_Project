import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";

export default function Cart() {
    let total = 0;
    const [products, setProducts] = useState([]);
    const { cart, setCart } = useContext(CartContext);
    const [priceFetch, tooglePriceFetch] = useState(false)

    useEffect(() => {
        if (!cart.items) {
            return;
        }

        if(priceFetch){
            return;
        }

        fetch('/api/products/cart-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ids: Object.keys(cart.items) })
        }).then(res => res.json())
            .then(products => {
                setProducts(products);
                tooglePriceFetch(true);
            })
    }, [cart, priceFetch]) 

    const getQty = (Prod_Id)=>{
        return(cart.items[Prod_Id]);
    }

    const increment = (Prod_Id)=>{
        const exist = cart.items[Prod_Id];
        const _cart = {...cart};
        _cart.items[Prod_Id] = exist+1;
        _cart.totalItems += 1;
        setCart(_cart);
    }
    const decrement = (Prod_Id)=>{
        const exist = cart.items[Prod_Id];
        if(exist===1){
            return;
        }
        const _cart = {...cart};
        _cart.items[Prod_Id] = exist-1;
        _cart.totalItems -= 1;
        setCart(_cart);
    }
    const getSum = (Id, price)=>{
        const sum = price * getQty(Id);
        total += sum;
        return sum;
    }
    const handleDelete = (Id)=>{
        const _cart = {...cart};
        const qty =  _cart.items[Id];
        delete _cart.items[Id];
        _cart.totalItems -= qty;
        setCart(_cart);
        const updProdList = products.filter((product) => product._id !== Id );
        setProducts(updProdList);
    }

    const handleOrder = ()=>{
        alert("order Place successfully!!!")
        setCart({});
        setProducts([]);
    }
    return (
        !products.length ?
        <img className="mx-auto w-1/2 mt-12" src="images/empty-cart.png" />
        :
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="my-12 font-bold">Cart Items</h1>
            <ul>
                {
                    products.map(product => {
                        return (
                            <li className="mb-12" key={product._id}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img className="h-16" src={product.image} />
                                        <span className="font-bold ml-4 w-48">{product.name}</span>
                                    </div>
                                    <div>
                                        <button onClick={() => { decrement(product._id) }} className="bg-yellow-500 px-4 py-2 rounded-full leading-none" >-</button>
                                        <b className="px-4">{getQty(product._id)}</b>
                                        <button onClick={() => { increment(product._id) }}  className="bg-yellow-500 px-4 py-2 rounded-full leading-none" >+</button>
                                    </div>
                                    <span>{ getSum(product._id, product.price) } </span>
                                    <button onClick={() => {handleDelete(product._id)}} className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <hr className=" my-6 bg-red-500 h-1" />
            <div className="text-right"><b>Grand Total:</b> $ {total}</div>
            <div className="text-right mt-6">
                <button onClick={handleOrder} className="bg-yellow-500 px-4 py-2 rounded-full leading-none" >Order Now</button>
            </div>
        </div>
    )
}
