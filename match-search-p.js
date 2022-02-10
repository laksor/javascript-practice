
//**** matching product by searching product.

const product = [
    {name: 'iphone11 phone', price: 70000},
    {name: 'samsung laptop', price: 87000},
    {name: 'htc phone', price: 67000},
    {name: 'walton laptop', price: 47000},
    {name: 'asus laptop', price: 37000},
    {name: 'plus one watch', price: 27000}
];
function searchProduct(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
            result.push(product);
        }  
    }
    return result;
}
const matched = searchProduct(product, 'phone');
console.log(matched);