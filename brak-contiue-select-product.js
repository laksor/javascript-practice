

// Break and continue for selection some product.


const products = [
    {name: 'iphone11 phone', price: 7000},
    {name: 'samsung laptop', price: 8700},
    {name: 'htc phone', price: 6700},
    {name: 'walton laptop', price: 4700},
    {name: 'asus laptop', price: 37000},
    {name: 'plus one watch', price: 2700}
];

for(const product of products){
    if(product.price < 5000){
       continue;
    }
    console.log(product);  
}
