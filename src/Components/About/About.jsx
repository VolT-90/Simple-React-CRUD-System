import React, { useState } from 'react';

export default function About() {
  // States
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [updatedId, setUpdatedId] = useState(null);

  // Create or Update Product
  function handleCreateProduct() {
    const parsedPrice = parseInt(price);

    // Create Mode
    if (updatedId === null) {
      const newProduct = {
        id: Date.now(),
        productName: name,
        productPrice: parsedPrice
      };
      setProducts([...products, newProduct]);
      setTotal(total + parsedPrice);
    } 
    // Update Mode
    else {
      const arr = [...products];
      const productIndex = arr.findIndex(product => product.id === updatedId);
      const oldPrice = arr[productIndex].productPrice;

      arr[productIndex] = {
        id: arr[productIndex].id,
        productName: name,
        productPrice: parsedPrice
      };

      setProducts(arr);
      setTotal(total - oldPrice + parsedPrice);
      setUpdatedId(null);
    }

    // Clear form
    clearForm();
  }

  // Delete Product
  function deleteProduct(id) {
    const productToDelete = products.find(product => product.id === id);
    if (!productToDelete) return;

    setProducts(products.filter(product => product.id !== id));
    setTotal(total - productToDelete.productPrice);
  }

  // Load product into form for update
  function updateProduct(id) {
    const product = products.find(product => product.id === id);
    if (!product) return;

    setName(product.productName);
    setPrice(product.productPrice);
    setUpdatedId(id);
  }

  // Clear form
  function clearForm() {
    setName('');
    setPrice('');
  }

  return (
    <>
      <section className='inputSection container'>
        <div className='bg-white shadow-lg p-5 rounded'>
          <div className='container'>
            <h2 className='text-center'>Create New Product</h2>
            <h3 className='text-white bg-secondary w-25 rounded text-center'>
              Total: {total}
            </h3>
            <input
              className='form-control mt-4'
              type='text'
              placeholder='Enter the name of the product'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='form-control my-3'
              type='number'
              placeholder='Enter the price of the product'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button className={`btn w-100 text-white ${updatedId === null ? 'btn-success':'btn-warning'}`} onClick={handleCreateProduct}>
              {updatedId ? 'Update Product' : 'Create Product'}
            </button>
          </div>
        </div>
      </section>

      <section className='displaySection container'>
        <div className='container bg-white shadow-lg p-5 rounded my-3'>
          <table className='table text-center table-striped'>
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Price</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{product.productPrice}</td>
                  <td>
                    <button
                      className='btn btn-warning me-2 text-white'
                      onClick={() => updateProduct(product.id)}
                    >
                      Update
                    </button>
                    <button
                      className='btn btn-danger'
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan='4'>No products added yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
