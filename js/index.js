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

}
function clearForm() {
    productNameInput.value = null;
    productCategoryInput.value = null;
    productDescInput.value = null;
    productPriceInput.value = null;
    productImageInput.value = null;
}
