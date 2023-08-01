document.addEventListener('DOMContentLoaded', () => {
    const productsDiv = document.getElementById('products');

    // Replace 'your_api_endpoint' with the actual API endpoint URL
    const apiEndpoint = 'https://api.example.com/ashtrays';

    // Fetch data from the API
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            // Use the data to generate product cards dynamically
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                const productName = document.createElement('h2');
                productName.textContent = product.name;

                const productPrice = document.createElement('p');
                productPrice.textContent = `$${product.price}`;

                productCard.appendChild(productName);
                productCard.appendChild(productPrice);
                productsDiv.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
// products.js
const products = [
    {
      id: 1,
      name: 'Cool Ashtray 2000',
      price: 19.99,
      imageUrl: 'https://example.com/ashtray1.jpg',
    },
    {
      id: 2,
      name: 'Vintage Brass Ashtray',
      price: 24.99,
      imageUrl: 'https://example.com/ashtray2.jpg',
    },
    // Add more product objects here
  ];
  
  module.exports = products;
  