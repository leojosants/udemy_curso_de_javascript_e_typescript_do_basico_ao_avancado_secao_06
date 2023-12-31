function example01() {

    function Product(name, price, stock) {
        this.name = name;
        this.price = price;

        Object.defineProperty(this, 'stock', {
            enumerable: true,   // display the key
            get: function () { return stock; },

            set: function (value) {
                if (typeof value !== 'number') {
                    console.log('The value is not of type number');
                    return;
                }
                else {
                    console.log('The value is of type number');
                    console.log(value);
                }
            },
            configurable: true, // allows or not to configure
        });
    }

    const product = new Product('Camiseta', 20, 3);
    product.stock = '1';

    console.log(product.stock);
    console.log(product);

    example01();
}

function example02() {

    function Product(name, price, stock) {
        this.name = name;
        this.price = price;
        let private_stock = stock;

        Object.defineProperty(this, 'stock', {
            enumerable: true,   // display the key
            get: function () { return private_stock; },

            set: function (value) {
                if (typeof value !== 'number') { throw new TypeError('The value is not of type number'); }
                private_stock = value;
                console.log(value);
            },

            configurable: true, // allows or not to configure
        });
    }

    const product = new Product('Camiseta', 20, 3);
    product.stock = '1';

    console.log(product.stock);

    example02();
}

function example03() {

    function createProduct(name) {
        return {
            get name() { return name; },

            set name(value) {
                value = value.replace('srsrsr', '').trim();
                name = value;
            },
        };
    }

    const product = createProduct('Camiseta');
    product.name = 'srsrsr       Boné';
    console.log(product.name);

    example03();
}