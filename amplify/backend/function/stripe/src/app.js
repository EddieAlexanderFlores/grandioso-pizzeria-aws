/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["STRIPE_SECRET_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/

/* Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
// ====================================================================================================

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const aws = require("aws-sdk");

// declare a new express app
const app = express();

// parse application/json
app.use(bodyParser.json());

app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "POST");
  console.log("Request made");
  next();
});

// ----------------------------------------------------------------------------------------------------
// ********** HELPERS **********

// Get secret key
const getSecret = async () => {
  const {Parameters} = await new aws.SSM()
    .getParameters({
      Names: ["STRIPE_SECRET_KEY"].map((secretName) => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();

  const secret = Parameters[0].Value;
  console.log("*** Retrieved Secret Key ***");

  return secret;
};

// Calculate amount
// {items: [{cartItemID, description, image, imageURL, menuItemID, price, quantity, title, totalPrice}]}
const calculateOrderAmount = (items) => {
  let subtotal = 0;
  for (const item of items) {
    totalPrice = item.price * item.quantity;
    subtotal += totalPrice;
  }

  const taxRate = 0.08875;
  const tax = Math.round(subtotal * taxRate);
  const amount = subtotal + tax;

  return amount;
};

const getSpecificItemsInfo = (items) => {
  const newItemsInfo = [];
  for (const item of items) {
    const itemInfo = {
      menu_item_id: item.menuItemID,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    };
    newItemsInfo.push(itemInfo);
  }

  return newItemsInfo;
};

// ----------------------------------------------------------------------------------------------------
// ********** ROUTES **********

// Stripe payment intent
app.post("/create-payment-intent", async (req, res) => {
  try {
    const stripeSecretKey = await getSecret();
    const stripe = require("stripe")(stripeSecretKey);
    const {orderID, items, email} = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      receipt_email: email,
      metadata: {
        order_id: orderID,
        items: JSON.stringify(getSpecificItemsInfo(items)),
      },
    });

    console.log("PAYMENT INTENT:", paymentIntent);

    // Send back the client secret key with 201 Created status
    res.status(201).json({
      success: "payment intent succeed!",
      clientSecret: paymentIntent.client_secret,
      amount: paymentIntent.amount,
    });
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

app.post("/create-payment-intent/*", function (req, res) {
  // Add your code here
  res.status(404);
});

// ----------------------------------------------------------------------------------------------------
// ********** START APP **********

app.listen(5000, () => {
  console.log("App started on port 5000");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
