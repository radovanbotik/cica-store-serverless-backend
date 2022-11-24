require("dotenv").config();

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appr0Yql5238asC3S")
  .table("products");

exports.handler = async (event, context) => {
  const { id } = event.queryStringParameters;

  if (id) {
    try {
      const product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: `no product matching id:${id}`,
        };
      }
      return {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 50,
        body: `server error`,
      };
    }
  }
  return {
    statusCode: 400,
    body: "wrong product id",
  };
};
