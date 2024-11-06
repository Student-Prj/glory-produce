const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const products = [
  { id: 1, name: 'Organic Tomatoes', price: '$3.00', image: '/images/tomatoes.jpg' },
  { id: 2, name: 'Fresh Milk', price: '$2.50', image: '/images/milk.jpg' },
  // Add more products
];

// Serve product information
app.get('/products', (req, res) => {
  res.json(products);
});

// Endpoint to handle checkout (example, this can be extended to integrate with a payment gateway)
app.post('/checkout', (req, res) => {
  // In a real-world app, you would handle the checkout process and integrate with payment APIs like Stripe or PayPal here.
  res.json({ message: 'Checkout successful. Order confirmation will be sent to your email.' });
});

// Serve static files (like images) from /public directory
app.use('/images', express.static('public/images'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
