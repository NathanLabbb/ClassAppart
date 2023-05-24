import axios from 'axios';
import React from 'react';

const Product = ({ product }) => {
  const productStyle = {
    display: 'flex',
    maxWidth: '300px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    margin: '10px',
  };

  const imageStyle = {
    width: '100%',
    marginBottom: '10px',
  };

  const button = {
    backgroundColor: 'green',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
  };

  const priceStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  };

  const clickHandle = (product) => {
    axios.put(`http://localhost:8000/addProductInCart/${product.id}`, {
      is_in_cart: true
    })
      .then(response => {
        console.log('Produit ajouté au panier');
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout au panier :', error);
      });
  };

  return (
    <div style={productStyle}>
      <img src={product.img} alt={product.title} style={imageStyle} />
      <div>
        <h1 style={titleStyle}>{product.title}</h1>
        <p style={descriptionStyle}>{product.description}</p>
      </div>
      <p style={priceStyle}>{product.price}€</p>
      <button onClick={() => clickHandle(product)} style={button}>Ajouter au panier</button>
    </div>
  );
};

export default Product;
