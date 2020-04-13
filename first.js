var productNameInp = document.getElementById("productNameInp");
var productPriceInp = document.getElementById("productPriceInp");
var productCategoryInp = document.getElementById("productCategoryInp");
var productDescInp = document.getElementById("productDescInp");


var productContainer;


if (localStorage.getItem("productConStorage") == null) {

    var productContainer = [];

}
else {
    productContainer = JSON.parse(localStorage.getItem("productConStorage"));
    displayProduct();
};

function addProduct() {

    product = {
        name: productNameInp.value,
        price: productPriceInp.value,
        category: productCategoryInp.value,
        desc: productDescInp.value
    };

    productContainer.push(product);
    localStorage.setItem("productConStorage", JSON.stringify(productContainer))
    displayProduct();

    clearForm()

}



function displayProduct() {

    var cartone = "";

    for (i = 0; i < productContainer.length; i++) {

        cartone += `<tr>
         <td>` + productContainer[i].name + `</td> 
<td>`+ productContainer[i].price + `</td>
<td>`+ productContainer[i].category + `</td>
<td>`+ productContainer[i].desc + `</td>
<td> <button onclick="updateProduct(`+ i + `)" class="btn btn-warning" >Update</button> </td>
<td> <button onclick="deleteProduct(`+ i + `)" class="btn btn-danger" >Delete</button> </td>
 </tr>`


    }

    document.getElementById("tableBody").innerHTML = cartone;
}


function clearForm() {
    productNameInp.value = ``;
    productPriceInp.value = ``;
    productCategoryInp.value = ``;
    productDescInp.value = ``;

}


function searchProducts(term) {
    var cartona = '';
    for (i = 0; i < productContainer.length; i++) {

        if (productContainer[i].name.includes(term) == true) {
            cartona +=
                `<tr> <td>` + productContainer[i].name + `</td> 
<td>`+ productContainer[i].price + `</td>
<td>`+ productContainer[i].category + `</td>
<td>`+ productContainer[i].desc + `</td>
<td> <button onclick="updateProduct(`+ i + `)" class="btn btn-warning" >Update</button> </td>
<td> <button onclick="deleteProduct(`+ i + `)" class="btn btn-danger" >Delete</button> </td>
 </tr>`

        };
    };

    document.getElementById("tableBody").innerHTML = cartona;

};



function deleteProduct(indx)

{

    productContainer.splice(indx,1) ;

  localStorage.setItem("productConStorage", JSON.stringify(productContainer)) ;
    displayProduct();

}








function updateProduct (indxx)

{

    productNameInp.value = productContainer[indxx].name;
    productPriceInp.value = productContainer[indxx].price;
    productCategoryInp.value = productContainer[indxx].category;
    productDescInp.value = productContainer[indxx].desc;

    document.getElementById("divBtn").innerHTML=`<button id="addBtn" class="btn btn-success float-right" onclick="updateNew(`+indxx+`);">Update</button>`


}


function updateNew(test){
  
    product = {
        name: productNameInp.value,
        price: productPriceInp.value,
        category: productCategoryInp.value,
        desc: productDescInp.value
    };


    productContainer.splice(test,1,product);

   localStorage.setItem("productConStorage", JSON.stringify(productContainer))
    displayProduct();
    clearForm() ;


    document.getElementById("divBtn").innerHTML=`<button id="addBtn" onclick="addProduct();" class="btn btn-info float-right">add product</button>`
     
}



