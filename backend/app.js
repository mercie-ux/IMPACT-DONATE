const express = require('express')
const app = express()
const port = 3001
app.get("/getinfo", function (req, res) {
    client.getInfo({}, function(err, response) {
      if (err) {
        console.log('Error: ' + err);
      }
      res.json(response);
    });
  });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.post("/generate-invoice", (req, res) => {
    const { name, amount } = req.body;
  
    if (!name || !amount) {
      return res.status(400).json({ error: "Name and Amount are required" });
    }
  
    const request = {
      value: parseInt(amount, 10), // Amount in satoshis
      memo: `Donation by ${name}`, // Description of the donation
    };
  
    client.addInvoice(request, (err, response) => {
      if (err) {
        console.error("Error creating invoice:", err);
        return res.status(500).json({ error: "Failed to create invoice" });
      }
      res.json({
        payment_request: response.payment_request, // LN invoice
        r_hash: response.r_hash, // Payment hash
      });
    });
  });

  
// gRPC imports
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const fs = require("fs");

process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA'

const loaderOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

const packageDefinition = protoLoader.loadSync('lightning.proto', loaderOptions);

// Load lnd macaroon
let m = fs.readFileSync('C:\\Users\\CynthiaNadongo\\.polar\\networks\\5\\volumes\\lnd\\charity\\data\\chain\\bitcoin\\regtest\\admin.macaroon');
let macaroon = m.toString('hex');

// Build meta data credentials
let metadata = new grpc.Metadata()
metadata.add('macaroon', macaroon)
let macaroonCreds = grpc.credentials.createFromMetadataGenerator((_args, callback) => {
  callback(null, metadata);
});

// Combine credentials
let lndCert = fs.readFileSync('C:\\Users\\CynthiaNadongo\\.polar\\networks\\5\\volumes\\lnd\\charity\\tls.cert');
let sslCreds = grpc.credentials.createSsl(lndCert);
let credentials = grpc.credentials.combineChannelCredentials(sslCreds, macaroonCreds);

// Create client
let lnrpcDescriptor = grpc.loadPackageDefinition(packageDefinition);
let lnrpc = lnrpcDescriptor.lnrpc;
let client = new lnrpc.Lightning('127.0.0.1:10006', credentials);

