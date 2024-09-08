let getData = async () => {
    try {
        let res = await fetch('https://dummyjson.com/products');
        let data = await res.json();
        let products = data.products;

        // Select the container where the product cards will be inserted
        let container = document.querySelector('.container');

        // Iterate over the products and update the container's innerHTML
        products.forEach(product => {
            container.innerHTML += `
                <div class="card" data-id="${product.id}">
                    <img src="${product.thumbnail}" alt="${product.title}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-price">$${product.price}</p>
                    </div>
                </div>
            `;
        });

        // Add event listeners to each card to redirect to the single product page
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', (e) => {
                let productId = card.getAttribute('data-id');
                // Redirect to single product page, passing the product ID in the query string
                window.location.href = `product.html?id=${productId}`;
            });
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the function to fetch and display data
getData();
