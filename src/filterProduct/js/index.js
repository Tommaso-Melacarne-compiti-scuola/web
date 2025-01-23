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
  },
];

let filter = "";

function getFilteredProducts(category) {
  if (!category) {
    return products;
  }
  return products.filter((product) => product.category === category);
}

const productsEl = document.getElementById("products");

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

function updateFilteredProducts() {
  const filteredProducts = getFilteredProducts(filter);

  appendProducts(filteredProducts);
}

updateFilteredProducts();

function resetActive() {
  const els = document.getElementsByClassName("active");

  for (const el of els) {
    el.classList.remove("active");
  }
}

const filterItems = document.getElementsByClassName("filter-item");

for (const filterItem of filterItems) {
  filterItem.addEventListener("click", (ev) => {
    resetActive();
    ev.target.classList.toggle("active");
    const nextFilter = ev.target.innerHTML.trim();

    if (nextFilter === "All") {
      filter = "";
    } else {
      filter = nextFilter;
    }
    updateFilteredProducts();
  });
}

document.getElementById("search-form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  resetActive();

  const search = document.getElementById("search").value.trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(search),
  );

  appendProducts(filteredProducts);
});
