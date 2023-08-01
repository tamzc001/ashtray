import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace 'your_api_endpoint' with the actual API endpoint URL
    const apiEndpoint = 'https://api.example.com/products';

    // Fetch data from the API
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Ashtray Store</h1>
      </header>

      <main>
        <div id="products">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>Contact us at: contact@ashtraystore.com</p>
      </footer>
    </div>
  );
}

export default App;
