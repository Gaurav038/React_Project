import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navigat from './components/Navigat';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import {CartContext} from './CartContext';
import {useEffect, useState} from 'react';
import {getCart, storeCart} from './Localhelp';
 

function App(){

    const [cart, setCart] = useState([]);
    // fetch cart from local Storage
    useEffect(()=>{
        getCart().then((cart) => {
            setCart(JSON.parse(cart)); 
        });   
    },[])

    useEffect(()=>{
        storeCart(cart );
    },[cart])

    return (
        <>
            <Router>
                <CartContext.Provider value={{cart: cart, setCart}}>
                    <Navigat />
                        <Switch>
                            <Route path="/" component={Home} exact></Route>
                            <Route path="/products" exact component={ProductsPage}></Route>
                            <Route path="/products/:_idNo" component={SingleProduct}></Route>
                            <Route path="/cart" component={Cart}></Route>
                        </Switch>
                </CartContext.Provider>    
            </Router>
        </>
    )   
}

export default App;