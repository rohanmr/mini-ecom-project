watches=[
    {id:1,
    titel:"Marvellous FX2",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
    price:"2000",
    stock:"10",
    brand:"Titan"
},
{id:2,
    titel:"boAt Stron Infinity",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
    price:"2000",
    stock:"10",
    brand:"boAt"
},
{id:3,
    titel:"Fastrack FX2",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
    price:"2000",
    stock:"10",
    brand:"Fastrack"
},
{id:4,
    titel:"Fastrack Smart Watch",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
    price:"2000",
    stock:"10",
    brand:"Fastrack"
},
{id:5,
    titel:"Noise Smart Watch",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
    price:"2000",
    stock:"10",
    brand:"Noise"
},
{id:6,
    titel:"Titan Smart Watch",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
    price:"2000",
    stock:"10",
    brand:"Titan"
},
{id:7,
    titel:"Noise  Watch",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
    price:"2000",
    stock:"10",
    brand:"Noise"
},
{id:8,
    titel:"boat unity Smart Watch",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis?",
    price:"2000",
    stock:"10",
    brand:"boAt"
}

]




function addProduct(){
    titelInput=document.querySelector("#title").value
    desInput=document.querySelector("#description").value
    priceInput=document.querySelector("#price").value
    stockInput=document.querySelector("#stock").value
    brandInput=document.querySelector("#brand").value

    newWatch={
            id:Date.now(),
            titel:titelInput,
            description:desInput,
            price:priceInput,
            stock:stockInput,
            brand:brandInput
        }


     watches.push(newWatch)

localStorage.setItem('products', JSON.stringify(watches));

 document.querySelector("#alert").innerHTML=`<div class="alert w-50 mt-4 alert-success alert-dismissible fade show" role="alert">
            <strong>Product</strong> Added Successsfully.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
}

function renderProducts(prodArrray){
renderCardEle= document.querySelector("#renderCard");

renderCardEle.innerHTML=prodArrray.map((w,i)=>`
<div class="col-sm-12 col-md-6 col-lg-3 my-2  ">
    <div class="card shadow-lg">
      <div class="card-body">
        <h5 class="card-title">${w.titel}</h5>
        <p class="card-text m-1">${w.description}</p>
        <p class="card-text m-1">Stock: ${w.stock}</p>
        <p class="card-text m-1">Brand: ${w.brand}</p>
        <p class="card-text m-1">Price: ${w.price}</p>
       <div class="justify-content-between d-flex mt-3"> <button onclick="detailPaage()"  class="btn btn-primary">View More</button
       ></div>
      </div>
    </div>
</div>
`).join("")
}

renderProducts(watches)

function detailPaage(){
    window.location.href="./productdetails.html"
    
}

inputSearchElm = document.querySelector("#searchInput")

function searchProduct(){
   
    wordInput=inputSearchElm.value
    searchResult = watches.filter((p)=>p.titel.toLowerCase().includes(wordInput.toLowerCase()) )
    
    renderProducts(searchResult)
}


function allProducts(){

    renderProducts(watches)

    const newProducts = JSON.parse(localStorage.getItem('products'))
    renderProducts(newProducts)
}

function renderBrands(){
    brands= new Set(watches.map((p)=> p.brand))
    proBrand=Array.from(brands)
    document.querySelector("#renderBrands").innerHTML= proBrand.map((p)=>`<li><button class="dropdown-item" onclick="productByBrandName('${p}')" >${p}</button></li>`).join("")
}
renderBrands()

function productByBrandName(proBrand){
 brandArray=watches.filter((p)=>p.brand == proBrand)
 renderProducts(brandArray)
}

const newProducts = JSON.parse(localStorage.getItem('products'))
renderProducts(newProducts)