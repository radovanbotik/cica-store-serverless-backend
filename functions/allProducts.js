require("dotenv").config();

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appr0Yql5238asC3S")
  .table("products");

exports.handler = async (event, context) => {
  try {
    // const data = await airtable.list(data)
    // const {products}
    const { records } = await airtable.list();
    const products = records.map(entry => {
      const { id } = entry;
      const {
        name,
        shipping,
        price,
        id: myID,
        category,
        featured,
        description,
        color,
        image,
      } = entry;
      const URL = image[0].url;
      return {
        id,
        name,
        shipping,
        price,
        myID,
        category,
        featured,
        description,
        color,
        image,
        URL,
      };
    });
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 500,
      body: "server error",
    };
  }
};
