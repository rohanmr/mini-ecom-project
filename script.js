watches = [
    {
        id: 1,
        titel: "Marvellous FX2",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
        price: "3000",
        stock: "10",
        brand: "Titan",
    },
    {
        id: 2,
        titel: "boAt Stron Infinity",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
        price: "1000",
        stock: "10",
        brand: "boAt",
    },
    {
        id: 3,
        titel: "Fastrack FX2",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
        price: "500",
        stock: "10",
        brand: "Fastrack",
    },
    {
        id: 4,
        titel: "Fastrack Smart Watch",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
        price: "800",
        stock: "10",
        brand: "Fastrack",
    },
    {
        id: 5,
        titel: "Noise Smart Watch",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
        price: "2000",
        stock: "10",
        brand: "Noise",
    },
    {
        id: 6,
        titel: "Titan Smart Watch",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
        price: "1000",
        stock: "10",
        brand: "Titan",
    },
    {
        id: 7,
        titel: "Noise  Watch",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
        price: "400",
        stock: "10",
        brand: "Noise",
    },
    {
        id: 8,
        titel: "boat unity Smart Watch",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
        price: "2000",
        stock: "10",
        brand: "boAt",
    },
];





function setWatchestoLocal(data) {
    localStorage.setItem("products", JSON.stringify(data));
}

function getWatchesFromLocal() {
    return JSON.parse(localStorage.getItem("products"));
}

window.addEventListener("DOMContentLoaded", () => {
    dataFromLocal = getWatchesFromLocal();
    if (!dataFromLocal) {
        setWatchestoLocal(watches);
    }
    if (renderCardEle) {
        renderProducts(dataFromLocal);
        renderBrands();
    }
});

window.addEventListener("DOMContentLoaded", () => {
    cartFromLocal = getCartProductFromLocal();
    if (!cartFromLocal) {
        setCartProductToLocal(cartArray);
    }

});


function addProduct() {
    titelInput = document.querySelector("#title").value;
    desInput = document.querySelector("#description").value;
    priceInput = document.querySelector("#price").value;
    stockInput = document.querySelector("#stock").value;
    brandInput = document.querySelector("#brand").value;

    newWatch = {
        id: Date.now(),
        titel: titelInput,
        description: desInput,
        price: priceInput,
        stock: stockInput,
        brand: brandInput,
    };

    productFromLocal = getWatchesFromLocal();
    productFromLocal.push(newWatch);

    setWatchestoLocal(productFromLocal);

    document.querySelector(
        "#alert"
    ).innerHTML = `<div class="alert w-50 mt-4 alert-success alert-dismissible fade show" role="alert">
            <strong>Product</strong> Added Successsfully.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

    titelInput = document.querySelector("#title").value = "";
    desInput = document.querySelector("#description").value = "";
    priceInput = document.querySelector("#price").value = "";
    stockInput = document.querySelector("#stock").value = "";
    brandInput = document.querySelector("#brand").value = "";
}

function updateProduct(i) {

    dataFromLocal = getWatchesFromLocal()
    document.querySelector("#editName").value = dataFromLocal[i].titel
    document.querySelector("#editDescription").value = dataFromLocal[i].description
    document.querySelector("#editPrice").value = dataFromLocal[i].price
    document.querySelector("#editStock").value = dataFromLocal[i].stock

    document.querySelector("#updateProduct").addEventListener('click', () => {
        dataFromLocal[i].titel = document.querySelector("#editName").value
        dataFromLocal[i].description = document.querySelector("#editDescription").value
        dataFromLocal[i].price = document.querySelector("#editPrice").value
        dataFromLocal[i].stock = document.querySelector("#editStock").value
        setWatchestoLocal(dataFromLocal)
        renderProducts(dataFromLocal)
    })

}

function setCartProductToLocal(data) {
    localStorage.setItem("cart", JSON.stringify(data));
}

function getCartProductFromLocal() {
    return JSON.parse(localStorage.getItem("cart"));
}

cartArray = []

function cartCount() {
    cartFromLocal = getCartProductFromLocal()
    if (!cartFromLocal) {
        document.querySelector("#count").textContent = "0"
    } else {
        document.querySelector("#count").textContent = cartFromLocal.length
    }
}
cartCount()

function addToCart(ID) {
    cartFromLocal = getCartProductFromLocal()
    cartProd = cartFromLocal.find((p) => p.id == ID)

    if (cartProd) {
        cartProd.qty = cartProd.qty + 1;
    } else {
        dataFromLocal = getWatchesFromLocal()
        product = dataFromLocal.find((p) => p.id == ID)

        cartItem = {
            id: product.id,
            titel: product.titel,
            price: product.price,
            qty: 1
        }
        cartFromLocal.push(cartItem)
    }

    setCartProductToLocal(cartFromLocal);
    cartCount()
    totalPrice()
}


function totalPrice() {
    cart = getCartProductFromLocal()
    if (!cart) {
        return console.log("no product found")
    } else {
        total = cart.reduce((sum, item) => {
            price = parseInt(item.price)
            qty = item.qty

            return sum = sum + price * qty

        }, 0)
    }

    document.querySelector("#totalPrice").textContent = total + "rs"

}
totalPrice()

function deleteFromCart(ID) {

    dataFromLocal = getCartProductFromLocal()
    const index = dataFromLocal.findIndex((w) => w.id == ID)
    if (index == -1) {
        alert("no product found")
    } else {

        dataFromLocal.splice(index, 1)
        setCartProductToLocal(dataFromLocal)
        renderCaerItem(dataFromLocal)
        cartCount()
        totalPrice()
    }

}

function renderCaerItem() {
    cartFromLocal = getCartProductFromLocal()
    if (cartFromLocal.length < 1) {
        document.querySelector("#cartItem").innerHTML = ` <div class="ms-2 text-center">
                                  Cart is Empty
                                </div>`
    } else {
        document.querySelector("#cartItem").innerHTML = cartFromLocal.map((p, i) => `<li class="list-group-item d-flex justify-content-between align-items-center">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">${p.titel}</div>
                                    <div class="d-flex gap-2"><h6>Price: ${p.price}</h6>
                                    <h6>Qty: ${p.qty}</h6>
</div>
                                </div>
                                <button class="btn btn-danger" onclick="deleteFromCart('${p.id}')"><i class="fa-solid fa-trash"></i></button>
                            </li>`).join('')
    }
}

function deleteProduct(Id) {

    dataFromLocal = getWatchesFromLocal()
    const index = dataFromLocal.findIndex((w) => w.id == Id)
    if (index == -1) {
        alert("no product found")
    } else {

        dataFromLocal.splice(index, 1)
        setWatchestoLocal(dataFromLocal)
        renderProducts(dataFromLocal)
    }

}

function renderProducts(prodArrray) {
    if (!prodArrray) {
        return console.log("no product found");
    }

    renderCardEle = document.querySelector("#renderCard");

    renderCardEle.innerHTML = prodArrray
        .map(
            (w, i) => `
    <div class="col-sm-12 col-md-6 col-lg-3 my-2  ">
    <div class="card shadow-lg">
      <div class="card-body">
        <h5 class="card-title">${w.titel}</h5>
        <p class="card-text m-1">${w.description}</p>
        <p class="card-text m-1">Stock: ${w.stock}</p>
        <p class="card-text m-1">Brand: ${w.brand}</p>
        <p class="card-text m-1">Price: ${w.price}</p>
       <div class="justify-content-start gap-2 d-flex mt-3"> <button onclick="updateProduct('${i}')" data-bs-toggle="modal"
        data-bs-target="#editProductModal"  class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
       <button onclick="addToCart('${w.id}')" class="btn btn-success"><i class="fa-solid fa-cart-plus ms-1 "></i></button>
       <button onclick="deleteProduct('${w.id}')"  class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
       
       </div>
      </div>
    </div>
</div>
`
        )
        .join("");
}
renderProducts(watches);



inputSearchElm = document.querySelector("#searchInput");

function searchProduct() {
    wordInput = inputSearchElm.value;
    dataFromLocal = getWatchesFromLocal();
    searchResult = dataFromLocal.filter((p) =>
        p.titel.toLowerCase().includes(wordInput.toLowerCase())
    );

    renderProducts(searchResult);
}

function filterByPrice() {
    minInput = parseInt(document.querySelector("#minInput").value);
    maxInput = parseInt(document.querySelector("#maxInput").value);
    const filtered = watches.filter(
        (p) => p.price >= minInput && p.price <= maxInput
    );
    renderProducts(filtered);
}
function filterReste() {
    minInput = parseInt((document.querySelector("#minInput").value = ""));
    maxInput = parseInt((document.querySelector("#maxInput").value = ""));
    renderProducts(watches);
}

function allProducts() {
    renderProducts(watches);

    const newProducts = getWatchesFromLocal();
    renderProducts(newProducts);
}

function renderBrands() {
    brands = new Set(watches.map((p) => p.brand));
    proBrand = Array.from(brands);
    document.querySelector("#renderBrands").innerHTML = proBrand
        .map(
            (p) =>
                `<li><button class="dropdown-item" onclick="productByBrandName('${p}')" >${p}</button></li>`
        )
        .join("");
}
renderBrands();

function productByBrandName(proBrand) {
    brandArray = watches.filter((p) => p.brand == proBrand);
    renderProducts(brandArray);
}
