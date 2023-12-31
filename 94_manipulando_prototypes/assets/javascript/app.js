/* 
    const object_a = {
        key_a: 'A',
    };

    const object_b = {
        key_b: 'B',
    };

    const object_c = new Object();
    object_c.key_c = 'C';

    Object.setPrototypeOf(object_b, object_a);
    Object.setPrototypeOf(object_c, object_b);
    console.log(object_b.key_a);
    console.log(object_c.key_b);
*/

/* 
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }

    Product.prototype.discount = function (percentage) {
        this.price = this.price - (this.price * (percentage / 100));
    }

    Product.prototype.increase = function (percentage) {
        this.price = this.price + (this.price * (percentage / 100));
    }

    const instanceateProduct = (name, price) => {
        return new Product(name, price);
    };

    const product_1 = instanceateProduct('Camiseta', 50.0);

    const product_2 = {
        name: 'Caneca',
        price: 15.0,
    };

    // product_2.increase(); // TypeError: product_2.increase is not a function

    Object.setPrototypeOf(product_2, Product.prototype);

    product_2.increase(10);

    console.log(product_1);
    console.log(product_2);
*/

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function (percentage) {
    this.price = this.price - (this.price * (percentage / 100));
}

Product.prototype.increase = function (percentage) {
    this.price = this.price + (this.price * (percentage / 100));
}

const instanceateProduct = (name, price) => {
    return new Product(name, price);
};

const product_1 = instanceateProduct('Camiseta', 50.0);

const product_2 = {
    name: 'Caneca',
    price: 15.0,
};

// product_2.increase(); // TypeError: product_2.increase is not a function
Object.setPrototypeOf(product_2, Product.prototype);
product_2.increase(10);

const product_3 = Object.create(Product.prototype, {
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113,
    },

    color: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'azul',
    },
});


product_3.increase(10);

console.log(product_3);