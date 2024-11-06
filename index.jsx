import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from backend API
  useEffect(() => {
    fetch('https://api.gloryfarms.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products', err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // Integrate with payment gateway API like Stripe or PayPal here.
  };

  return (
    <div>
      <h1>Welcome to Glory Farms</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default App;
