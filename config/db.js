require('dotenv/config')

const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey:process.env.secretAccessKey,
  region: process.env.region
});

// const dynamoDB = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoDB
