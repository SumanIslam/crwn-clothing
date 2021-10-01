const express = require('express');
const cors = require('cors');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  });
}

app.post('/payment', (req, res) => {
  const { token, amount } = req.body;
  const idempotencyKey = uuidv4();
  
  const body = {
    amount,
    currency: 'usd'
  };

  return stripe.customers.create({
    source: token.id,
    email: token.email,
  })
    .then(customer => {
    stripe.charges.create(body, {idempotencyKey})
  })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

app.listen(port, error => {
  if(error) throw error;
  console.log(`Server is running on port ${port}...`)
})