var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCat");
var productDescInput = document.getElementById("productDesc");
var productImageInput = document.getElementById("productImage");
var productsContainer = [];

if (localStorage.getItem('products') !== null) {
    productsContainer =JSON.parse(localStorage.getItem('products'));
    displayProduct();
}

function addProduct() {
    var product = {
        code: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
        image: 'img/post-3.jpg',
    }
    productsContainer.push(product);
    localStorage.setItem('products' , JSON.stringify(productsContainer));
    clearForm();
    displayProduct();

}

function clearForm() {
    productNameInput.value = null;
    productCategoryInput.value = null;
    productDescInput.value = null;
    productPriceInput.value = null;
    productImageInput.value = null;
}

function displayProduct() {
    var cartoona = ``;
    for (var i = 0; i < productsContainer.length; i++) {
        cartoona += `<div class="col-md-3">
                        <div class="inner p-2">
                            <img src="img/post-3.jpg" class="w-100" alt="">
                            <div class="content p-2">
                                <h2>${productsContainer[i].code}</h2>
                                <span>${productsContainer[i].price}$</span>
                                <span class="badge bg-secondary ms-4">${productsContainer[i].category}</span>
                                <p class="mt-2">${productsContainer[i].desc}</p>
                                <a href="#"  class="btn btn btn-outline-warning w-100 mb-2">Update<i class="fa-solid fa-pen ps-1"></i></a>
                                <a href="#" onclick="deleteProduct(${i})"  class="btn btn btn-outline-danger w-100">Delete<i class="fa-solid fa-trash-can ps-1"></i></a>
                            </div>
                        </div> 
                    </div>`
    }
    document.getElementById("rowData").innerHTML = cartoona;
}
function deleteProduct(index) {
    productsContainer.splice(index,1)
    localStorage.setItem('products' , JSON.stringify(productsContainer));
    displayProduct();
}