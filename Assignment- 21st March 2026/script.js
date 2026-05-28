const products = [

    {
        id: 1,
        name: "Smartphone",
        category: "Electronics",
        price: "₹20,000",
        image: "https://via.placeholder.com/200"
    },

    {
        id: 2,
        name: "Laptop",
        category: "Electronics",
        price: "₹55,000",
        image: "https://via.placeholder.com/200"
    },

    {
        id: 3,
        name: "T-Shirt",
        category: "Fashion",
        price: "₹800",
        image: "https://via.placeholder.com/200"
    },

    {
        id: 4,
        name: "Shoes",
        category: "Fashion",
        price: "₹2,500",
        image: "https://via.placeholder.com/200"
    }
];

const productContainer =
document.getElementById("productContainer");


// Display Products
function displayProducts(items) {

    productContainer.innerHTML = "";

    items.forEach((product) => {

        productContainer.innerHTML += `

            <div class="card">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <p class="price">${product.price}</p>

            </div>
        `;
    });
}


// Filter Products
function filterProducts(category) {

    if(category === "All") {

        displayProducts(products);

    } else {

        const filtered = products.filter(
            (product) => product.category === category
        );

        displayProducts(filtered);
    }
}


// Initial Display
displayProducts(products);
