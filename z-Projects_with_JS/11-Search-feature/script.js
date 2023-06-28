const searchInputEl = document.getElementById("searchInput");
const blank = document.getElementById("productContainer");

const fetchProducts = async () =>{

    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    }

    catch(error){
        console.log("enable to fetch data from api");
        return error;
    }

}

main();

async function main(){
    
    console.log(fetchProducts());

    const products = await fetchProducts();  // by using AWAIT on apifunction--  we can get ARRAY

    console.log(products); // this is ARRAY now so we can apply FOR-EACH here

    products.forEach(element => {
        renderProducts(element);
    });
    

    function renderProducts(x){

        console.log("renderingg");



        console.log(x.id);

        const createNew = document.createElement("div");

        createNew.innerHTML = `
                            <div class="product-card" id="${x?.id}">
                            <div class="image-container">
                            <img src="${x?.image}" alt="">
                            </div>
                            <div class="product-content">
                            <h2>${x?.title}</h2>
                            <p>${x?.description}</p>
                            <button>${x?.price}$</button>
                            </div>
                            </div>
                            `;

        document.querySelector(".product-container").appendChild(createNew);
    
    }

    // searchbar wala feature
    
    const checkTextContain = (text, searchText) => {
        return text.toString().toLowerCase().includes(searchText);
      };
    
      const filterHandler = (event) => {
        console.log("called");
        const searchText = event.target.value.toLowerCase();
        console.log(event.target.value.toLowerCase());

        // use filter to filter from an ARRAY
        
        const filteredProducts = products.filter((product) => {
          return (
            checkTextContain(product.description, searchText) ||
            checkTextContain(product.title, searchText) ||
            checkTextContain(product.price, searchText)
          );
        });

        console.log(filteredProducts);
        
        blank.innerHTML = "";

        filteredProducts.forEach(ele => {
            renderProducts(ele);
        });
      };
    
      searchInputEl.addEventListener("keyup", filterHandler);
    
      
}



