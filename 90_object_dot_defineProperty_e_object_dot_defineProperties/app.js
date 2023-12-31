/**
 * defineProperty()
 */
(() => {
    function example01() {

        function Product(name, price, stock) {
            this.name = name;
            this.price = price;
            this.stock = stock;
            Object.defineProperty(this, 'stock', {});
        }

        const product_1 = new Product('Camiseta', 20, 3);
        console.log(product_1);

        example01();
    }

    function example02() {

        function Product(name, price, stock) {
            this.name = name;
            this.price = price;

            Object.defineProperty(this, 'stock', {
                enumerable: true,       // display the key
                value: stock,           // give the key a value
                writable: false,        // whether or not to allow changes
                configurable: false,    // allows or not to configure
            });
        }

        const product_1 = new Product('Camiseta', 20, 3);
        product_1.stock = 50000;

        console.log(product_1);

        example02();
    }

    function example03() {

        function Product(name, price, stock) {
            this.name = name;
            this.price = price;

            Object.defineProperty(this, 'stock', {
                enumerable: true,       // display the key

                value: function () {    // give the key a value
                    return stock
                },

                writable: false,        // whether or not to allow changes
                configurable: false,    // allows or not to configure
            });
        }

        const product_1 = new Product('Camiseta', 20, 3);
        product_1.stock = 50000;

        console.log(product_1.stock());

        example03();
    }

    function example04() {

        function Product(name, price, stock) {
            this.name = name;
            this.price = price;

            Object.defineProperty(this, 'stock', {
                enumerable: false,       // display the key

                value: function () {    // give the key a value
                    return stock
                },

                writable: false,        // whether or not to allow changes
                configurable: false,    // allows or not to configure
            });
        }

        const product_1 = new Product('Camiseta', 20, 3);

        console.log(Object.keys(product_1));

        for (let key in product_1) {
            console.log(key);
        }

        example04();
    }

    function example05() {

        function Product(name, price, stock) {
            this.name = name;
            this.price = price;

            Object.defineProperty(this, 'stock', {
                enumerable: true,       // display the key

                value: function () {    // give the key a value
                    return stock
                },

                writable: false,        // whether or not to allow changes
                configurable: false,    // allows or not to configure
            });
        }

        const product_1 = new Product('Camiseta', 20, 3);

        console.log(Object.keys(product_1));

        for (let key in product_1) {
            console.log(key);
        }

        example05();
    }
})();

/**
 * defineProperties()
 */
(() => {
    function example01() {

        function Product(name, price, stock) {
            Object.defineProperty(this, 'stock', {
                enumerable: true,       // display the key
                value:  stock,          // give the key a value
                writable: false,        // whether or not to allow changes
                configurable: false,    // allows or not to configure
            });

            Object.defineProperties(this, {
                name: {
                    enumerable: true,   // display the key
                    value: name,        // give the key a value
                    writable: true,     // whether or not to allow changes
                    configurable: true, // allows or not to configure
                },
                
                price: {
                    enumerable: true,   // display the key
                    value: price,       // give the key a value
                    writable: true,     // whether or not to allow changes
                    configurable: true, // allows or not to configure
                },
            });
        }

        const product_1 = new Product('Camiseta', 20, 3);
        console.log(product_1);

        for (let key in product_1) {
            console.log(key);
        }

    }
    example01();
})();