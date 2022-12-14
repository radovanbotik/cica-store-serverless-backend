const productsContainer = document.querySelector(".products-container");

const fetchData = async () => {
  try {
    const resp = await fetch("/api/allProducts/");
    const data = await resp.json();
    const UI = data
      .map(entry => {
        return `
        <a href='product.html?id=${entry.id}'>
        <article class='product'>
        <h2>name:${entry.name}</h2>
        <h3>id:${entry.id}</h3>
        <h4>price:${entry.price}</h4>
        <h4>category:${entry.category}</h4>
        <h5>description:${entry.description}</h5>
        <h5>colors:${entry.color ? entry.color : ""}</h5>
        
        <img src="${entry.image[0].url}"/>
        </article>
        </a>
        `;
      })
      .join("");
    productsContainer.innerHTML = UI;
  } catch (error) {
    productsContainer.innerHTML = `<h1>there was an error.</h1>`;
  }
};

fetchData();
