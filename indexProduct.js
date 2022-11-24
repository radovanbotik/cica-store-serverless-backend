const productContainer = document.querySelector(".product-container");

const fetchData = async () => {
  try {
    const id = window.location.search;
    const resp = await fetch(`/api/product${id}`);
    const data = await resp.json();
    const { fields } = data;
    productContainer.innerHTML = `
          <article class='product'>
          <h2>name:${fields.name}</h2>
          <h3>id:${fields.id}</h3>
          <h4>price:${fields.price}</h4>
          <h4>category:${fields.category}</h4>
          <h5>description:${fields.description}</h5>
          <h5>colors:${fields.color ? fields.color : ""}</h5>
          <img src="${fields.image[0].url}"/>
          </article>
          `;
  } catch (error) {
    productContainer.innerHTML = `<h1>there was an error.</h1>`;
  }
};

fetchData();
