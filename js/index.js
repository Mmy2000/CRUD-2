var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCat");
var productDescInput = document.getElementById("productDesc");
var productImageInput = document.getElementById("productImage");
var addBtn = document.getElementById('addBtn')
var updateBtn = document.getElementById('updateBtn')
var productsContainer ;
var product_id;

if (localStorage.getItem('products') !== null) {
    productsContainer =JSON.parse(localStorage.getItem('products'));
    displayProduct(productsContainer);
}else{
    productsContainer = [];
}

function addProduct() {
    var product = {
        code: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
        image: `img/products/${productImageInput.files[0]?.name}`,
    }
    productsContainer.push(product);
    localStorage.setItem('products' , JSON.stringify(productsContainer));
    clearForm();
    displayProduct(productsContainer);

}

function clearForm() {
    productNameInput.value = null;
    productCategoryInput.value = null;
    productDescInput.value = null;
    productPriceInput.value = null;
    productImageInput.value = null;
}

function displayProduct(arr) {
    var cartoona = ``;
    for (var i = 0; i < arr.length; i++) {
        cartoona += `<div class="col-md-3">
                        <div class="inner p-2">
                            <img src="${arr[i].image}" class="w-100" alt="">
                            <div class="content p-2">
                                <h2>${arr[i].code}</h2>
                                <span>${arr[i].price}$</span>
                                <span class="badge bg-secondary ms-4">${arr[i].category}</span>
                                <p class="mt-2">${arr[i].desc}</p>
                                <a href="#" onclick="setFormForUpdate(${i})" class="btn rounded-0 btn-outline-warning w-100 mb-2">Update<i class="fa-solid fa-pen ps-1"></i></a>
                                <a href="#" onclick="deleteProduct(${i})"  class="btn rounded-0 btn-outline-danger w-100">Delete<i class="fa-solid fa-trash-can ps-1"></i></a>
                            </div>
                        </div> 
                    </div>`
    }
    document.getElementById("rowData").innerHTML = cartoona;
}
function deleteProduct(index) {
    productsContainer.splice(index,1)
    localStorage.setItem('products' , JSON.stringify(productsContainer));
    displayProduct(productsContainer);
}

function setFormForUpdate(index) {
    product_id = index
    productNameInput.value = productsContainer[index].code
    productPriceInput.value = productsContainer[index].price
    productCategoryInput.value = productsContainer[index].category
    productDescInput.value = productsContainer[index].desc
    addBtn.classList.add('d-none')
    updateBtn.classList.remove('d-none')
}
function update() {
    productsContainer[product_id].code = productNameInput.value;
    productsContainer[product_id].price = productPriceInput.value;
    productsContainer[product_id].category = productCategoryInput.value;
    productsContainer[product_id].desc = productDescInput.value;
    productsContainer[product_id].image = `img/products/${productImageInput.files[0]?.name}`;
    localStorage.setItem('products' , JSON.stringify(productsContainer));
    displayProduct(productsContainer)
    clearForm();
    updateBtn.classList.add('d-none')
    addBtn.classList.remove('d-none')
}
function search(q) {
    var searchArr = [];
    for (var i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].code.toLowerCase().includes(q.toLowerCase())) {
            searchArr.push(productsContainer[i]);
        }
    }
    displayProduct(searchArr);
}

function valedateInputs(element) {
    var regex = {
        productName:/^[A-Z][a-z]{2,8}$/,
        productPrice:/^[0-9][0-9]/,
        productDesc:/^.{6}$/,
        productCat:/^[A-Z][a-z]{0,}$/,
    }

    if (regex[element.id].test(element.value) == true) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        element.nextElementSibling.classList.replace('d-block','d-none')
        return true;
    }
    else{
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')
        element.nextElementSibling.classList.replace('d-none','d-block')
        return false;
    }

}
// regex for ip
// const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// function isValidIPv4(ip) {
//   return ipv4Regex.test(ip);
// }

