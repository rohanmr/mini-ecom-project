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
}
]


renderCardEle= document.querySelector("#renderCard");
renderCardEle.innerHTML=watches.map((w,i)=>`
<div class="col-sm-12 col-md-6 col-lg-3 mb-2  ">
    <div class="card shadow-lg">
      <div class="card-body">
        <h5 class="card-title">${w.titel}</h5>
        <p class="card-text">${w.description}</p>
        <p class="card-text">Stock:${w.stock}</p>
        <p class="card-text">Price:${w.price}</p>
       <div class="justify-content-between d-flex"> <a href="./productdetails.html"  class="btn btn-primary">View More</a
       ><button  class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class="fa-solid fa-cart-plus "></i></button></div>
      </div>
    </div>
</div>
`).join("")





