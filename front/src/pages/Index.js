import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Index = () =>{

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/products')
        .then(response =>{
            setProducts(response.data);
        })
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <h1>Légumes and Co</h1>

            <h2>Voici nos produits disponibles :</h2>
            {products.map((product) =>{
               return <Product product={product} key={product.id}></Product>
            })}
        </div>
    );
};

export default Index;