let product = {
    name: 'mango',
    type: 'sugar chip',
    ingredient: ['mango', 'sugar', 'extra'],
    from: 'taiwan'
};

console.log(product);
product['name'] = 'strawberry';

product.ingredient[0] = 'strawberry';
product.brand = 'samsung';

console.log(product);

let product2 = {};

product2.arr = [1, 2, 3, 4];
console.log(product2);