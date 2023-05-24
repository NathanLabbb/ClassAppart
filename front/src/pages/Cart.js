import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Product from '../components/Product';

const Cart = () =>{

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        // Effectuez votre requête pour obtenir les produits depuis votre API
        axios.get('http://localhost:8000/products')
          .then(response => {
            const products = response.data;
    
            // Filtre les produits avec is_in_kart à true
            // il n'arrive pas a valider 
            const cartItems = products.filter(product => product.is_in_kart === 1);
    
            setCartProducts(cartItems);
            console.log(cartItems);
          })
          .catch(err => console.error(err));
      }, []);

    return (
        <div>
            <Navbar></Navbar>
            {cartProducts.map((product) =>{
               return <Product product={product} key={product.id}></Product>
                
            })}
        </div>
    );
};

export default Cart;