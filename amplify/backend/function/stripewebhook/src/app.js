/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["STRIPE_SIGNING_SECRET"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const aws = require("aws-sdk");

// declare a new express app
const app = express();

// parse application/json
app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "POST");
  next();
});

// ----------------------------------------------------------------------------------------------------
// ********** HELPERS **********

// Get secret key
const getSecret = async () => {
  const {Parameters} = await new aws.SSM()
    .getParameters({
      Names: ["STRIPE_SIGNING_SECRET"].map(
        (secretName) => process.env[secretName]
      ),
      WithDecryption: true,
    })
    .promise();

  const secret = Parameters[0].Value;
  console.log("*** Retrieved Signing Secret ***");

  return secret;
};

// ----------------------------------------------------------------------------------------------------
// ********** ROUTES **********

// Stripe webhook signature checking
app.post("/webhook", async (req, res) => {
  const stripe = require("stripe");
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    const endpointSecret = await getSecret();
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (error) {
    res.status(400).send(`Webhook Error: ${error.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.created":
      {
        const paymentIntent = event.data.object;
        // Then define and call a function to handle the event payment_intent.created
        console.log("PaymentIntent was created!", paymentIntent);
      }
      break;
    case "payment_intent.succeeded":
      {
        const paymentIntent = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        console.log("PaymentIntent was successful!", paymentIntent);
      }
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.status(200).json({received: true});
});

app.post("/webhook/*", function (req, res) {
  // Add your code here
  res.status(404);
});

// ----------------------------------------------------------------------------------------------------
// ********** START APP **********

app.listen(8000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
