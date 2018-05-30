'use strict';

// Firebase Functions
// OTP Verifier
exports.webhook = functions.https.onRequest((req, res) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  res.send(200);
});

//https://github.com/GoogleOnStackOverflow/line-bot-richard.git