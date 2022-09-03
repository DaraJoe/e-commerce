let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");
    
//let cartBasket = []
 let cartBasket = JSON.parse(localStorage.getItem("data")) || []


let calculation = () => {
    let cartIcons = document.querySelectorAll(".cartAmount");
    const totalCartCount = cartBasket.map((x) => x.item).reduce((x, y) => x + y, 0);
    console.log(`log`, cartIcons, `cart count`, totalCartCount);
    cartIcons.forEach(cartIcon => {
        cartIcon.innerHTML = totalCartCount;
    })
 };
 
 calculation();

 let generateCartItems =()=>{
    if (cartBasket.length !== 0) {
 
        return (shoppingCart.innerHTML = cartBasket.map((x)=> {
           // console.log(x);
            let {id, item} = x;
            let search =shopItemsData.find((y)=> y.id === id )|| [];
            
            return `
            <div class= "cart-item">
            <img width="100px" src="${search.img}" alt="" />
            <div class="details">
              <div class="title-price-x">
                  <h4 class="title-price">
                     <p>${search.name}</p>
                     <p class="cart-item-price">$${search.price}</p>
                  </h4>

                  <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
              </div>

              <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
               
        
              <h3>$ ${item * search.price}</h3>
            </div>

            </div>
            `;
        })
        .join("") );

    } else {
        // console.log("caart is totally empty")
        shoppingCart.innerHTML = ``;
        label.innerHTML =`
        <h2> Cart is Empty </h2>
        <a href="shop.html">
        <button class="HomeBtn"> Back to shop</button>
        </a>
        `;
    }
 };

 //console.log("jose")

 generateCartItems();

/ let increment = (id)=>{
    let selectedItem = id;
    let search = cartBasket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        cartBasket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else{
        search.item += 1;
    }
   

    
    localStorage.setItem("data", JSON.stringify(cartBasket));

    generateCartItems();

    update (selectedItem.id)
}; */
/ let decrement = (id)=>{
    let selectedItem = id;
    let search = cartBasket.find((x) => x.id === selectedItem.id);

    if(search === undefined) return;
    else if( search. item === 0 ) return;
    else{
        search.item -= 1;
    }

    update (selectedItem.id)

   // cartBasket = cartBasket.filter((x) => x.item !==0); 

    generateCartItems();

    localStorage.setItem("data", JSON.stringify(cartBasket));
};

let update = (id)=>{
    let search = cartBasket.find((x) => x.id === id)
    // console.log(search.item);
    document.getElementById(id).innerHTML =search.item;
    calculation();
    TotalAmount();
}; 


let removeItem = (id) => {
    let selectedItem = id;

    cartBasket = cartBasket.filter((x)=>x.id !== selectedItem.id);

    generateCartItems();
    TotalAmount();
    calculation();
    localStorage.setItem("data", JSON.stringify(cartBasket));

};

let clearCart =()=> {
    cartBasket=[];
    generateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(cartBasket));

};

let TotalAmount = ()=>{
    if (cartBasket.length !==0) {
        let amount = cartBasket.map((x)=> {
            let{item, id} =x;
            let search =shopItemsData.find((y)=> y.id === id )|| [];

            return item * search.price;
        }).reduce((x,y)=>x+y,0);

        label.innerHTML= `
        <h2> Total Bill: $ ${amount}</h2>
        <button class="checkout">Checkout</button>
        <button onclick="clearCart()" class="removeAll">Clear Cart</button>

        `;
    } else return;
};

TotalAmount();
*/