var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCat");
var productDescInput = document.getElementById("productDesc");
var productImageInput = document.getElementById("productImage");
var productsContainer = [];


function addProduct() {
    var product = {
        code:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescInput.value,
        image:'img/post-3.jpg',
    }
    productsContainer.push(product);
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
                        <h2>Sumsung</h2>
                        <span>2000$</span>
                        <span class="badge bg-secondary ms-4">Category</span>
                        <p class="mt-2">Lorem ipsum dolor sit.</p>
                        <a href="#"  class="btn btn btn-outline-warning">Update</a>
                        <a href="#"  class="btn btn btn-outline-danger">Delete</a>
                    </div>
                </div> 
                </div>`
    }
    document.getElementById("rowData").innerHTML = cartoona;
}