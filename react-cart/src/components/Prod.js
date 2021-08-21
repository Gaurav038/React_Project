import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

export default function Prod(props) { 
    const [isAdd, setIsAdd] = useState(false);
    const {cart, setCart} = useContext(CartContext);
    const {objProp} = props;

    const addToCart = (event, objProp)=>{
        event.preventDefault();

        let _cart = {...cart};
        if(!_cart.items){
            _cart.items = {}
        }
        if(_cart.items[objProp._id]){
            _cart.items[objProp._id] += 1;
        }
        else{
            _cart.items[objProp._id] = 1;
        }

        if(!_cart.totalItems){
            _cart.totalItems = 0
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setIsAdd(true);

        setTimeout(()=>{
            setIsAdd(false)
        },1000)
    }
    //   --------------------------------------------------------
            // const cart = {
            //     items : {
            //         '454545454' : 2,
            //         '4654543431' : 5
            //     },
            //     totalItem : 7
            // }
    
    return (
        <Link to={`/products/${objProp._id}`}>
            <div>
                <img src={objProp.image} alt="pizza" />
                <div className="text-center">
                    <h2 className="text-lg font-bold py-2">{objProp.name}</h2>
                    <span className="bg-gray-300 py-1 rounded-full text-sm px-4">{objProp.size}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>$ {objProp.price}</span>
                    <button disabled={isAdd} onClick={(e) => {addToCart(e, objProp) }} className={`${isAdd? 'bg-green-300' : 'bg-yellow-500' } py-1 rounded-full font-bold px-4`}>{isAdd? 'ADDED': 'ADD'}</button>
                </div>
            </div>
        </Link>
    )
}
