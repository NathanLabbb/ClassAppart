import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleImgChange = (e) => {
    setImg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title: title,
      price: price,
      desc: desc,
      img: img
    };

    axios
      .post('http://localhost:8000/addProducts', newProduct)
      .then(response => {
        console.log(response.data); 
        
      })
      .catch(error => {
        console.error(error);
      });

    setTitle('');
    setPrice('');
    setDesc('');
    setImg('');
  };

  return (
    <div>
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="price">Prix :</label>
          <input type="text" id="price" value={price} onChange={handlePriceChange} />
        </div>
        <div>
          <label htmlFor="desc">Description :</label>
          <input type="text" id="desc" value={desc} onChange={handleDescChange} />
        </div>
        <div>
          <label htmlFor="img">Image :</label>
          <input type="text" id="image" value={img} onChange={handleImgChange} />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddProduct;
