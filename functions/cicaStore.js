//domain/.netlify/functions/1-hello
const products = require("../assets/data.js");

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};
