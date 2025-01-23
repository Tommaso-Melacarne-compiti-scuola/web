/**
 * A product object
 * @typedef {Object} Product
 * @property {string} productName
 * @property {string} category
 * @property {string} price
 * @property {string} image
 * @property {Array<string>} size
 * @property {boolean} sale
 */

/**
 * @type {Product[]}
 */
const products = [
  {
    productName: "OXFORD SHIRT TOMMY HILFIGER",
    category: "Shirts",
    price: "30",
    image: "oxford.webp",
    size: ["S", "M", "XXL"],
    sale: true,
  },
  {
    productName: "GANT GINGHAM SHIRT",
    category: "Shirts",
    price: "49",
    image: "gant.webp",
    size: ["L"],
    sale: false,
  },
  {
    productName: "LUMBERJACK SHIRT",
    category: "Shirts",
    price: "49",
    image: "lumberjackshirt.webp",
    size: ["S"],
    sale: false,
  },
  {
    productName: "BOSS SLIM FIT JEANS",
    category: "Jeans",
    price: "99",
    image: "boss.webp",
    size: ["44", "52"],
    sale: false,
  },
  {
    productName: "ARMANI POCKETS PANT",
    category: "Jeans",
    price: "129",
    image: "armani.webp",
    size: ["48", "50", "52"],
    sale: false,
  },
  {
    productName: "RALPH LAUREN AERA LACE",
    category: "Shoes",
    price: "129",
    image: "polo.webp",
    size: ["38", "39", "43", "44"],
    sale: true,
  },
  {
    productName: "RALPH LAUREN HERITAGE",
    category: "Shoes",
    price: "110",
    image: "polo2.webp",
    size: ["44"],
    sale: false,
  },
  {
    productName: "CLOSURE JACKET LONDON",
    category: "Jackets",
    price: "189",
    image: "london.webp",
    size: ["L", "XL"],
    sale: false,
  },
  {
    productName: "JACK JONES LONG PUFFER",
    category: "Jackets",
    price: "77",
    image: "jack.webp",
    size: ["S", "M", "L", "XL"],
    sale: false,
  },
  {
    productName: "POLO RALPH LAUREN ROUND",
    category: "Sunglasses",
    price: "111",
    image: "sunRalph.webp",
    size: [""],
    sale: true,
  }
];

/**
 * Get the products filtered by category
 * 
 * @param category {string}
 * @returns {Product[]}
 */
function getFilteredProductsByCategory(category) {
  if (!category) {
    return products;
  }
  return products.filter((product) => product.category === category);
}

const productsEl = document.getElementById("products");

/**
 * Append the products to the DOM
 * 
 * @param products {Product[]}
 */
function appendProducts(products) {
  // reset the products
  productsEl.innerHTML = "";

  for (const product of products) {
    const productElement = document.createElement("div");
    productElement.classList.add("product", "col-md-4", "col-sm-6", "mb-4");
    if (product.sale) {
      productElement.classList.add("border", "border-danger");
    }
    productElement.innerHTML = `
            <img src="images/${product.image}" alt="${product.productName}" class="w-100"/>
            <div class="text-center mt-3">
                <h3>${product.productName}</h3>
                <p>$${product.price}</p>
                <p>${product.size.join(", ")}</p>
                ${product.sale ? `<p class="text-danger fw-bold">On Sale!</p>` : ""}
            </div>
        `;
    productsEl.appendChild(productElement);
  }
}

appendProducts(products);

/**
 * Reset the active class of the navbar
 */
function resetNavbarActive() {
  const navbarTitles = document.getElementsByClassName("active");

  for (const navbarTitle of navbarTitles) {
    navbarTitle.classList.remove("active");
  }
}

const filterItems = document.getElementsByClassName("filter-item");

for (const filterItem of filterItems) {
  filterItem.addEventListener("click", (ev) => {
    resetNavbarActive();
    ev.target.classList.toggle("active");
    const nextFilter = ev.target.innerHTML.trim();

    let filter = "";

    if (nextFilter !== "All") {
      filter = nextFilter;
    }

    const filteredProducts = getFilteredProductsByCategory(filter);

    appendProducts(filteredProducts);
  });
}

/**
 * Search a product by its name
 *
 * @param name {string}
 * @returns {Product[]}
 */
function searchProductByName(name) {
  const nameToSearch = name.trim().toLowerCase();

  return products.filter((product) =>
    product.productName.toLowerCase().includes(nameToSearch),
  );
}

document.getElementById("search-form").addEventListener("submit", (ev) => {
  ev.preventDefault();

  resetNavbarActive();
  document.getElementById("navbar-all").classList.add("active");

  const search = document.getElementById("search").value;

  const filteredProducts = searchProductByName(search);

  appendProducts(filteredProducts);
});
