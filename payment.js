const stripe = require('stripe')('your-stripe-secret-key');

// Handle the checkout process
app.post('/checkout', async (req, res) => {
  const { items, token } = req.body;

  // Calculate the total amount
  const amount = items.reduce((total, item) => total + item.price, 0);

  try {
    // Charge the user's card via Stripe API
    const charge = await stripe.charges.create({
      amount: amount * 100, // Stripe expects the amount in cents
      currency: 'usd',
      description: 'Glory Farms Order',
      source: token.id,
    });

    res.json({ message: 'Payment successful, order is being processed' });
  } catch (error) {
    res.status(500).json({ message: 'Payment failed', error: error.message });
  }
});
