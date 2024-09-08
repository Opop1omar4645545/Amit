
let params = new URLSearchParams(window.location.search);
        let productId = params.get('id'); // Get product id from query string

        // Fetch product data and update the page
        let getProductData = async () => {
            try {
                let res = await fetch('https://dummyjson.com/products/'+productId);
                let product = await res.json();

                // Update product details on the page
                document.getElementById('product-img').src = product.thumbnail;
                document.getElementById('product-img').alt = product.title;
                document.getElementById('product-title').innerText = product.title;
                document.getElementById('product-description').innerText = product.description;
                document.getElementById('product-price').innerText = `$${product.price}`;
            } catch (error) {
                window.location.href = '404.html'; // Redirect to 404 page if product not found
                console.error('Error fetching product data:', error);
            }
        };

        // Fetch and display the product data when the page loads
        if (productId) {
            getProductData();
        } else {
            // Handle case where no product ID is provided in the URL
            document.querySelector('.container').innerHTML = '<p>Product not found!</p>';
        }